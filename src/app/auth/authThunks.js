import { fetchMeRequest } from "../user/userApi";
import { loginRequest, registerRequest } from "./authApi";
import { authStart, authSuccess, authFailure, logout } from "./authSlice";

export const loginUser = (credentials, navigate) => async (dispatch) => {
  try {
    dispatch(authStart());

    const data = await loginRequest(credentials);

    // 🔥 REQUIRED
    localStorage.setItem("token", data.token);

    dispatch(authSuccess(data));

    navigate("/chat");
  } catch (err) {
    dispatch(authFailure(err.message));
  }
};

export const registerUser = (payload, navigate) => async (dispatch) => {
  try {
    dispatch(authStart());

    const data = await registerRequest(payload);

    // 🔥 REQUIRED
    localStorage.setItem("token", data.token);

    dispatch(authSuccess(data));

    navigate("/onboarding/name");
  } catch (err) {
    dispatch(authFailure(err.message));
  }
};


export const loadUser = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) return; // 👈 prevents loading state

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
