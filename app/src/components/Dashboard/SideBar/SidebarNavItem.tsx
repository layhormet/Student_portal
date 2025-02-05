import React from 'react';
import Link from 'next/link';

interface Props {
    href: string;
    label: string;
    icon?: JSX.Element;
    isOpen: boolean;
}

const SidebarNavItem: React.FC<Props> = ({ href, label, icon, isOpen }) => {
    return (
        <Link href={href} passHref legacyBehavior>
            <a className="flex   w-full rounded-left items-center p-2 w-full rounded-[20px] hover:bg-white hover:text-blue-900 transition duration-300">
                {icon && icon}
                {isOpen && label}
            </a>
        </Link>
    );
};

export default SidebarNavItem;