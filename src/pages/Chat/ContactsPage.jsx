import React, { useEffect } from "react";
import ContactsList from "../../sections/contacts/ContactsList";
import PendingInvites from "../../sections/contacts/PendingInvites";
import { ContactHeader } from "../../sections/coversation/ChatHeader";
import { useOutletContext } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchContacts, fetchPendingInvites } from "../../app/contacts/contactsThunk";

const ContactsPage = () => {
  const { isSidebarOpen, toggleSidebar } = useOutletContext();
  const dispatch = useDispatch();

  // ✅ Fetch both contacts AND pending invites
  useEffect(() => {
    dispatch(fetchContacts());
    dispatch(fetchPendingInvites());
  }, [dispatch]);

  return (
    <div className="flex flex-col h-full w-full bg-[#f8f7f7]">
      <ContactHeader
        onToggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="flex-1 overflow-y-auto p-6">
        {/* ✅ Show pending invites FIRST */}
        <PendingInvites />
        
        {/* ✅ Then show accepted contacts */}
        <ContactsList />
      </div>
    </div>
  );
};

export default ContactsPage;