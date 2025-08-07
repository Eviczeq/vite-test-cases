import { type FC } from "react";
import { TextInput } from "../../../../components/TextInput";
import type { UseFormReturn } from "react-hook-form";
import type { FormType } from "./schema";
import Button from "../../../../components/Button";
import Checkbox from "../../../../components/Checkbox";
type Props = {
  checked: boolean;
  form: UseFormReturn<FormType>;
  handleChecked: () => void;
  onSubmit: (formData: FormType) => void;
};

export const Presentational: FC<Props> = (props) => {
  const { checked, form, handleChecked, onSubmit } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  return (
    <form role="form" action="">
      <TextInput register={register("userName")} placeholder="type username" />
      {errors.userName && <span>{errors.userName.message}</span>}
      <TextInput register={register("email")} placeholder="type email" />
      {errors.email && <span>{errors.email.message}</span>}
      <Checkbox
        label="Approve for privacy"
        checked={checked}
        onChange={handleChecked}
      />
      <Button
        label="登録する"
        onClick={handleSubmit(onSubmit)}
        disabled={!checked}
      />
    </form>
  );
};
