import React, { Component } from "react";
import * as backend from "../../build/Server.Server.mjs"
import SetParams from "../Context/ClassFunctions"
import axios from "axios"
import { ReachAuthContext } from "../Context/ReachContext";
import addLiquidity from "./api/pool.js";
let count = 0
export default class GetJasiris  extends Component{
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
    }
    }
    async deploy(){
        console.log("DEPLOY: ")
        //const cx = this.state.stdlib.bigNumberify(145340032)
        const ct = JSON.parse(this.state.contractAddress)
        this.contract = this.state.currentUser.Account.contract(backend,ct)
        this.state.setCtx(this.contract)
        const stdlib = this.state.stdlib
        if(!this.contract.a) return
        const  [Wera, assValue, gotJsr
            , pooled, totalPool, fee] = await this.contract.a.UserApi.
        GetJASIRIS(this.wera)
        const f = parseInt(fee._hex)
        console.log("000000000000000000000000000000000000")
        console.log(assValue,totalPool,fee)
        console.log([
          Wera,
          ["asset value",parseInt(assValue._hex)],
          gotJsr,
          pooled,
          ["total pool",parseInt(totalPool._hex)],
          ["fee",f]])
        const response = await this.getPool(f)
    }
    async getPool(fee) {
        const res = addLiquidity(fee)
        return res
      }
    async handleSubmit(ct,an,as,at,av,oa,aa,hs,tm,ec){
        console.log("Handle Submit")
        count += 1
        this.wera = [
            an,as,at,this.state.stdlib.parseCurrency(av),
            oa,aa,hs,tm,ec
        ]
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
        let an
        let as
        let at
        let av
        let oa
        let aa
        let hs
        let tm
        let ec

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
            <button onClick={()=>{this.deploy()}}>GET JASIRI</button>
            </>
        )}
}