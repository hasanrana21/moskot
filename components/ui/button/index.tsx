import Link from "next/link";
import React from "react";
import { UiButtonProps } from "./model";

const UiButton = (props: UiButtonProps) => {
  const { label, className, href, type, variant } = props;
  const VARIANTS: any = {
    primary:
      "lg:text-xl text-lg bg-orange-500 rounded px-6 py-2 text-white font-medium",
    outline:
      "border-2 border-primary-1 lg:text-xl text-lg px-6 py-2 font-medium text-primary-1 rounded",
  };
  return (
    <button
      type={type}
      className={`${className} ${variant && VARIANTS[variant]}`}
    >
      <Link href={href ? href : ""}>{label}</Link>
    </button>
  );
};

// UiButton.defaultProps = {
//   variant: "primary",
// };
export default UiButton;
