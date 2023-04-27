import React, { useState } from "react"
import AdminView from "./AdminView"
import Link from "next/link";  

//const UserContext = React.createContext()
const UserContextUpdate = React.createContext()
export default function UserContextProvider({children}){
    const [userType, setUser] = useState("/AdminView")
    return (
        <>
        <div>
            <Link href={"/AdminView"}>Admin</Link>
            <Link href={"/BidderView"}>Bidder</Link>
        </div>
        <Link href={userType}>Where to</Link>
        </>
    )
}