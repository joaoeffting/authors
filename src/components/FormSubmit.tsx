"use client";

import { ComponentProps } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

type FormSubmitProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

export default function FormSubmit({
  children,
  className,
  ...props
}: FormSubmitProps) {
  const { pending } = useFormStatus();
  return (
    <button
      {...props}
      type="submit"
      className={`btn-primary btn ${className}`}
      disabled={pending}
    >
      {children}
    </button>
  );
}
