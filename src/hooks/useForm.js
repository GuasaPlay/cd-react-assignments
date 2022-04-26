import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [values, setValues] = useState(initialForm);
  const [errors, setErrors] = useState(initialForm);

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const resetForm = () => {
    setValues(initialForm);
  };

  return {
    values,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  };
};
