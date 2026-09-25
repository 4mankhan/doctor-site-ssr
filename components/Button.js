import Link from "next/link";

const variants = {
  primary:
    "bg-teal-600 text-white hover:bg-teal-700 shadow-md shadow-teal-600/20 hover:shadow-lg hover:shadow-teal-600/25",
  secondary:
    "bg-white text-teal-800 border border-teal-200 hover:bg-teal-50 hover:border-teal-300",
  outline:
    "bg-transparent text-teal-700 border-2 border-teal-600 hover:bg-teal-50",
  warm: "bg-amber-500 text-white hover:bg-amber-600 shadow-md shadow-amber-500/25",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm font-semibold",
  lg: "px-6 py-3 text-base font-semibold",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  onClick,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 disabled:opacity-50 disabled:pointer-events-none motion-reduce:transition-none";

  const classes = `${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
