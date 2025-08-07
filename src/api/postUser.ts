import axios from "axios";
import type { FormType } from "../pages/register/components/RegisterForm/schema";

export const postUser = async (userData: FormType) => {
  const response = await axios.post("/user", userData);
  return response.data;
};
