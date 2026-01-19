import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { authSuccess } from "../../app/auth/authSlice";
import { updateAvatarRequest } from "../../app/user/userApi";

const ProfileSettingsComp = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const [uploading, setUploading] = useState(false);

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setUploading(true);

      const updatedUser = await updateAvatarRequest(file);

      dispatch(
        authSuccess({
          user: updatedUser,
          token: localStorage.getItem("token"),
        })
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 space-y-10">
      
      {/* PAGE TITLE */}
      <div>
        <h1 className="text-2xl font-bold text-[#141415]">
          Profile Settings
        </h1>
        <p className="text-sm text-[#74717a] mt-1">
          Manage your personal information and profile picture
        </p>
      </div>

      {/* AVATAR SECTION */}
      <div className="flex items-center gap-6">
        <img
          src={user?.avatar || "/default-avatar.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border border-black/10 dark:border-white/10"
        />

        <div className="space-y-2">
          <label className="inline-block">
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleAvatarChange}
            />
            <span className="cursor-pointer text-sm font-semibold text-[rgb(var(--primary))] hover:underline">
              {uploading ? "Uploading..." : "Change profile picture"}
            </span>
          </label>

          <p className="text-xs text-[#74717a]">
            JPG, PNG • Max size 15MB
          </p>
        </div>
      </div>

      {/* USER DETAILS */}
      <div className="space-y-6">

        {/* DISPLAY NAME */}
        <div className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-wider text-[#74717a]">
            Display Name
          </label>
          <input
            value={user?.displayName || ""}
            disabled
            className="
              w-full h-12 px-4 rounded-xl
              bg-[#f8f7f7] 
              border border-black/5 dark:border-white/5
              text-[#141415] 
              text-sm font-medium
            "
          />
        </div>

        {/* EMAIL */}
        <div className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-wider text-[#74717a]">
            Email
          </label>
          <input
            value={user?.email || ""}
            disabled
            className="
              w-full h-12 px-4 rounded-xl
              bg-[#f8f7f7] 
              border border-black/5 dark:border-white/5
              text-[#141415] 
              text-sm font-medium
            "
          />
        </div>
      </div>

    </div>
  );
};

export default ProfileSettingsComp;
