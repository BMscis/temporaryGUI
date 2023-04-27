import React, { Component } from "react"
import  * as backend from "../../build/PoolTable.PoolTable.mjs"
import { ReachAuthContext } from "../Context/ReachContext"
export default class PoolView extends Component{
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
            setCtxAddress:()=>{},
            contractAddress: React.createRef()
    }}
    getToken (){
        return this.state.JID
    }
    getCmp (cp) {
        const ct = JSON.stringify(cp)
        console.log(ct)
        return null
    }
    call (x,y,z){
        console.log("CALLLLLLLED IT: ",x)
        console.log(this.state.stdlib.formatCurrency(y))
        console.log(this.state.stdlib.formatAddress(z))
    }
    async deploy(){
        console.log("THIS DEPLOY: ", this.state)
        await this.state.currentUser.Account.tokenAccept(this.state.JID)
        this.contract = this.state.currentUser.Account.contract(backend)
        
        this.setState((state,props) => ({
            ...state, contract:this.contract
        },() => {console.log("THIS STATE")}))

        if(!this.contract.p) return
        this.contract.p.Referee(this)
        await this.state.setCtx(this.contract)
        console.log("CONTRACT: ", this.state)
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
        return (
        <>
        <h1>Start Pool</h1>
        <div>
            <button onClick={()=>{this.deploy()}} >SUBMIT</button>
        </div>
        </>
        )}
}