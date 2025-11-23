import { googleEvents } from "../service/service";

export const googleevents=async()=>{
    try {
        const data= await googleEvents();
        return data
    } catch (error:any) {
        throw error;
    }
}