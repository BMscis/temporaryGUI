const {
    createPool, getPoolReserves, isPoolEmpty,
    generateBootstrapTransactions, getPoolInfo, isPoolNotCreated,
    signBootstrapTransactions, getPoolPairRatio, getMintLiquidityQuote,
    generateMintTxns, signMintTxns, mintLiquidity, isPoolReady
}= require("@tinymanorg/tinyman-js-sdk")
const algosdk = require( "algosdk");

//get client
class TinyPool {
    #MNEMONIC
    #ACCOUNT
    #WALLET_ADDRESS
    #CLIENT
    constructor() {
        this.#MNEMONIC = `famous trigger scout dizzy cricket hidden aisle stomach regret define cat polar glimpse basket tube humor hungry captain load baby sunset regret top absorb move`
        this.#ACCOUNT = algosdk.mnemonicToSecretKey(this.#MNEMONIC)
        this.#WALLET_ADDRESS = this.#ACCOUNT.addr
        this.CONTRACT_ID = 62368684
        this.UNLOCK_ID = 118346460
        this.LIQUIDITY_TOKEN_ID = 145472697
        this.algodServer = "https://testnet-api.algonode.cloud"
        this.port = ''
        this.token = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        this.#CLIENT = null
        this.ALGO = {
            id: 0,
            decimals: 6,
            unit_name: "ALGO"
        }
        this.JSRUNLOCK = {
            id: 118346460,
            decimals: 6,
            unit_name: "UNLOCK"
        }
        this.jsrUNLOCK_ALGO_POOL = {
            validatorAppID: 62368684,
            asset1ID: 118346460,
            asset2ID: 0
        }
        this.poolInfo = null
        this.isPoolEmpty = null
        this.poolReserves = null
        this.isPNotCreated = true
        this.poolRatio = null
        this.status = null
        
        this.start()
    }
    async start() {
        console.log("starting tp")
        //start client
        const clt = new algosdk.Algodv2(this.token, this.algodServer, this.port)

        //Get the Pool for this Asset pair
        this.#CLIENT = clt ? clt : new Error("Failed to get client")
        if (!clt) return new Error("Failed to get client")

        //check api status
        const sts = await this.checkStatus()
        this.status = sts ? true : new Error("status check failed.")
        if (!sts) return new Error("status check failed.")

        //get pool info
        const pI = await this.getPInfo()
        //check if pool created
        const isNotCreated = isPoolNotCreated(pI)
        this.isPNotCreated = isNotCreated
        //create pool
        if (this.isPNotCreated) {
            const nPI = await this.createJSRPool()
            if (!nPI) return new Error("Failed creating pool")
            this.poolInfo = nPI
        }
        this.poolInfo = pI
        //get reserves
        const pR = await this.getPReserves()
        if (!pR) return new Error("failed to get pool reservers.")
        await this.getPPairRatio()
        //check if empty
        await this.isPEmpty()
    }
    async checkStatus() {
        const status = await this.#CLIENT.status().do()
        return status
    }
    async getPInfo() {
        const poolInfo = await getPoolInfo(this.#CLIENT, this.jsrUNLOCK_ALGO_POOL)
        return poolInfo
    }
    async getPReserves() {
        if (!this.poolInfo) return new Error("Failed to get pool info")
        const poolReserves = await getPoolReserves(this.#CLIENT, this.poolInfo);
        this.poolReserves = poolReserves
        return poolReserves
    }
    async isPEmpty() {
        const isEmpty = isPoolEmpty(this.poolReserves);
        this.isPoolEmpty = isEmpty
    }
    async isPReady() {
        const isReady = isPoolReady(this.poolInfo);
        return isReady
    }
    async getPPairRatio() {
        console.log("POOL RESERVERS: ", this.poolReserves)
        const ppR = getPoolPairRatio({
            asset1: this.ALGO.decimals,
            asset2: this.JSRUNLOCK.decimals,
        }, this.poolReserves)
        this.poolRatio = ppR
        console.log("PPR: ", ppR)
    }
    async createJSRPool() {
        const bootstrapTxns = generateBootstrapTransactions({
            ...this.jsrUNLOCK_ALGO_POOL,
            client: this.#CLIENT,
            asset1UnitName: this.JSRUNLOCK.unit_name,
            asset2UnitName: this.ALGO.unit_name,
            initiatorAddr: this.#WALLET_ADDRESS
        })
        const { signedTxns, txnIDs } = await signBootstrapTransactions({
            ...this.jsrUNLOCK_ALGO_POOL,
            txGroup: bootstrapTxns,
            initiatorSigner: this.#WALLET_ADDRESS
        })
        const poolInfo = await createPool(
            ...this.jsrUNLOCK_ALGO_POOL,
            this.#CLIENT,
            signedTxns,
            txnIDs)
        return poolInfo
    }
    async swapPool() {
        console.log("Swap Pool")
    }
    async getMintQuote(unlock_amt, algo_amt) {
        const mq = await getMintLiquidityQuote(
            {
                pool: this.poolInfo,
                reserves: this.poolReserves,
                asset1In: unlock_amt,
                asset2In: algo_amt
            }
        )
        return mq
    }
    async generateMTxns(mintQuote, slippage) {
        //const sc = new Uint8Array(this.#ACCOUNT.sk)
        const cR = async (x) => {
            // console.log(x[0])
            console.log(this.#WALLET_ADDRESS)
            const toBeSigned = x[0].filter((i) => {
                return i.signers.includes(this.#WALLET_ADDRESS)
            })
            let signed = [];

            for (let item of toBeSigned) {
                const { blob } = await algosdk.signTransaction(item.txn, this.#ACCOUNT.sk);
                signed.push(blob);
            }
            console.log({signed})
            return signed
        }
        const mintTxns = await generateMintTxns({
            client: this.#CLIENT,
            pool: this.poolInfo,
            asset1In: mintQuote.asset1In,
            asset2In: mintQuote.asset2In,
            liquidityOut: mintQuote.liquidityOut,
            slippage,
            initiatorAddr: this.#WALLET_ADDRESS
        });
        //console.log(mintTxns)
        const signedTxns = await signMintTxns({
            pool: this.poolInfo,
            txGroup: mintTxns,
            initiatorSigner: cR
        })
        const data = await mintLiquidity({
            client: this.#CLIENT,
            pool: this.poolInfo,
            txGroup: mintTxns,
            signedTxns:signedTxns,
            initiatorAddr: this.#WALLET_ADDRESS
        });
         console.log("DATA: ", data)
        return data
    }
    async addLiquidity(fee) {
        const isR = await this.isPReady()
        if (!isR) return new Error("Pool is not ready")
        if (!this.poolRatio) new Error("Pool ratio not defined")
        console.log(Math.round(this.poolRatio, 0))
        const UNLOCK_amt = fee
        const ALGO_amt = UNLOCK_amt * (1 / Math.round(this.poolRatio))
        console.log({ ALGO_amt })
        const mintQuote = await this.getMintQuote(UNLOCK_amt, ALGO_amt)
        const slippage = 0.01
        console.log({ mintQuote })
        const res = await this.generateMTxns(
            mintQuote, slippage
        )
        res.liquidityOut = parseInt(res.liquidityOut)/1000000
        res.excessAmount.excessAmountForMinting = parseInt(
            res.excessAmount.excessAmountForMinting
        )
        res.excessAmount.totalExcessAmount = parseInt(
            res.excessAmount.totalExcessAmount
        )
        console.log("RES: ",res)
        return res
    }
}
module.exports = TinyPool
// const jsrUNLOCK = await GetAssetByID
// const poolInfo = await getPoolInfo(AlgodClient,)