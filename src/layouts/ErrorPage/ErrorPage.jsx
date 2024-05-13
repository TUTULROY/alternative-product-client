import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-4xl text-center my-36">
        <h2 className="mt-6">Oops!!</h2>
        <Link to="/">Go Back To Home</Link>
    </div>
    );
};

export default ErrorPage;