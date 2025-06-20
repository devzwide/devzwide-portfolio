import { useState } from "react";
import {
    AcademicCapIcon,
    BriefcaseIcon,
    CodeBracketSquareIcon,
    HomeIcon,
    Bars3Icon,
    XMarkIcon,
    UserIcon,
    ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navLinks = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "My Assistant", href: "/chat", icon: ChatBubbleBottomCenterTextIcon },
    { name: "About Me", href: "/about", icon: UserIcon },
    { name: "Projects", href: "/projects", icon: BriefcaseIcon },
    { name: "Skills", href: "/skills", icon: CodeBracketSquareIcon },
    { name: "Journey", href: "/journey", icon: AcademicCapIcon },
];

const SideBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Hamburger for mobile */}
            {!open && (
                <button
                    className="md:hidden p-2 fixed top-4 left-4 z-50 bg-white rounded"
                    onClick={() => setOpen(true)}
                    aria-label="Open sidebar"
                >
                    <Bars3Icon className="h-6 w-6" />
                </button>
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40
                    flex flex-col
                    transform ${open ? "translate-x-0" : "-translate-x-full"}
                    transition-transform duration-200
                    md:translate-x-0 md:static md:block
                `}
            >
                {/* Unified header for all screens */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                        <img src="/zwide_logo.png" alt="Developer Zwide" className="h-8 w-8" />
                        <span className="font-bold text-lg">Developer Zwide</span>
                    </div>
                    {/* Close button only on mobile */}
                    <button
                        className="md:hidden"
                        onClick={() => setOpen(false)}
                        aria-label="Close sidebar"
                    >
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                </div>
                <nav className="mt-4 flex-1">
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.href}
                                    className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100 transition rounded"
                                    onClick={() => setOpen(false)}
                                >
                                    <link.icon className="h-5 w-5" />
                                    <span>{link.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="mt-auto w-full px-6 py-4 flex items-center gap-3 bg-white border-t border-gray-100">
                    <img src="/zwide.jpg" className="w-10 h-10 rounded-full" alt="Bukeka Nxumalo" />
                    <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900">Bukeka Nxumalo</p>
                        <p className="truncate text-xs text-gray-500">ICT Student</p>
                    </div>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {open && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
                    onClick={() => setOpen(false)}
                />
            )}
        </>
    );
};

export default SideBar;