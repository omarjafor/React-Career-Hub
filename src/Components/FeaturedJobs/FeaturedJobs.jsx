import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    const [dataLength, setDataLength] =useState(4)

    useEffect( ()=> {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    } , [])

    return (
        <div>
            <h2 className="text-2xl font-bold">Featured Jobs List</h2>
            <h2>Jobs Length: {jobs.length} </h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-10 my-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={ dataLength === jobs.length && 'hidden'}>
                <button onClick={()=>setDataLength(jobs.length)}
                className="btn btn-accent my-4">Show All</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;