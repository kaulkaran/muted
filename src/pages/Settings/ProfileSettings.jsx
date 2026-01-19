import { useOutletContext } from "react-router-dom";
import ProfileSettingsComp from "./ProfileSettingsComp";
import { ProfileSettingsHeader } from "../../sections/coversation/ChatHeader";

const ProfileSettings = () => {
  const {
    isSidebarOpen,
    toggleSidebar,
  } = useOutletContext();

  return (
    <div className="h-full flex flex-col">
      {/* HEADER */}
      <ProfileSettingsHeader
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={toggleSidebar}
      />

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto">
        <ProfileSettingsComp />
      </div>
    </div>
  );
};

export default ProfileSettings;
