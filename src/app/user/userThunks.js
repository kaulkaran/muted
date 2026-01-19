import { authFailure, authSuccess } from "../auth/authSlice";
import { updateMeRequest } from "./userApi";

export const updateDisplayName = (displayName, navigate) => async (dispatch, getState) => {
  try {
    const updatedUser = await updateMeRequest({ displayName });

    // keep token, update user
    const token = getState().auth.token;

    dispatch(
      authSuccess({
        user: updatedUser,
        token
      })
    );

    navigate("/onboarding/privacy");
  } catch (err) {
    dispatch(authFailure(err.message));
  }
};
