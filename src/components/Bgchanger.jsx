import React, { useState } from 'react'

const Bgchanger = () => {
    const [color,setColor]=useState("black");
  return (
    <div style={{background:color,height:"100vh"}}>
      <button onClick={()=>setColor("blue")}>change color</button>
      <button onClick={()=>setColor("red")}>change color</button>
      <button onClick={()=>setColor("white")}>change color</button>
      <button onClick={()=>setColor("orange")}>change color</button>
      <button onClick={()=>setColor("pink")}>change color</button>
      <button onClick={()=>setColor("yello")}>change color</button>
      <button onClick={()=>setColor("dark")}>change color</button>
      <button onClick={()=>setColor("red")}>change color</button>
    </div>
  )
}

export default Bgchanger;
