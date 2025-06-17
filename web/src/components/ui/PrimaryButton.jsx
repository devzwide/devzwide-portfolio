import { Link } from "react-router-dom";

const PrimaryButton = ({ link, name }) => {
    return (
        <Link to={link} className="relative px-6 py-3 font-bold text-black group">
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-blue-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
            <span className="relative">{name}</span>
        </Link>
    );
};

export default PrimaryButton;
