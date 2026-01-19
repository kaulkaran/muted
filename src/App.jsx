import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./app/auth/authThunks";
import socket from "./socket";
import AllRoutes from "./routes/AllRoutes";
import useChatSocket from "./app/chat/useChatSocket";

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

    socket.on("connect", () => {
      console.log("🟢 Socket connected:", socket.id);
    });

    socket.on("connect_error", (err) => {
      console.error("🔴 Socket error:", err.message);
    });

    return () => {
      socket.off("connect");
      socket.off("connect_error");
    };
  }, [token]);

  return <AllRoutes />;
}

export default App;
