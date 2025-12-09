interface StepsCardProps {
  id: number;
  desc: string;
  step: string;
}

export default function StepsCard({id,desc,step}:StepsCardProps){
    return <div className="bg-white p-10 rounded-xl w-max h-[15em] gap-5 flex flex-col items-center">
        <p className="bg-[#ffe33c] rounded-full p-2  w-max">{id}</p> 
        <h5 className="font-extrabold">{step}</h5>
        <h6 className="text-xl">{desc}</h6>
    </div>
}