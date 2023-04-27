import React,{ Component, useEffect, useRef } from "react"
import { render } from "react-dom"
import { ReachAuthContext } from "../Context/ReachContext"
import  * as backend from "../../build/Server.Server.mjs"
import addLiquidity from "./api/pool"
const steps = [
    "Add Funds",
    "Ask Deploy",
    "Deploy"
]
let count = 0
export default class AdminView extends Component{
    static contextType = ReachAuthContext
    constructor(){
        super()
        this.state = {
            currentUser:{},
            login:()=>{},
            hasUser:false,
            stdlib:{},
            changeParams:()=>{},
            params:{algos:0,jasiris:0,poolContract:""},
            contract:{},
            setCtx:()=>{},
            JID:0,
            contractAddress:undefined,
            setCtxAddress:()=>{},
            poolContractAddress: React.createRef()
    }}
    tokenParams(){
        console.log("TOKEN PARAMS: ",
        this.state.stdlib.parseCurrency(this.state.params.algos),
        this.state.stdlib.parseCurrency(this.state.params.jasiris),
        this.state.JID)
        return [
            this.state.stdlib.parseCurrency(this.state.params.algos),
            this.state.stdlib.parseCurrency(this.state.params.jasiris),
            this.state.JID
        ]
    }
    async ready(ctx){
        console.log("TOOKEN READY")
        const ct = JSON.stringify(ctx)
        this.setState((state,props) => ({
            ...state, contractAddress:ct
        },() => {console.log("THIS READY: ", ct)}))
        console.log("THIS READY: ", ct)
        if(!this.contractAddress) return
        await this.state.setCtxAddress(ct)
        console.log("CONTRACT ADDRESS: ", this.state)
    }
    async deploy(){
        console.log("THIS DEPLOY: ", this.state)
        await this.state.currentUser.Account.tokenAccept(this.state.JID)
        this.contract = this.state.currentUser.Account.contract(backend)
        
        this.setState((state,props) => ({
            ...state, contract:this.contract
        },() => {console.log("THIS STATE")}))

        if(!this.contract.p) return
        this.contract.p.Admin(this)
        await this.state.setCtx(this.contract)
        console.log("CONTRACT: ", this.state)
    }
    async getPoolContract () {
        console.log("Contract Address: ",this.state.params.poolContract)
        return JSON.parse(this.state.params.poolContract)
    }
    async handleSubmit(algosR,jasirisR,pc){
        console.log("Algos: ",algosR,jasirisR)
        count += 1
        try {
            await this.state.changeParams(algosR, jasirisR,pc)
        } catch (error) {
            console.log("ERROR: ", error)
        }
        
        console.log("Count: ", count)
    }
     SetParams(){
        const {currentUser,login,hasUser,stdlib,
            changeParams,params,contract,setCtx,
            JID,contractAddress,setCtxAddress} = this.context
    
        console.log("SET PARAMS: ",currentUser)
        this.setState({...this.state,
            currentUser,login,hasUser
            ,stdlib,changeParams,params,contract,setCtx,JID,
            contractAddress,setCtxAddress
        })
        console.log("STATE: ", this.state)
    }
    async checkBalance(bc){
        const cx = JSON.parse(bc)
        this.contract = this.state.currentUser.Account.contract(backend,cx)
        // this.state.setCtx(this.contract)
        if(!this.contract.v) return
        const res = await this.contract.v.AddressView.
        ContractBalance()
        console.log("CONTRACT BALANCE: ", this.state.stdlib.formatCurrency(res[1]))
    }
    async fundJSRS(bc){
        const cx = JSON.parse(bc)
        this.contract = this.state.currentUser.Account.contract(backend,cx)
        // this.state.setCtx(this.contract)
        if(!this.contract.v) return
        const res = await this.contract.a.AdminApi.fundJSR(this.state.stdlib.parseCurrency(50000))
        console.log("ADDED FUNDS: ", res)
    }
    componentDidUpdate(){
        if(this.state.params != this.context.params){
            console.log("COMPONENT UPDATE")
            this.SetParams()
        }
    }
    componentDidMount(){
        console.log("COMPONENT MOUNT")
        this.SetParams()
    }
    render(){
        console.log("RENDER: ", count)
        let algs = 0
        let jars = 0
        let pc
        let bc
        if(count == 0){
        return (
        <>
        <h1>{steps[count]}</h1>
        <div>
            <input type="number" 
            onChange={(e) => {algs = e.currentTarget.value}}
            />
            <input type="number" 
            onChange={(e) => {jars = e.currentTarget.value}}
            />
            <input type="string" 
            onChange={(e) => {pc = e.currentTarget.value}}/>
            <input type="string" placeholder="balance" 
            onChange={(e) => {bc = e.currentTarget.value}}/>
            <button onClick={()=>{this.handleSubmit(algs,jars,pc)}} >SUBMIT</button>
        </div>
        <button onClick={()=>{this.checkBalance(bc)}} >balance</button>
        <button onClick={()=>{this.fundJSRS(bc)}} >fund jsr</button>
        {/* <button onClick={()=>{addLiquidity()}}> Add Liquidity</button> */}
        </>
        )}
        else if(count == 2){
            return (
                <>
                <h1>{steps[count]}</h1>
                <div>
                <button onClick={()=>{this.deploy()}} >SUBMIT</button>
                </div>
                </>
        )}
        else if(count == 2){
            return (
                <>
                <h1>{steps[count]}</h1>
                <div>
                </div>
                </>
        )}
    }
}