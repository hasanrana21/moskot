import React from "react";
import { UiInputProps } from "./model";

const UiInput = (props: UiInputProps) => {
  const { label, id, name, type, placeholder, onChange } = props;
  return (
    <div className="mt-5">
      <label className="lg:text-lg text-base text-gray-500" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full focus:outline-none lg:text-lg text-base border-2 p-2 px-4 rounded mt-1"
      />
    </div>
  );
};

export default UiInput;
