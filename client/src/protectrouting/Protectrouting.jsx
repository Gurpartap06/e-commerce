import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const Protectrouting=({children})=>{
const navigate=useNavigate()
    const isAuthticated=localStorage.getItem("loginuser")
        useEffect(()=>{
            if(!isAuthticated)navigate("/Login")
        },[isAuthticated,navigate])
    return isAuthticated ? children :null
}
export default Protectrouting