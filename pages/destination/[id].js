import { useRouter } from "next/router";
import Header from "../comp/_header"
import deststy from "../../styles/destination.module.css"

export default function Destination(){
    let { id } = useRouter().query;
    let data = {
        bigPict : "https://unsplash.it/1920/1080",
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
        content : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    }

    return <>
        <Header addtStyles={{
            backgroundColor : "blue",

        }} addtClass="fixed-top"/>        

        <div className={deststy.uppercontainer}>
            <div className={"col-lg-4 col-md-6 col-sm-12 d-flex align-items-center justify-content-center"}>
                <h1>Grand Hotel</h1>
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12" style={{
                "overflow" : "hidden"
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
                backgroundColor : "red"
            }}>
                <div className={"col-12 row bg-primary pt-3 "+deststy.specs}>
                <div className="a col-sm-12 col-md-3 col-lg-3 text-center">
                        <h3>hi</h3>
                        <p>lollllll</p>
                    </div>
                    <div className="a col-sm-12 col-md-3 col-lg-3 text-center">
                        <h3>hi</h3>
                        <p>lollllll</p>
                    </div>
                    <div className="a col-sm-12 col-md-3 col-lg-3 text-center">
                        <h3>hi</h3>
                        <p>lollllll</p>
                    </div>
                    <div className="a col-sm-12 col-md-3 col-lg-3 text-center">
                        <h3>hi</h3>
                        <p>lollllll</p>
                    </div>
                </div>
                <div className="p-5">
                    {data.content}
                </div>
            </div>
        </div>
    </>
}