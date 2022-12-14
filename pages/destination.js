import { useEffect } from 'react'
import catalogsty from '../styles/catalog.module.css'
import Header from './comp/_header'

import data from '../database.json'
import Link from 'next/link'

export default function Destination(){

    let acdata = data.destination

    return <div style={{
        backgroundImage : 'linear-gradient(180deg, #000, rgba(0,0,0,0)), url("https://unsplash.it/1920/1080")',
        backgroundSize: "cover",
    }}>
        <Header addtClass={"fixed-top"} />
            <div style={{
                backdropFilter: 'blur(10px)',
                minHeight : "100vh",
                padding : "70px 0"
            }}>
            <div className='d-flex' style={{
                margin : 0,
                zIndex : 'absolute',
                alignItems : 'stretch',
                flexWrap : 'wrap',
            }}>
                {
                    acdata.map((i, id) => {
                        return (
                            <div class="col-md-4 col-sm-12 col-lg-3 col-12 row" key={i} id={"c"+i} style={{
                                padding : 0,
                                margin : 0,
                                "background": `linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) ), url('${data.storageurl}/destinasi/${i.nama}/${i.featuredFoto}.png')`,
                                backgroundSize : "cover",
                                color: "white",
                                height:"250px",
                            }}>
                                    <div class="col-12 d-flex align-items-center justify-content-left px-5" style={{}} id="aco-1">
                                    <Link href={"destination/"+id} style={{
                                        color : 'white',
                                        textDecoration : 'none'
                                    }}>
                                        <h3>{i.nama}</h3>
                                    </Link>
                                    </div>
                            </div>   
                        )
                    })
                }
            </div>
        </div>
    </div>
}