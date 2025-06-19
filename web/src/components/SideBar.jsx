import { AcademicCapIcon, BriefcaseIcon, CodeBracketSquareIcon, HomeIcon, UserIcon, ChatBubbleBottomCenterTextIcon, BuildingOfficeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Card, Typography, List, ListItem, ListItemPrefix, } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import ProfileCard from "./ui/ProfileCard.jsx";

const products = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'My Assistant', href: '/chat', icon: ChatBubbleBottomCenterTextIcon },
    { name: 'About Me', href: '/about', icon: UserIcon },
    { name: 'Projects', href: '/projects', icon: BriefcaseIcon },
    { name: 'Skills & Tools', href: '/skills', icon: CodeBracketSquareIcon },
    { name: 'Journey', href: '/journey', icon: AcademicCapIcon },
]

const SideBar = () => {
    return (
        <Card className="h-full flex flex-col justify-between w-full max-w-[20rem] p-2">
            <div>
                <Link to="/" className="flex justify-start items-center p-4 mb-8">
                    <span className="sr-only">Developer Zwide</span>
                    <img
                        alt="Developer Zwide"
                        src="/zwide_logo.png"
                        className="h-8 w-auto"
                    />
                </Link>
                <List>
                    {
                        products.map((product) => (
                            <Link to={product.href} key={product.name}>
                                <ListItem className="flex items-center gap-2 hover:text-blue-300">
                                    <ListItemPrefix>
                                        <product.icon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    {product.name}
                                </ListItem>
                            </Link>
                        ))
                    }
                </List>
            </div>
            <ProfileCard />
        </Card>
        
    );
};

export default SideBar;
