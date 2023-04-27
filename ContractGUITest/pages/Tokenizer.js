import React, { Component } from "react";
import { ReachAuthContext } from "../Context/ReachContext";
import * as backend from "../../build/Tokenize.Tokenize.mjs"
import SetParams from "../Context/ClassFunctions";
let count = 0
count == 0
export default class Tokenizer extends Component{
    static contextType = ReachAuthContext
    constructor(){
        super()
        this.state = {
            currentUser:{},
            login:()=>{},
            hasUser:false,
            stdlib:{},
            changeParams:()=>{},
            params:{algos:0,jasiris:0},
            contract:{},
            setCtx:()=>{},
            JID:0,
            contractAddress:undefined,
            setCtxAddress:()=>{}
    }}

    random() { return this.state.stdlib.hasRandom.random(); }
    async deploy(){
        console.log("DEPLOY: ", this.state)
        //const ct = JSON.parse(this.state.contractAddress)
        this.contract = this.state.currentUser.Account.contract(backend)
        
        if(!this.contract.p) return
        this.contract.p.User(this)
        await this.state.setCtx(this.contract)
        console.log("CONTRACT: ", this.state)
    }
    async getAdmin() {
        console.log("GET ADMIN")
        const cx = this.state.stdlib.bigNumberify(145340032)
        return cx
    }
    async showWera(WERAt) {
        console.log("WERA: ", WERAt)
        const at = this.state.stdlib.bigNumberToNumber(WERAt.AssetType)
        const av = this.state.stdlib.bigNumberToNumber(WERAt.AssetValue)
        const tm = this.state.stdlib.bigNumberToNumber(WERAt.Time)
        console.log("WERA: ", WERAt)
        console.log("Asset Type: ",at)
        console.log("Asset Value: ",av)
        console.log("Tokenization time: ",tm)
    }
    async Done(){
        console.log("DONE:  ")
    }
    async handleSubmit(ct,an,as,at,av,ex){
        console.log("CT: ", ct)
        count += 1
        this.tokenize = [an, as,at, this.state.stdlib
        .parseCurrency(av),ex]

        this.state.setCtxAddress(ct)
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
    componentDidUpdate(){
        if (this.state.contractAddress != this.context.contractAddress){
            console.log("COMPONENT DID UPDATE")
            this.SetParams()
        }
    }
    componentDidMount(){
        console.log("COMPONENT MOUNT: ")
        this.SetParams()
    }
    render(){
        let an
        let as
        let at
        let av
        let ex
        let ct
        if(count == 0){
        return (
            <>
            <div>
                <input type="text" placeholder="contract"
                onChange={(e) => {ct = e.currentTarget.value}}
                />
                <input type="text" 
                placeholder="Asset Name"
                onChange={(e) => {an = e.currentTarget.value}}
                />
                <input type="text" 
                placeholder="Asset Symbol"
                onChange={(e) => {as = e.currentTarget.value}}
                />
                <input type="text" 
                placeholder="Asset Type"
                onChange={(e) => {at = e.currentTarget.value}}
                />
                <input type="number" 
                placeholder="Asset Value"
                onChange={(e) => {av = e.currentTarget.value}}
                />
                <input type="text" 
                placeholder="Link"
                onChange={(e) => {ex = e.currentTarget.value}}
                />
                <button onClick={()=>{this.handleSubmit(ct,an,as,at,av,ex)}}>SUBMIT</button>
            </div>
            <>
                <button onClick={()=>{this.deploy()}}>Deploy</button>
                </>
            </>
        )}
        else if (count == 1){
            return (
                <>
                <button onClick={()=>{this.deploy()}}>Deploy</button>
                </>
            )
        }
    }
}