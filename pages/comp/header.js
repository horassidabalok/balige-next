export default function Header({navbarBrand}){
    return (
        <nav class="navbar navbar-dark fixed-top">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">{navbarBrand}</a>
                <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#"> Beranda</a>
                <a class="nav-link" id="nav2" href="#">Acomodation</a>
                <a class="nav-link" id="nav3" href="#">Destination of the day</a>
                <a class="nav-link" id="nav3" href="#">Tips &amp; Tricks</a>
                <a class="nav-link" id="nav3" href="#">List of Spot</a>
                </div>
            </div>
        </nav>    
    )
}