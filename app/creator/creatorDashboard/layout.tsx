import CreatorSideNav from "@/components/creatorSideNav"
import CreatorTopNav from "@/components/creatorTopNav"
export default function Layout({children}:{children:React.ReactNode}){
    return <div>
        <CreatorTopNav/>

        <section className="flex">
            <CreatorSideNav/>
            {children}
        </section>
        
    </div>
}