import { Avatar, Typography } from "@material-tailwind/react";

const AboutCard = ({ variant, width, image, title, description }) => {
    return (
        <div className="h-full">
            <div className="h-full w-full flex justify-between items-center gap-4">
                <div className="shrink-0">
                    <Avatar
                        size="lg"
                        variant="circular"
                        className={`${width} rounded-full mx-auto mb-2`}
                        src={image}
                        alt="Bukeka Nxumalo"
                    />
                </div>
                <div className="flex-1">
                    <Typography variant={variant} color="blue-gray" className="mb-4">{title}</Typography>
                    <Typography className="text-sm text-gray-500 dark:text-gray-400">{description}</Typography>
                </div>
            </div>
        </div>
    );
};

export default AboutCard;
