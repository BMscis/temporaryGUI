import React, { Component } from "react";
import * as backend from "../../build/Market.Market.mjs"
import {SetParams, CheckEvent } from "../Context/ClassFunctions"
import { ReachAuthContext } from "../Context/ReachContext";

export default class Bidder extends Component{
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
            setCtxAddress:()=>{}}
    }
    async deploy(){
        console.log("DEPLOY: ")
        const ct = JSON.parse(this.state.contractAddress)
        this.contract = this.state.currentUser.Account.contract(backend,ct)
        this.state.setCtx(this.contract)
        if(!this.contract.a) return
        this.contract.events.MarketView.showBid.monitor(CheckEvent)
        this.contract.events.MarketView.auctionEnd.monitor(CheckEvent)
        const res = await this.contract.a.Bidder.makeBid(this.bid)
        await this.state.currentUser.Account.tokenAccept(res)
        console.log("TOKEN ACCEPT")
    }
    async makeSell(){
        console.log("MAKE SELL: ")
        const resp = await this.contract.a.Bidder.makeSell(this.token)
        console.log("MAKE SELL RESPONSE: ", resp)
    }
    async checkExpiry(){
        console.log("CHECK EXPIRY: ")
        const ct = JSON.parse(this.state.contractAddress)
        this.contract = this.state.currentUser.Account.contract(backend,ct)
        const ser = await this.contract.a.Bidder.checkExpiry(this.token)
        console.log("CHECK EXPIRY: ",ser)
    }
    async handleSubmit(ct,tk,bd){
        console.log("Handle Submit")
        console.log("THIS CT: ",ct)
        this.token = tk
        this.bid = this.state.stdlib.parseCurrency(bd)
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
        let ct
        let tk
        let bd
        return (
            <>
            <div>
                <input type="text" placeholder="Market Contract"
                onChange={(e) => {ct = e.currentTarget.value}}
                />
                <input type="number" placeholder="Token"
                onChange={(e) => {tk = e.currentTarget.value}}
                />
                <input type="number" placeholder="Bid"
                onChange={(e) => {bd = e.currentTarget.value}}
                />
                <button onClick={()=>{this.handleSubmit(ct,tk,bd)}}>SUBMIT</button>
            </div>
            <button onClick={()=>{this.deploy()}}>PLACE BID</button>
            <button onClick={()=>{this.checkExpiry()}}>CHECK EXPIRY</button>
            </>
        )}
}