const ProfileCard = () => {
    return (
        <div className="flex items-center space-x-4">
            <div className="shrink-0">
                <img src="/zwide.jpg" className="w-12 h-12 rounded-full mx-auto mb-2" />
            </div>
            <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-gray">Bukeka Nxumalo</p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">ICT Student</p>
            </div>
        </div>
    );
};

export default ProfileCard;
