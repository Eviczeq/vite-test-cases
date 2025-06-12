import axios from "axios";

export const updateUser = async (
  userId: number,
  userData: {
    name: string;
    age: number;
    hobby: string;
  }
) => {
  const response = await axios.put(`/user/${userId}`, userData);
  return response.data;
};
