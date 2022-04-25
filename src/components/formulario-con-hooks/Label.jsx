import React from "react";

export const Label = ({ title, name }) => {
  return (
    <label htmlFor={name} className="text-slate-600">
      {title}
    </label>
  );
};
