import { useState } from "react";
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverGroup, PopoverPanel, } from "@headlessui/react";
import { AcademicCapIcon, BriefcaseIcon, CodeBracketSquareIcon, ClipboardDocumentIcon, UserIcon, Bars3Icon, BuildingOfficeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

const products = [
    { name: 'Introduction', description: 'A quick overview of my portfolio.', href: '#', icon: ClipboardDocumentIcon },
    { name: 'About Me', description: 'My background, passions, what drives me.', href: '#', icon: UserIcon },
    { name: 'Projects', description: 'A showcase of my development work.', href: '#', icon: BriefcaseIcon },
    { name: 'Skills & Tools', description: 'Breakdown of the tech stack I am proficient in.', href: '#', icon: CodeBracketSquareIcon },
    { name: 'Experience', description: 'My experience and personal development.', href: '#', icon: BuildingOfficeIcon },
    { name: 'Education', description: 'My academic background and current studies.', href: '#', icon: AcademicCapIcon },
]

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contacts', href: '#', icon: PhoneIcon },
]

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Developer Zwide</span>
                        <img
                        alt="/"
                        src="/zwide_logo.png"
                        className="h-8 w-auto"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <a href="/" target="_blank" className="text-sm/6 font-semibold text-gray-900">
                        Home
                    </a>
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                        Services
                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                        </PopoverButton>

                        <PopoverPanel
                        transition
                        className="absolute top-full -left-8 z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                        >
                        <div className="p-4">
                            {products.map((item) => (
                            <div
                                key={item.name}
                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                            >
                                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                </div>
                                <div className="flex-auto">
                                <a href={item.href} className="block font-semibold text-gray-900">
                                    {item.name}
                                    <span className="absolute inset-0" />
                                </a>
                                <p className="mt-1 text-gray-600">{item.description}</p>
                                </div>
                            </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                            {callsToAction.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                            >
                                <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                                {item.name}
                            </a>
                            ))}
                        </div>
                        </PopoverPanel>
                    </Popover>

                    <a href="https://medium.com/@devzwide" target="_blank" className="text-sm/6 font-semibold text-gray-900">
                        Blog
                    </a>
                    <a href="/resume" target="_blank" className="text-sm/6 font-semibold text-gray-900">
                        Resume
                    </a>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="https://github.com/devzwide" className="text-sm/6 mx-2 font-semibold text-gray-900">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/devzwide" className="text-sm/6 mx-2 font-semibold text-gray-900">
                        <FaLinkedin />
                    </a>
                    <a href="https://medium.com/@devzwide" className="text-sm/6 mx-2 font-semibold text-gray-900">
                        <FaMedium />
                    </a>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Developer Zwide</span>
                    <img
                        alt=""
                        src="/zwide_logo.png"
                        className="h-8 w-auto"
                    />
                    </a>
                    <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                            <Disclosure as="div" className="-mx-3">
                                <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                    Services
                                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                </DisclosureButton>
                                <DisclosurePanel className="mt-2 space-y-2">
                                    {[...products, ...callsToAction].map((item) => (
                                    <DisclosureButton
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </DisclosureButton>
                                    ))}
                                </DisclosurePanel>
                                </Disclosure>
                                <a
                                href="https://medium.com/@devzwide"
                                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                Blog
                                </a>
                                <a
                                href="/resume"
                                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                Resume
                                </a>
                            </div>
                            <div className="py-6">
                                <a
                                href="https://github.com/devzwide"
                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
};

export default Header;
