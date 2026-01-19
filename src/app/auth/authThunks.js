import { fetchMeRequest } from "../user/userApi";
import { loginRequest, registerRequest } from "./authApi";
import { authStart, authSuccess, authFailure, logout } from "./authSlice";

/* ================= LOGIN ================= */
export const loginUser = (credentials) => async (dispatch) => {
  try {
    dispatch(authStart());

    const data = await loginRequest(credentials);

    // Save token
    localStorage.setItem("token", data.token);

    // IMPORTANT: set user BEFORE navigation
    dispatch(authSuccess(data));

    // ✅ NO navigate here
    return data; // allow component to wait
  } catch (err) {
    dispatch(authFailure(err.message));
    throw err;
  }
};

/* ================= REGISTER ================= */
export const registerUser = (payload) => async (dispatch) => {
  try {
    dispatch(authStart());

    const data = await registerRequest(payload);

    localStorage.setItem("token", data.token);

    dispatch(authSuccess(data));

    // ✅ NO navigate here
    return data;
  } catch (err) {
    dispatch(authFailure(err.message));
    throw err;
  }
};

/* ================= LOAD USER ================= */
export const loadUser = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    dispatch(authStart());

    const user = await fetchMeRequest();

    dispatch(
      authSuccess({
        user,
        token,
      })
    );
  } catch (error) {
    dispatch(logout());
  }
};
