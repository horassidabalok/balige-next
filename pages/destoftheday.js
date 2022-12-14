import { useEffect } from "react"
import data from "/database.json"

import { useRouter } from "next/router"

export default function Halo({randomid}){

    let router = useRouter()
    router.push("/destination/"+randomid)

    return <>
    </>
}

export async function getServerSideProps(ctx){


    // teks length of an array
    let len = data.destination.length
    let randomid = Math.floor(Math.random()*len)

    return {
        props : {
            randomid
        }
    }
}