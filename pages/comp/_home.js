import data from "../../database.json"

export default function Home(){
    let acdata = data.destination.slice(0, 9)

    return <>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {
                    acdata.map((i, index) => {
                        if(index == 0){
                            return  (
                                <button key={index} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} class="active" aria-current="true" aria-label={"Slide "+(index+1)}></button>
                            )    
                        }else{
                            return  (
                                <button key={index} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} aria-label={"Slide "+(index+1)}></button>
                            )    
                        }
                    })
                }
            </div>
            <div className="carousel-inner">

            {
                acdata.map((i, index) => {
                    return  <div key={index} className={"carousel-item "+((index == 0) ? "active" : "")} style={{
                                    backgroundImage : `linear-gradient(0deg, rgba(0,0,0,.7), rgba(0,0,0,0)), url('${data.storageurl}/destinasi/${i.nama}/${i.featuredFoto}.png')`,
                                    backgroundSize : 'cover'
                            }}>
                            <div className="carousel-caption">
                                <h5>{i.nama}</h5>
                                <p>{i.alamat}</p>
                            </div>
                        </div>
                })
            }
                
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>
}