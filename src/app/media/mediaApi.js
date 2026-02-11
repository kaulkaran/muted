import API from "../axios";

export const uploadMediaRequest = async (file) => {
  const formData = new FormData();
  formData.append("file", file); // MUST match backend: upload.single("file")

  const res = await API.post("/media/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data; // Media doc
};
