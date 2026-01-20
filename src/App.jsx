import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./app/auth/authThunks";
import socket from "./socket";
import AllRoutes from "./routes/AllRoutes";
import useChatSocket from "./app/chat/useChatSocket";
import { setOnlineUsers, setUserOffline, setUserOnline } from "./app/chat/chatSlice";


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

    // initial online users
    socket.on("users:online:list", ({ users }) => {
      dispatch(setOnlineUsers(users));
    });

    // user came online
    socket.on("user:online", ({ userId }) => {
      dispatch(setUserOnline(userId));
    });

    // user went offline (IMPORTANT: lastSeen)
    socket.on("user:offline", ({ userId, lastSeen }) => {
      dispatch(setUserOffline({ userId, lastSeen }));
    });

    return () => {
      socket.off("users:online:list");
      socket.off("user:online");
      socket.off("user:offline");
    };
  }, [token, dispatch]);


  return <AllRoutes />;
}

export default App;
