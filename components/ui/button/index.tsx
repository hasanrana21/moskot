import Link from "next/link";
import React from "react";
import { UiButtonProps } from "./model";

const UiButton = (props: UiButtonProps) => {
  const { label, className, href, type } = props;
  return (
    <button
      type={type}
      className={`text-xl bg-orange-500 rounded px-6 py-2 text-white font-medium ${className}`}
    >
      <Link href={href ? href : ""}>{label}</Link>
    </button>
  );
};

export default UiButton;
