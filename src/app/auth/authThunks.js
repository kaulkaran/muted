import { fetchMeRequest } from "../user/userApi";
import { loginRequest, registerRequest } from "./authApi";
import { authStart, authSuccess, authFailure, logout } from "./authSlice";

// ✅ LOGIN
export const loginUser = (credentials, navigate) => async (dispatch) => {
  try {
    dispatch(authStart());

    const data = await loginRequest(credentials);

    // store token (persist after tab close)
    localStorage.setItem("token", data.token);

    dispatch(authSuccess(data));

    navigate("/chat", { replace: true });
  } catch (err) {
    dispatch(authFailure(err?.message || "Login failed"));
  }
};

// ✅ REGISTER
export const registerUser = (payload, navigate) => async (dispatch) => {
  try {
    dispatch(authStart());

    const data = await registerRequest(payload);

    localStorage.setItem("token", data.token);

    dispatch(authSuccess(data));

    navigate("/onboarding/name", { replace: true });
  } catch (err) {
    dispatch(authFailure(err?.message || "Register failed"));
  }
};

// ✅ LOAD USER ON REFRESH / TAB REOPEN
export const loadUser = () => async (dispatch) => {
  const token = localStorage.getItem("token");

  // ✅ MUST mark initialized even when no token
  if (!token) {
    dispatch(setInitialized());
    return;
  }

  try {
    const user = await fetchMeRequest(); // GET /users/me
    dispatch(authSuccess({ user, token })); // should set initialized=true in reducer
  } catch (error) {
    dispatch(logout()); // logout should also set initialized=true
  }
};
