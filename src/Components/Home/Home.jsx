import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCatagorises from "../JobCatagories/JobCatagorises";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCatagorises></JobCatagorises>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;