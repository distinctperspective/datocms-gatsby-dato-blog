import Navbar from "../components/navbar";
import React from "react";

export default function Header({navlinks}) {
  return (
    <div className="sticky top-0 z-50 py-0 lg:py-2 px-2 bg-white shadow-md py-0 lg:py-2">
        <Navbar navlinks={navlinks}/>
    </div>    
  )
}
