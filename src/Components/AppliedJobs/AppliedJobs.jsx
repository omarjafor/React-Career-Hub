import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";

const Appliedjobs = () => {
    const jobs = useLoaderData();
    useEffect( ()=>{
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0){
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            console.log(jobs, storedJobIds, jobsApplied);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <h1 className="text-2xl font-bold">Jobs I Applied : </h1>
        </div>
    );
};

export default Appliedjobs;