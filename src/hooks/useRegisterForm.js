import { useEffect } from "react";

export const useRegisterForm = ({ values, setErrors }) => {
  useEffect(() => {
    const { firstName, lastName, email, password, confirmPassword } = values;
    if (firstName.length > 0) {
      setErrors((errors) => {
        return {
          ...errors,
          firstName:
            firstName.length < 2
              ? "El nombre debe tener al menos dos caracteres"
              : null,
        };
      });
    }
    if (lastName.length > 0) {
      setErrors((errors) => {
        return {
          ...errors,
          lastName:
            lastName.length < 2
              ? "El apellido debe tener al menos dos caracteres"
              : null,
        };
      });
    }
    if (email.length > 0) {
      setErrors((errors) => {
        return {
          ...errors,
          email:
            email.length < 5
              ? "El email debe tener al menos 5 caracteres"
              : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ? "El email no es válido"
              : null,
        };
      });
    }
    if (password.length > 0) {
      setErrors((errors) => {
        return {
          ...errors,
          password:
            password.length < 8
              ? "La contraseña debe tener al menos 8 caracteres"
              : null,
        };
      });
    }

    if (confirmPassword.length > 0) {
      setErrors((errors) => {
        return {
          ...errors,
          confirmPassword:
            confirmPassword !== password
              ? "Las contraseñas no coinciden"
              : null,
        };
      });
    }
  }, [values, setErrors]);
};
