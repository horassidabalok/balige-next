export default function Home(){
    let daftar = [
        {
            Title : "Test 1",
            Description : "THIS IS A AHBHASA",
            BackgroundURL : "https://picsum.photos/1920/1080"
        },
        {
            Title : "Test 2",
            Description : "THIZ IS FOCK",
            BackgroundURL : "https://picsum.photos/1366/768"
        },
        {
            Title : "Test 3",
            Description : "THIZ IS FOCK",
            BackgroundURL : "https://picsum.photos/1600/900"
        },
    ]
    return <>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {
                    daftar.map((i, index) => {
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
                daftar.map((i, index) => {
                    return  <div key={index} className={"carousel-item "+((index == 0) ? "active" : "")} style={{
                                    backgroundImage : `url('${i.BackgroundURL}')`,
                            }}>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{i.Title + " " + index}</h5>
                                <p>{i.Description}</p>
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