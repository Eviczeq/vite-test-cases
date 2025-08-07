import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { schema, type FormType } from "./schema";
import { postUser } from "../../../../api/postUser";

export const useRegisterForm = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const form = useForm({
    resolver: zodResolver(schema),
  });
  const handelCheck = () => {
    setChecked((prev) => !prev);
  };
  const onSubmit: SubmitHandler<FormType> = async (formData) => {
    try {
      const rest = await postUser(formData);
      console.log("succes", rest.message);
      alert(rest.message);
    } catch (error) {
      console.log("error", error);
      alert("登録に失敗しました。");
    }
  };
  return { checked, form, handelCheck, onSubmit };
};
