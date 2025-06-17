import { AcademicCapIcon, BriefcaseIcon, CodeBracketSquareIcon, HomeIcon, UserIcon, ChatBubbleBottomCenterTextIcon, BuildingOfficeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Card, Typography, List, ListItem, ListItemPrefix, } from "@material-tailwind/react";
import { Link } from "react-router-dom";

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
        <Card className="h-[calc(90vh)] flex flex-col justify-between w-full max-w-[20rem] p-2">
            <div>
                <div className="mb-2 p-4">
                    <Typography variant="h5" color="blue-gray">
                        Developer Zwide
                    </Typography>
                </div>
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
            <div className="flex items-center space-x-4">
                <div className="shrink-0">
                    <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2" />
                </div>
                <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-gray">Bukeka Nxumalo</p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">ICT Student</p>
                </div>
            </div>
        </Card>
        
    );
};

export default SideBar;
