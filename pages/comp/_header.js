import Link from "next/link";
import { useEffect } from "react";

export default function Header({addtClass, addtStyles}){
    let navbarBrand = require("../../appconfig.json").navbarBrand;

    useEffect(() => {
        document.querySelector(".navbar-brand").className = "navbar-brand darkenWeb"
    })


    return (
        <nav className={"navbar navbar-dark "+addtClass} style={addtStyles}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{navbarBrand}</a>
                <button style={{
                    border : 0,
                    background : 0,
                }} type="button" data-bs-toggle="collapse" data-bs-target="#headernavigation" aria-controls="headernavigation" aria-expanded="false" aria-label="Nav Tog">
                <span>expand</span>                
            </button>
            <div className="collapse navbar-collapse"  id="headernavigation">
                <div style={{
                    "display" : "flex",
                    "height" : "100vh",
                    "align-content" : "center",
                    "justify-content" : "center",
                    "align-items" : "center",
                    "z-index" : "100",
                }}>
                    <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" href="/">Beranda</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/accomodation" className="nav-link" id="nav2">Hotel & Penginapan</Link>                     
                            </li>
                            <li className="nav-item">
                                <Link href="/destoftheday" className="nav-link" id="nav2">Saya merasa beruntung</Link>                     
                            </li>
                            <li className="nav-item">
                                <Link href="/destination" className="nav-link" id="nav2">Destinasi</Link>                     
                            </li>                    
                            <li className="nav-item">
                                <Link href="/posts/0" className="nav-link" id="nav2">Blog</Link>                     
                            </li>
                    </ul>
                </div>
           </div>
 
           </div>
       </nav>    
    )
}