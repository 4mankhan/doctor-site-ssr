import Link from "next/link";

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-[12px] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  
  const variants = {
    primary: "bg-[#0F766E] text-white hover:bg-[#0c5e58] hover:shadow-[0_8px_16px_-4px_rgba(15,118,110,0.3)] hover:-translate-y-[1px] focus-visible:outline-[#0F766E]",
    secondary: "bg-white text-[#0F766E] border-2 border-[#E8F6FA] hover:border-[#0F766E] hover:bg-[#F8FAF9] hover:-translate-y-[1px] focus-visible:outline-[#0F766E]",
    outline: "border border-slate-300 text-slate-700 hover:bg-slate-50 focus-visible:outline-slate-600",
    ghost: "text-[#64748B] hover:text-[#0F766E] hover:bg-[#E8F6FA]",
  };

  const sizes = {
    sm: "px-4 py-2 text-[14px]",
    md: "px-6 py-3 text-[15px]",
    lg: "px-8 py-4 text-[16px]",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
