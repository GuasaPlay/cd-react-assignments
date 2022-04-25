import { useForm } from "hooks/useForm";
import React from "react";
import { Input } from "./Input";
import { Label } from "./Label";
import { SectionForm } from "./SectionForm";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const RegisterForm = () => {
  const { values, handleInputChange } = useForm(initialFormState);
  return (
    <div>
      <form>
        <div className="grid grid-cols-1 gap-3">
          <SectionForm>
            <div className="flex w-1/3 items-center">
              <Label title="First Name" name="firstName" />
            </div>
            <div className="flex flex-1 items-center">
              <Input
                value={values.firstName}
                name="firstName"
                onChange={handleInputChange}
              />
            </div>
          </SectionForm>
          <SectionForm>
            <div className="flex w-1/3 items-center">
              <Label title="Last Name" name="lastName" />
            </div>
            <div className="flex flex-1 items-center">
              <Input
                value={values.lastName}
                name="lastName"
                onChange={handleInputChange}
              />
            </div>
          </SectionForm>
          <SectionForm>
            <div className="flex w-1/3 items-center">
              <Label title="Email" name="email" />
            </div>
            <div className="flex flex-1 items-center">
              <Input
                value={values.email}
                name="email"
                type="email"
                onChange={handleInputChange}
              />
            </div>
          </SectionForm>
          <SectionForm>
            <div className="flex w-1/3 items-center">
              <Label title="Password" name="password" />
            </div>
            <div className="flex flex-1 items-center">
              <Input
                value={values.password}
                name="password"
                type="password"
                onChange={handleInputChange}
              />
            </div>
          </SectionForm>
          <SectionForm>
            <div className="flex w-1/3 items-center">
              <Label title="Confirm password" name="confirmPassword" />
            </div>
            <div className="flex flex-1 items-center">
              <Input
                value={values.confirmPassword}
                name="confirmPassword"
                type="password"
                onChange={handleInputChange}
              />
            </div>
          </SectionForm>
        </div>
      </form>
      <div className="mt-6">
        <h3 className="text-center text-lg">Your form data</h3>
        <div className="mt-4 text-center">
          <div className="flex space-x-4">
            <TitleData name="First Name:" />
            <ValueData name={values.firstName} />
          </div>
          <div className="flex space-x-4">
            <TitleData name="Last Name:" />
            <ValueData name={values.lastName} />
          </div>
          <div className="flex space-x-4">
            <TitleData name="Email:" />
            <ValueData name={values.email} />
          </div>
          <div className="flex space-x-4">
            <TitleData name="Password:" />
            <ValueData name={values.password} />
          </div>
          <div className="flex space-x-4">
            <TitleData name="Confirm password:" />
            <ValueData name={values.confirmPassword} />
          </div>
        </div>
      </div>
    </div>
  );
};

const TitleData = ({ name }) => {
  return <div className="flex-1 text-right font-semibold">{name}</div>;
};

const ValueData = ({ name }) => {
  return <div className="flex-1 text-left">{name}</div>;
};
