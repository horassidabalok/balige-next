export default function Header(){

    return <></>
}

export async function getServerSideProps(ctx){

    return {
        redirect : {
            destination : '/'
        }
    }
}