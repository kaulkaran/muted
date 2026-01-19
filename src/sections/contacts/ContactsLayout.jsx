import PendingInvites from "./PendingInvites";
import ContactsList from "./ContactsList";

const ContactsLayout = () => {
  return (
    <div className="h-screen bg-[#f8f7f7] flex justify-center">
      <div className="w-full max-w-5xl px-6 py-8">
        <h1 className="text-2xl font-bold text-[#141415] mb-6">
          Contacts
        </h1>

        {/* 🔹 Pending invites appear FIRST */}
        <PendingInvites />

        {/* 🔹 Accepted contacts */}
        <ContactsList />
      </div>
    </div>
  );
};

export default ContactsLayout;
