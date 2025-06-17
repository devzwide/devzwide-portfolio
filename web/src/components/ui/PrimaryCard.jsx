import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const PrimaryCard = () => {
    return (
        <Card className="flex-row">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
                <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="card-image"
                className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="text-sm" color="gray" className="mb-4 text-medium uppercase">
                    As I continue my journey, I'm now shifting into the DevOps and Cloud Engineering space.
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    I'm actively learning Docker, CI/CD pipelines, and AWS cloud services with plans to integrate them into my next major project.
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                    I'm also exploring the world of AI engineering and large-scale distributed systems to eventually merge software with cloud intelligence.
                </Typography>
                <Link to="/skills" className="inline-block">
                    <Button variant="text" className="flex items-center gap-2">
                        My Journey
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-4 w-4"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                        </svg>
                    </Button>
                </Link>
            </CardBody>
        </Card>
    );
};

export default PrimaryCard;
