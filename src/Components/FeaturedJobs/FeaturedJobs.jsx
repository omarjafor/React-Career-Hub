import { useEffect, useState } from "react";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

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
        </div>
    );
};

export default FeaturedJobs;