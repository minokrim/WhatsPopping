import StatCard from "@/components/statCard"
import Image from "next/image"
export default function CreatorDashboard(){
    return <div className="w-screen flex flex-col bg-gray-50">
        <section className="grid grid-cols-2 grid-rows-2 w-full gap-6 place-items-center place-content-center p-5">
            <StatCard statColor="rgb(219, 39, 119)" statTitle="Total Events" statValue="12"/>
            <StatCard statColor="rgb(37, 99, 235)" statTitle="Total Attendees" statValue="800"/>
            <StatCard statColor="rgb(147, 51, 234)" statTitle="Total Sales" statValue="$6800"/>
            <StatCard statColor="rgb(202, 138, 4)" statTitle="Profile Views" statValue="845"/>
        </section>


        <section className="grid grid-rows-2 grid-cols-2 place-content-center place-items-center w-full mt-20 gap-y-20">
            <div className="w-[60%] gap-5">
                <h4 className="font-medium text-xl">Quick Actions</h4>
                <div className="w-full rounded-lg gap-5 h-[15em] items-start justify-center p-5 flex flex-col bg-linear-to-bl from-blue-600 via-purple-500 to-purple-700">
                    <button className="bg-white/20 w-full text-left p-2 rounded-lg text-white cursor-pointer">Create Event</button>
                    <button className="bg-white/20 w-full text-left p-2 rounded-lg text-white cursor-pointer">View Profile</button>
                    <button className="bg-white/20 w-full text-left p-2 rounded-lg text-white cursor-pointer">Check Verification Status</button>
                </div>
            </div>


            <div className="w-[50%] gap-5">
                <h4 className="font-medium text-xl">Revenue Insights</h4>
                <div className="w-full rounded-lg gap-5 h-[15em] items-start justify-center p-5 flex flex-col bg-white">
                    <p>chart place holder</p>
                    <section className="flex w-full justify-between">
                        <p>Ticket Sales</p>
                        <p>${6800}</p>
                    </section>
                    <section className="flex w-full justify-between">
                        <p>Earnings</p>
                        <p>${10450}</p>
                    </section>
                </div>
            </div>


            <div></div>


            <div className="w-[50%] gap-5">
                <h4 className="font-medium text-xl">Creator Profile</h4>
                <div className="w-full rounded-lg gap-5 h-[15em] items-start justify-center p-5 flex flex-col bg-white">
                    <section>
                        <Image height={100} width={50} className="rounded-full" alt="user profile picture" src="/profilePic.jpg"/>
                        <div>
                            <h4>John Doe</h4>
                            <h5>verification satus</h5>
                        </div>
                    </section>
                    <hr />
                    <section className="flex w-full justify-between">
                        <p>Toatal Events</p>
                        <p>${6800}</p>
                    </section>
                    <section className="flex w-full justify-between">
                        <p>Toatal </p>
                        <p>${10450}</p>
                    </section>
                </div>
            </div>
        </section>
    </div>
}