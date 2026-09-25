export default function SectionHeading({ children, className = "", align = "center" }) {
  const alignments = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <h2
      className={`text-[32px] sm:text-[36px] md:text-[44px] font-extrabold text-[#17212B] font-heading tracking-tight mb-10 ${alignments[align]} ${className}`}
    >
      {children}
    </h2>
  );
}
