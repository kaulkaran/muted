import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactItem from "./ContactItem";
import EmptyContacts from "./EmptyContacts";
import { fetchContacts } from "../../app/contacts/contactsThunk";

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const currentUserId = useSelector(state => state.auth.user?._id);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (!contacts.length) {
    return <EmptyContacts />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {contacts.map(connection => {
        // ✅ Find the OTHER user in the connection
        const otherUser = connection.requester._id === currentUserId
          ? connection.recipient
          : connection.requester;

        return (
          <ContactItem
            key={connection._id}
            contact={{
              _id: connection._id,  // ✅ Connection ID
              name: otherUser.displayName,
              avatar: otherUser.avatar || "/default-avatar.png",
              status: "Active now",  // Or any status you want
              conversationId: connection.conversationId  // ✅ Already from backend!
            }}
          />
        );
      })}
    </div>
  );
};

export default ContactsList;