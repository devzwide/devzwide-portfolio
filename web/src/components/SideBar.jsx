import { AcademicCapIcon, BriefcaseIcon, CodeBracketSquareIcon, ClipboardDocumentIcon, UserIcon, Bars3Icon, BuildingOfficeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Card, Typography, List, ListItem, ListItemPrefix, } from "@material-tailwind/react";

const products = [
    { name: 'Introduction', href: '#', icon: ClipboardDocumentIcon },
    { name: 'About Me', href: '#', icon: UserIcon },
    { name: 'Projects', href: '#', icon: BriefcaseIcon },
    { name: 'Skills & Tools', href: '#', icon: CodeBracketSquareIcon },
    { name: 'Experience', href: '#', icon: BuildingOfficeIcon },
    { name: 'Education', href: '#', icon: AcademicCapIcon },
]

const SideBar = () => {
    return (
        <Card className="h-[calc(90vh)] flex flex-col justify-between w-full max-w-[20rem] p-4">
            <div>
                <div className="mb-2 p-4">
                    <Typography variant="h5" color="blue-gray">
                        Developer Zwide
                    </Typography>
                </div>
                <List>
                    {
                        products.map((product) => (
                            <ListItem key={product.name} className="flex items-center gap-2">
                                <ListItemPrefix>
                                    <product.icon className="h-5 w-5" />
                                </ListItemPrefix>
                                {product.name}
                            </ListItem>
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
