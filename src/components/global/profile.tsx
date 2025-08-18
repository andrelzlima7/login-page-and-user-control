import { getUserInCookies } from "@/utils/_server-actions/get-user-in-cookies";
import { SidebarMenuButton } from "../ui/sidebar";
import { User2 } from "lucide-react";
import BadgeRole from "@/app/users-control/components/badge-role";

const Profile = async () => {
  const user = await getUserInCookies();
  return (
    <SidebarMenuButton className="h-fit" title={`${user.name} - ${user.role}`}>
      <User2 />
      <div>
        <p>{user.name}</p>
        <BadgeRole role={user.role} />
      </div>
    </SidebarMenuButton>
  );
};

export default Profile;
