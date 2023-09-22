import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1 className="my-10 text-black font-bold text-2xl">Oops!!! Nothing Found.</h1>
            
            <Link className="bg-indigo-600 py-3 px-3 text-white font-bold rounded-lg mt-5" to='/'>Go Back To Home</Link>
        </div>
    );
};

export default ErrorPage;