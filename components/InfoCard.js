export default function InfoCard({
  icon: Icon,
  label,
  value,
  className = "",
}) {
  return (
    <div
      className={`group flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-sm border border-slate-100 hover:shadow-md hover:border-teal-100 transition-all duration-300 motion-reduce:transition-none ${className}`}
    >
      {Icon ? (
        <div
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600 group-hover:bg-teal-100 transition-colors"
          aria-hidden="true"
        >
          <Icon className="h-5 w-5" strokeWidth={2} />
        </div>
      ) : null}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {label}
        </p>
        <p className="mt-1 text-base font-semibold text-slate-800 leading-snug">
          {value}
        </p>
      </div>
    </div>
  );
}
