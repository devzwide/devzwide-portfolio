import { Link } from "react-router-dom";

const PrimaryButton = ({ link, name }) => {
    return (
        <Link
            to={link}
            className="relative px-4 py-2 text-sm font-bold text-black group
                       md:px-6 md:py-3 md:text-base"
        >
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-blue-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full border-2 md:border-4 border-black"></span>
            <span className="relative">{name}</span>
        </Link>
    );
};

export default PrimaryButton;