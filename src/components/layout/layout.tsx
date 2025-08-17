import AppSidebar from "../global/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default Layout;
