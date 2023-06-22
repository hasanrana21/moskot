import React from "react";
import { UiInputProps } from "./model";

const UiInput = (props: UiInputProps) => {
  const { label, id, name, type, placeholder, onChange } = props;
  return (
    <div>
      <label className="lg:text-lg text-base" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="focus:outline-none lg:text-lg text-base border-2 p-2 px-4 rounded mt-2 mb-4"
      />
    </div>
  );
};

export default UiInput;
