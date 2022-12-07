import { useEffect } from 'react'
import catalogsty from '../styles/catalog.module.css'
import GCC from './comp/_commoncolor'
import Header from './comp/_header'

export default function Catalogue(){

    let daftar = [
        "Texas",
        "Itu",
        "Bodoh",
        "YEEEE",
        "Aku Texas",
        "dan aku ini",
        "Bodoh",
        "Aku ini siapa? Texas!",
        "Orang",
        "Kenapa",
        "Frank",
        "Samsul",
        "Bahul",
        "Kenapa",
        "Frank",
        "Samsul",
        "Bahul",
        "Anjeng"
    ]

    return <>
        <Header/>
        <div className='d-flex' style={{
            margin : 0,
            alignItems : 'stretch',
            flexWrap : 'wrap',
            minHeight:'calc(100vh)',
            
        }}>
            {
                daftar.map(i => {
                    return (
                        <div class="col-md-4 col-sm-12 col-lg-3 col-12 row" key={i} id={"c"+i} style={{
                            padding : 0,
                            margin : 0,
                            "background-image": "url('http://unsplash.it/1800/900')",
                            backgroundSize : "cover",
                            minHeight:"20vh",
                        }}>
                            <div class="col-12 d-flex align-items-center justify-content-left px-5" style={{}} id="aco-1">
                                <h3>{i}</h3>
                            </div>
                        </div>   
                    )
                })
            }
        </div>
    </>
}