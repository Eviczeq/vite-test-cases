import React from "react";
import { useRegisterForm } from "./hooks";
import { Presentational } from "./Presentational";

export const Container = () => {
  const { checked, form, handelCheck, onSubmit } = useRegisterForm();
  return (
    <Presentational
      checked={checked}
      form={form}
      handleChecked={handelCheck}
      onSubmit={onSubmit}
    />
  );
};
