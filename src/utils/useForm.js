import { useState } from "react";

export const useForm = (initialValues) => {
  const [values, setvalues] = useState(initialValues);
  return [
    values,
    (formType, formValue) => {
      if (formType === "reset") {
        return setvalues(initialValues);
      }
      return setvalues({ ...values, [formType]: formValue });
    },
  ];
};
