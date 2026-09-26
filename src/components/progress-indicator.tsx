type ProgressIndicatorProps = {
  label: string;
};

export function ProgressIndicator({ label }: ProgressIndicatorProps) {
  return (
    <div
      aria-label={`Tiến trình ${label}`}
      className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#f6f0e4] px-4 text-base font-bold text-foreground"
    >
      {label}
    </div>
  );
}
