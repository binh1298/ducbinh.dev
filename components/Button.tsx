"use client";

export type ButtonProps = JSX.IntrinsicElements["button"] & {
  variant: "contained" | "outlined" | "text";
  color: "primary";
};

const commonClassName =
  "font-bold py-1 px-3 rounded-full whitespace-nowrap flex items-center";
const buttons: Record<
  ButtonProps["variant"],
  Record<ButtonProps["color"], string>
> = {
  contained: {
    primary: `bg-primary hover:bg-primary-hover ${commonClassName}`,
  },
  outlined: {
    primary: `border border-primary hover:border-primary-hover ${commonClassName}`,
  },
  text: {
    primary: `text-primary hover:text-primary-hover ${commonClassName}`,
  },
} as const;

export default function Button({
  children,
  variant,
  color,
  className,
  onClick,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${buttons[variant][color]} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
