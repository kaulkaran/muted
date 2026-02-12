// src/app/contacts/useContactsSocket.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import socket from "../../socket";
import { addContact } from "./contactsSlice";
import { fetchConversations } from "../chat/chatThunks";

export default function useContactsSocket() {
  const dispatch = useDispatch();

  useEffect(() => {
    const onAccepted = (connection) => {
      // ✅ add to contacts instantly (no refresh)
      dispatch(addContact(connection));
      // ✅ refresh conversations so sender sees convo in sidebar
      dispatch(fetchConversations());
    };

    socket.on("contact:accepted", onAccepted);
    return () => socket.off("contact:accepted", onAccepted);
  }, [dispatch]);
}
