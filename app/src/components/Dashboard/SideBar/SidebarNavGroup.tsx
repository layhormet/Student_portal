import React from 'react';
import { ChevronLeft } from 'lucide-react';
import SidebarNavItem from './SidebarNavItem';

interface Props {
    label: string;
    icon: JSX.Element;
    isOpen: boolean;
    isOpenMenu: boolean;
    toggleMenu: () => void;
    children: JSX.Element | JSX.Element[];
}

const SidebarNavGroup: React.FC<Props> = ({ label, icon, isOpen, isOpenMenu, toggleMenu, children }) => {
    return (
        <div className="mb-2">
            <button
                onClick={toggleMenu}
                className="flex items-center justify-between w-full p-2 transition duration-300"
            >
                <div className="flex items-center">
                    {icon}
                    <span className="font-medium">{isOpen && label}</span>
                </div>
                <ChevronLeft
                    className={`text-white-600 transition-transform duration-300 ${
                        isOpenMenu ? "-rotate-90" : "rotate-0"
                    }`}
                />
            </button>
            {isOpenMenu && isOpen && (
                <div className="pl-6">
                    {children}
                </div>
            )}
        </div>
    );
};

export default SidebarNavGroup;