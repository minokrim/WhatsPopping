import Nav from "@/components/nav"
export default function Layout({children}:{children:React.ReactNode}){
    return <div className="bg-[#491890] h-[100vh]">
        <Nav/>
        {children}
    </div>
}