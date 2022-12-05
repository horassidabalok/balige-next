export default function Header({addtClass, addtStyles}){
    let navbarBrand = require("../../appconfig.json").navbarBrand;

    return (
        <nav className={"navbar navbar-dark "+addtClass} style={addtStyles}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{navbarBrand}</a>
                <button style={{
                    border : 0,
                    background : 0,
                }} type="button" data-bs-toggle="collapse" data-bs-target="#headernavigation" aria-controls="headernavigation" aria-expanded="false" aria-label="Nav Tog">
                <span>KON</span>                
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
                                <a className="nav-link active" aria-current="page" href="#"> Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="nav2" href="#">Acomodation</a>                        
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="nav3" href="#">Destination of the day</a>                    
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="nav3" href="#">Tips &amp; Tricks</a>                    
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="nav3" href="#">List of Spot</a>
                            </li>                    
                    </ul>
                </div>
           </div>
 
           </div>
       </nav>    
    )
}