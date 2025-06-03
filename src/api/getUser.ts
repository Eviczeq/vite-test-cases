import axios from "axios";

export const getUser = async (id: number) => {
  const data = await axios.get(`/user/${id}`);

  return data.data;
};
