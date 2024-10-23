import { useState } from "react"

export const App=()=>{
    const[color,setColor]=useState()
    const handleChange=(event)=>{
        setColor(event.target.value)
    }
    return (
        <div>
            <select style={{color:`${color}`, backgroundColor:"green"}} onChange={handleChange}>
                <option style={{color:"red"}} value="red">red </option>
                <option style={{color:"black"}} value="black">black </option>
                <option style={{color:"blue"}} value="blue">blue </option>
                <option style={{color:"white"}} value="white">white </option>
            </select>
        </div>
    )
}