"use client";

export type ButtonProps = JSX.IntrinsicElements["button"] & {
  variant: "contained" | "outlined" | "text";
  color: "primary";
  Icon?: React.FC<{ className: string }>;
};

const buttons: Record<
  ButtonProps["variant"],
  Record<ButtonProps["color"], string>
> = {
  contained: {
    primary: "bg-primary hover:bg-primary-hover",
  },
  outlined: {
    primary: "border border-primary hover:border-primary-hover",
  },
  text: {
    primary: "text-primary hover:text-primary-hover",
  },
} as const;

export default function Button({
  children,
  variant,
  color,
  className,
  onClick,
  Icon,
  ...rest
}: ButtonProps) {
  const iconRender = Icon ? <Icon className="mr-1 h-4 w-4 fill-text" /> : null;
  return (
    <button
      className={`flex h-9 items-center whitespace-nowrap rounded-full px-3 py-1 font-bold ${buttons[variant][color]} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {iconRender} {children}
    </button>
  );
}
