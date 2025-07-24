'use client'
import React from 'react'
function Navbar() {

    const drawerBtn=()=>{ 
      document.getElementById('my-drawer')?.click()
    }
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm  relative">
  <div className="absolute left-5"> 
    <span>
      Yeliz Acar
    </span>
  </div>
   <div className="absolute right-5">  
     <button onClick={drawerBtn} className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
    </button>
  </div>
</div>
    </div>
  )
}



export default Navbar
