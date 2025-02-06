import React, { useState } from 'react';
import Link from 'next/link';
import { 
    Book, Clipboard, FileText, GraduationCap, LayoutDashboard,
    Wallet, Calendar,Logs,StickyNote,BookUser,Package2,CopyPlus,
    CalendarCheck,Files
} from 'lucide-react';
import SidebarNavGroup from './SidebarNavGroup'; 
import SidebarNavItem from './SidebarNavItem'; 

interface Props {
    isOpen: boolean;
}

const SidebarNav: React.FC<Props> = ({ isOpen }) => {
    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({
        myClasses: false,
        attendance: false,
        myUniversity: false,
    });

    const toggleMenu = (menu: string) => {
        setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
    };

    return (
        <nav className="mt-6">
            <SidebarNavItem href="/dashboard" icon={<LayoutDashboard className="mr-2" />} label="dashboard" isOpen={isOpen} />

            <SidebarNavGroup label="My Classes" icon={<BookUser className="mr-2" />} isOpen={isOpen} 
                isOpenMenu={openMenus.myClasses} toggleMenu={() => toggleMenu("myClasses")}>
                <SidebarNavItem href="/enrolled-courses" icon={<Book className="mr-2" />} label="Enrolled Courses" isOpen={isOpen} />
                <SidebarNavItem  icon={<Calendar className="mr-2"/> } href="/my-schedules" label="My Schedules" isOpen={isOpen} />
            </SidebarNavGroup>

            <SidebarNavItem href="/academic-history" icon={<Clipboard className="mr-2" />} label="Academic History" isOpen={isOpen} />

            <SidebarNavGroup label="Attendance & Leave" icon={<FileText className="mr-2" />} isOpen={isOpen}
                isOpenMenu={openMenus.attendance} toggleMenu={() => toggleMenu("attendance")}>
                <SidebarNavItem href="/request-leave" icon={<StickyNote className="mr-2"/> } label="Request for Leave" isOpen={isOpen} />
                <SidebarNavItem href="/attendance-list" icon={<Logs className="mr-2"/> }label="Attendance List" isOpen={isOpen} />
                <SidebarNavItem href="/attendance-summary" icon={<Files className="mr-2"/> } label="Attendance Summary" isOpen={isOpen} />
            </SidebarNavGroup>

            <SidebarNavItem href="/my-payment" icon={<Wallet className="mr-2" />} label="My Payment" isOpen={isOpen} />

            <SidebarNavGroup label="My University" icon={<GraduationCap className="mr-2" />} isOpen={isOpen}
                isOpenMenu={openMenus.myUniversity} toggleMenu ={() => toggleMenu("myUniversity")}>
                <SidebarNavItem href="/academic-programs" icon={<Package2 className="mr-2" />} label="Academic Programs" isOpen={isOpen} />
                <SidebarNavItem href="/class-schedules" icon={<CalendarCheck className="mr-2" />} label="Class Schedules" isOpen={isOpen} />
                <SidebarNavItem href="/annual-holidays" icon={<CopyPlus className="mr-2" />} label="Annual Holidays" isOpen={isOpen} />
            </SidebarNavGroup>
        </nav>
    );
};

export default SidebarNav;