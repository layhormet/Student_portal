"use client";
import "./styles/globals.css";
import TopNavbar from './src/components/Dashboard/Header/Header'; 
import Sidebar from './src/components/Dashboard/SideBar/SideBar'; 
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname (); 

  const isLoginPage = pathname === '/';

  return (
    <html lang = "en">
      <body>
        {isLoginPage ? (
          
          <div>{children}</div>
        ) : (
          <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
              <TopNavbar />
              <main className="flex-1 overflow-y-auto pt-20">{children}</main>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}