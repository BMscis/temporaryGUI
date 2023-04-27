import React, { Component } from "react";
import * as backend from "../../build/Market.Market.mjs"
import {SetParams, CheckEvent } from "../Context/ClassFunctions"
import { ReachAuthContext } from "../Context/ReachContext";
let count = 0
export default class Market  extends Component{
    static contextType = ReachAuthContext
    constructor (){
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
    async random(){return this.state.stdlib.hasRandom.random()}
    async GetSale(){
        console.log("GET SALE")
        return [this.wera, this.meta]
    }
    async GetToken(){
        console.log("GET TOKEN")
        return this.state.JID
    }
    async PshowToken(tkn, num , ctx){
        console.log("THIS SHOWTOKEN")
        await this.state.currentUser.Account.tokenAccept(tkn)
        console.log("TOKEN: ", this.state.stdlib.bigNumberToNumber(tkn))
        console.log("VALUE: ", this.state.stdlib.formatCurrency(num))
        console.log("VALUE: ", this.state.stdlib.formatCurrency(num,3))
        console.log("THIS CONTRACT: ", JSON.stringify(ctx))
        this.state.setCtxAddress(JSON.stringify(ctx))
    }
    async AuctionStarted(){
        console.log("AuctionStarted")
    }
    async AuctionEnded(){
        console.log("Auction Ended")
    }
    async deploy(){
        console.log("DEPLOY: ")
        this.contract = this.state.currentUser.Account.contract(backend)
        this.state.setCtx(this.contract)
        if(!this.contract.a) return
        this.contract.p.Protocol(this)
        this.contract.events.MarketView.showBid.monitor(CheckEvent)
        this.contract.events.MarketView.auctionEnd.monitor(CheckEvent)
        console.log("CONTRACT DEPLOYED: ")
    }
    async handleSubmit(ct,an,as,at,av,oa,aa,hs,tm,ec){
        console.log("Handle Submit")
        count += 1
        this.wera = [
            an,as,at,this.state.stdlib.parseCurrency(av),
            oa,aa,hs,tm,ec
        ]
        this.meta = hs
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
        let ct
        let an
        let as
        let at
        let av
        let oa
        let aa
        let hs
        let tm
        let ec
        console.log("COUNT: ", count)
        if(count == 0){
        return (
            <>
            <div>
                <input type="text" placeholder="Admin Contract"
                onChange={(e) => {ct = e.currentTarget.value}}
                />
                <input type="text" placeholder="Asset Name"
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
                <input type="text" 
                placeholder="Asset Value"
                onChange={(e) => {av = e.currentTarget.value}}
                />
                <input type="text" 
                placeholder="Owner Address"
                onChange={(e) => {oa = e.currentTarget.value}}
                />
                <input type="text" 
                placeholder="Admin Address"
                onChange={(e) => {aa = e.currentTarget.value}}
                />
                <input type="text" 
                placeholder="Hash"
                onChange={(e) => {hs = e.currentTarget.value}}
                />
                <input type="text" 
                placeholder="Time"
                onChange={(e) => {tm = e.currentTarget.value}}
                />
                <input type="text" 
                placeholder="url"
                onChange={(e) => {ec = e.currentTarget.value}}
                />
                <button onClick={()=>{this.handleSubmit(ct,an,as,at,av,oa,aa,hs,tm,ec)}}>SUBMIT</button>
            </div>
            <button onClick={()=>{this.deploy()}}>MAKE SELL</button>
            
            </>
        )}
        else if (count == 1){
            return (
                <>
                </>
            )
        }
    }
}