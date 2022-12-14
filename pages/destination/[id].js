import { useRouter } from "next/router";
import Header from "../comp/_header"
import deststy from "../../styles/destination.module.css"
import Link from "next/link";

import blogdb from "../../database.json"
import { useEffect } from "react";

export default function Destination({data}){
    const router = useRouter()
    let { id } = router.query;

    let selecteddata = data.destination[parseInt(id)]

    useEffect(() => {
        console.log(selecteddata)
    })
    
    let datax = {
        bigPict : "https://unsplash.it/1920/1920",
        gallerypict : [
            "https://unsplash.it/800/800",
            "https://unsplash.it/800/800",
            "https://unsplash.it/800/800",
            "https://unsplash.it/800/800",
            "https://unsplash.it/800/800",
            "https://unsplash.it/800/800",
            "https://unsplash.it/800/800",
            "https://unsplash.it/800/800",
            "https://unsplash.it/800/800",
            "https://unsplash.it/800/800",
            "https://unsplash.it/800/800",
            "https://unsplash.it/800/800",
        ],
        content : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        link : [
            ["Lokasi", "jalan r.a kartini no.51, parapat"],
            ["Rating", 4.9],
            ["Jam Buka", "12:00", "23:59"],
            [
                "Find it on", 
                [
                    ["Google maps", "#"],
                    ["Booking.com", "#"],
                    ["Traveloka", "#"],
                ],
            ]
        ]
    }

    let gallery;
    for(let i = 0; i < selecteddata.nFoto; i++){
        gallery = <>
            {gallery}
            <div key={i} class={deststy.gambar+" col-md-4 col-sm-6 col-lg-3 col-6"}>
                <img height={150} width={100} src={data.storageurl+"/destinasi/"+selecteddata.nama+"/"+i+".png"} class={" col-12"} alt="" srcset=""/>
            </div>
        </>
    }

    return <>
        <Header addtClass="fixed-top"/>        

        <div className={deststy.uppercontainer}>
            <div style={{
                background : "#f8f1e5",
                color : "black"
            }} className={"col-lg-4 col-md-6 col-sm-12 col-12 d-flex align-items-center justify-content-center"}>
                <h1 className="py-5 my-5 col-12 text-center">{selecteddata.nama}</h1>
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12" style={{
                "height" : "50vh"
            }}>
                <img src={data.storageurl+"/destinasi/"+selecteddata.nama+"/"+selecteddata.featuredFoto+".png"} className={deststy.featpict + " col-12"}/>
            </div>
        </div>
        <div className={deststy.downcontainer}>
            <div class={"col-lg-6 col-md-6 col-sm-12 " + deststy.gallery}>
                <div id="wisata" class="row col-12" style={{
                    padding : 0,
                    margin : 0
                }}>
                    {
                        gallery
                    }
                </div>
            </div>
            <div className={"col-lg-6 col-md-6 col-sm-12 "+deststy.textarea} style={{
                backgroundColor : "#2f3131",
                color : "#fffff"
            }}>
                <div className={"col-12 row pt-4 pb-2 "+deststy.specs} style={{
                    backgroundColor : "#426e86",
                    color : "white"
                }}>

                    <div className={"a col-sm-12 col-md-3 col-lg-3 text-center "+deststy.specstext}>
                        <h3>Lokasi</h3>
                        <p>{selecteddata.alamat}</p>
                    </div>

                    <div className={"a col-sm-12 col-md-3 col-lg-3 text-center "+deststy.specstext}>
                        <h3>Rating</h3>
                        <p>{selecteddata.rating}</p>
                    </div>

                    <div className={"a col-sm-12 col-md-3 col-lg-3 text-center d-flex justify-content-center align-content-center "+deststy.specstext}>
                        <div>
                            <h3>Jam Buka</h3>
                            <p>{selecteddata.jamBuka}</p>
                        </div>
                    </div>

                    <div className={"a col-sm-12 col-md-3 col-lg-3 text-center "+deststy.specstext}>
                        <h3>Find it on</h3>
                        {
                            selecteddata.links.map(i => {
                                return <p key={i[0]}>
                                    <Link style={{
                                        color:"white",
                                        textDecoration : "none"
                                    }} href={i[1]}>{i[0]}</Link>
                                </p>
                            })
                        }
                    </div>

                </div>
                <div className="p-5 text-white">
                    {selecteddata.deskripsi}
                </div>
            </div>
        </div>
    </>

}

export async function getServerSideProps(context){
    let blogdata = blogdb

    return {
        props : {
            data : blogdata
        }
    }
}