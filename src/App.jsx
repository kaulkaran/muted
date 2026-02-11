import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./app/auth/authThunks";
import socket from "./socket";
import AllRoutes from "./routes/AllRoutes";
import useChatSocket from "./app/chat/useChatSocket";
import { setOnlineUsers, setUserOffline, setUserOnline } from "./app/chat/chatSlice";
import AuthGate from "./routes/AuthGate";

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  // ✅ HOOK MUST BE CALLED HERE (TOP LEVEL)
  useChatSocket();

  // 1️⃣ Restore user on refresh
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  // 2️⃣ Connect socket AFTER token exists
  useEffect(() => {
    if (!token) return;

    socket.auth = { token };
    socket.connect();

    const onOnlineList = ({ users }) => dispatch(setOnlineUsers(users));
    const onUserOnline = ({ userId }) => dispatch(setUserOnline(userId));
    const onUserOffline = ({ userId, lastSeen }) => dispatch(setUserOffline({ userId, lastSeen }));

    socket.on("users:online:list", onOnlineList);
    socket.on("user:online", onUserOnline);
    socket.on("user:offline", onUserOffline);

    return () => {
      socket.off("users:online:list", onOnlineList);
      socket.off("user:online", onUserOnline);
      socket.off("user:offline", onUserOffline);
      socket.disconnect();
    };
  }, [token, dispatch]);

  return (
    <AuthGate>
      <AllRoutes />
    </AuthGate>
  );
}

export default App;
