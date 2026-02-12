import { uploadMediaRequest } from "./mediaApi";
import { addMedia, setLoading } from "./mediaSlice";

export const uploadMedia = (file) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const mediaDoc = await uploadMediaRequest(file);

    dispatch(addMedia(mediaDoc)); // instantly update grid
  } catch (err) {
    console.error("Upload failed", err);
  } finally {
    dispatch(setLoading(false));
  }
};
