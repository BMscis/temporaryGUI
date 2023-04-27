import React, { useContext, useEffect, useState } from "react";
import {loadStdlib} from '@reach-sh/stdlib'
// import * as ServerBackend from '../../build/Server.Server.mjs';
// import * as MarketBackend from '../../build/Market.Market.mjs';
// import * as TokenizeBackend from '../../build/Tokenize.Tokenize.mjs';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const JID = 118346460
const stdlib = loadStdlib("ALGO")
export const ReachAuthContext = React.createContext()
const ReachAmountUpdate = React.createContext()

export function authReach(){
    return useContext(ReachAuthContext)
}
export function amountReachUpdate(){
    return useContext(ReachAmountUpdate)
}

export default function ReachAuthContextProvider({children}){
    console.log("REACHCONTEXTPROVIDER")
    const [currentUser, setCurrentUser] = useState()
    const [params, setParams] = useState({algos:0,jasiris:0,poolContract:""})
    const [contract, setContract] = useState({})
    const [contractAddress, setContractAddress] = useState("")
    const [hasUser, setUser] = useState(false)
    const login = async (mode) =>  {
        console.log("LOGIN IN")
        stdlib.setWalletFallback(stdlib.walletFallback({
            providerEnv: "TestNet", MyAlgoConnect }));

        const acc = await stdlib.getDefaultAccount()
        const newUser = {
            "Account":acc,
            "Balance":await stdlib.balanceOf(acc)
        }
        console.log("NEW USER: ", newUser)
        setCurrentUser(newUser)
        setUser(true)
    }
    const changeParams = (a,j,z) => {
        console.log("CHANGEPARAMS")
        setParams({algos:a,jasiris:j,poolContract:z})
    }
    const setCtx = async (ctx) => {
        console.log("SET CONTRACT")
        setContract({ctx})
    }
    const setCtxAddress = async (c) => {
        console.log("SET CONTRACT ADDRESS",c)
        setContractAddress(c)
        console.log("CONTRACT ADDRESS: ", contractAddress)
    }
      const value = {
        currentUser,
        login,
        hasUser,
        stdlib,
        changeParams,
        params,
        contract,
        setCtx,
        JID,
        contractAddress,
        setCtxAddress
      }
      return (
        <>
        <ReachAuthContext.Provider value={value}>
            <ReachAmountUpdate.Provider value={params}>
                {children}
            </ReachAmountUpdate.Provider>
        </ReachAuthContext.Provider>
        </>
      )
}