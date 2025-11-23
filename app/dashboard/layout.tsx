import Nav from "@/components/nav"
export default function layout({children}:{children:React.ReactNode}){
    return <body>
        <Nav/>
        {children}
    </body>
}