export default function SectionHeading({
  title,
  subtitle,
  id,
  align = "center",
  className = "",
}) {
  const alignClass =
    align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <div
      className={`flex flex-col gap-3 mb-10 md:mb-12 ${alignClass} ${className}`}
    >
      {id ? (
        <span className="sr-only" id={`${id}-label`}>
          {title}
        </span>
      ) : null}
      <h2
        id={id}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 tracking-tight font-[family-name:var(--font-poppins)]"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="text-slate-600 max-w-2xl text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
