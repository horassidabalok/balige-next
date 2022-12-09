import { useRouter } from "next/router";
import Header from "../comp/_header"
import deststy from "../../styles/destination.module.css"
import Link from "next/link";

export default function Destination(){
    let { id } = useRouter().query;
    let data = {
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

    return <>
        <Header addtClass="fixed-top"/>        

        <div className={deststy.uppercontainer}>
            <div style={{
                background : "#f8f1e5",
                color : "black"
            }} className={"col-lg-4 col-md-6 col-sm-12 col-12 d-flex align-items-center justify-content-center"}>
                <h1 className="py-5 my-5 col-12 text-center">Grand Hotel</h1>
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12" style={{
                "height" : "50vh"
            }}>
                <img src={data.bigPict} className={deststy.featpict + " col-12"}/>
            </div>
        </div>
        <div className={deststy.downcontainer}>
            <div class={"col-lg-6 col-md-6 col-sm-12 " + deststy.gallery}>
                <div id="wisata" class="row col-12" style={{
                    padding : 0,
                    margin : 0
                }}>
                    {
                        data.gallerypict.map((index, number) => {
                            return <div key={number} class={deststy.gambar+" col-4"}>
                                <img src={index} class={" col-12"} alt="" srcset=""/>
                            </div>
                        })
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

                    <div className="a col-sm-12 col-md-3 col-lg-3 text-center">
                        <h3>{data.link[0][0]}</h3>
                        <p>{data.link[0][1]}</p>
                    </div>

                    <div className="a col-sm-12 col-md-3 col-lg-3 text-center">
                        <h3>{data.link[1][0]}</h3>
                        <p>{data.link[1][1]}</p>
                    </div>

                    <div className="a col-sm-12 col-md-3 col-lg-3 text-center d-flex justify-content-center align-content-center">
                        <div>
                            <h3>{data.link[2][0]}</h3>
                            <p>{data.link[2][1] + " - " + data.link[2][2]}</p>
                        </div>
                    </div>

                    <div className="a col-sm-12 col-md-3 col-lg-3 text-center">
                        <h3>{data.link[3][0]}</h3>
                        {
                            data.link[3][1].map(i => {return (
                                <p key={i[0]}><Link href={i[1]} className={deststy.finditlink}>{i[0]}</Link></p>
                            )})
                        }
                    </div>

                </div>
                <div className="p-5 text-white">
                    {data.content}
                </div>
            </div>
        </div>
    </>
}