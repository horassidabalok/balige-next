import { useEffect } from 'react'
import catalogsty from '../styles/catalog.module.css'
import Header from './comp/_header'

export default function Catalogue(){

    let daftar = [
        ["sabar", "https://unsplash.it/1600/900"],
        ["sabar", "https://unsplash.it/1600/901"],
        ["sabar", "https://unsplash.it/1600/902"],
        ["sabar", "https://unsplash.it/1600/903"],
        ["sabar", "https://unsplash.it/1600/904"],        
        ["sabar", "https://unsplash.it/1600/900"],
        ["sabar", "https://unsplash.it/1600/901"],
        ["sabar", "https://unsplash.it/1600/902"],
        ["sabar", "https://unsplash.it/1600/903"],
        ["sabar", "https://unsplash.it/1600/904"], 
        ["sabar", "https://unsplash.it/1600/904"],
    ]

    return <div style={{
        backgroundImage : 'url("https://unsplash.it/1920/1080")',
        backgroundSize: "cover",
    }}>
        <Header addtClass={"fixed-top"} />
            <div style={{
                backdropFilter: 'blur(10px)',
                minHeight : "100vh"
            }}>
            <div className='d-flex' style={{
                margin : 0,
                zIndex : 'absolute',
                alignItems : 'stretch',
                flexWrap : 'wrap',
            }}>
                {
                    daftar.map(i => {
                        return (
                            <div class="col-md-4 col-sm-12 col-lg-3 col-12 row" key={i} id={"c"+i} style={{
                                padding : 0,
                                margin : 0,
                                "background": `linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) ), url(${i[1]})`,
                                backgroundSize : "cover",
                                color: "white",
                                height:"250px",
                            }}>
                                <div class="col-12 d-flex align-items-center justify-content-left px-5" style={{}} id="aco-1">
                                    <h3>{i[0]}</h3>
                                </div>
                            </div>   
                        )
                    })
                }
            </div>
        </div>
    </div>
}