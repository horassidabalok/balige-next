import { useRouter } from "next/router";

export default function Header({addtClass, addtStyles}){
    let router = useRouter();

    router.push('/')
}