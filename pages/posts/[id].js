import Header from "../comp/_header"
import Link from "next/link"
import style from "../../styles/posts.module.css"

export default function Post(){
    let data = {
        background : "https://unsplash.it/1920/1080",
        title : "Hi dunia",
        text : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    }

    let sidebarLinks = [
        {text : ("this text is "+(new Date()).getTime()), url: "#"},
        {text : ("this text is "+(new Date()).getTime()), url: "#"},
        {text : ("this text is "+(new Date()).getTime()), url: "#"},
        {text : ("this text is "+(new Date()).getTime()), url: "#"},
        {text : ("this text is "+(new Date()).getTime()), url: "#"},
        {text : ("this text is "+(new Date()).getTime()), url: "#"},
        {text : ("this text is "+(new Date()).getTime()), url: "#"},
        {text : ("this text is "+(new Date()).getTime()), url: "#"},
        {text : ("this text is "+(new Date()).getTime()), url: "#"},
        {text : ("this text is "+(new Date()).getTime()), url: "#"},
    ]

    return <>
        <Header addtClass={"fixed-top"}/>
        <div className="jumbotron" style={{
            height : "calc(70vh + 30px)",
            margin : "-100px 0 0 0",
            backgroundAttachment : "fixed",
            backgroundSize : "cover",
            background : `url('${data.background}')`
        }}>
            
        </div>
        <div className={"row col-12 "+style.bottompage}>
            <div className="col-md-7 col-lg-9 col-sm-12" style={{
                    color: "#f8f1e5",
                    background: "#426e86",
            }}>
                <div className={"container "+style.content}>
                    <h1>{data.title}</h1>
                    <p>{data.text}</p>
                </div>
            </div>
            <div className="col-md-5 col-lg-3 col-sm-12 d-flex flex-column" style={{
                    backgroundColor: "#f8f1e5",                
            }}>
                {
                    sidebarLinks.map(i => {
                        return (
                            <div className={"col-12 p-3 "+style.content}>
                                <Link className={style.sidebarlink} href={i.url}><span className="h4">{i.text}</span></Link>
                            </div>        
                        )
                    })
                }
            </div>
        </div>
    </>
}