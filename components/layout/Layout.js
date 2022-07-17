import { useRouter } from "next/router"
import { useEffect } from "react"
import { useSelector } from "react-redux"
// import Navbar from "./Navbar"



const Layout = ({children}) => {
 
    return (
        <>
           {/* <Navbar/> */}
         
           {children}
  
        </>
    )
}

export default Layout
