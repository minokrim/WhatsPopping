interface statCardProps{
    statColor:string;
    statTitle:string;
    statValue:string;
}
export default function StatCard({statColor,statTitle,statValue}:statCardProps){
    return <div style={{ backgroundColor: statColor }} className="flex flex-col text-white w-[70%] p-8 rounded-xl">
        <h6 className="self-start">{statTitle}</h6>
        <h3 className="self-end text-3xl">{statValue}</h3>
    </div>
}