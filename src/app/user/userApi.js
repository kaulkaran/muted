import API from "../axios";

export const fetchMeRequest = async () => {
  const res = await API.get("/users/me");
  return res.data; // backend returns user object
};

export const updateMeRequest = async (payload) => {
  const res = await API.put("/users/me", payload);
  return res.data;
};

export const updateAvatarRequest = async (file) => {
  const formData = new FormData();
  formData.append("avatar", file);

  const res = await API.put("/users/me/avatar", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};