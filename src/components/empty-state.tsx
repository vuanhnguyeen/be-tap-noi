import Link from "next/link";

type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <section className="mx-auto mt-10 flex w-full max-w-2xl flex-col items-center rounded-3xl bg-white px-6 py-10 text-center shadow-sm">
      <h2 className="font-display text-3xl font-extrabold text-foreground">{title}</h2>
      <p className="mt-3 text-base font-medium text-muted">{description}</p>
      <Link
        href="/"
        className="mt-6 inline-flex min-h-12 items-center rounded-2xl bg-primary-orange px-5 text-base font-bold text-white transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-orange/70 active:scale-[0.98]"
      >
        Về trang chủ
      </Link>
    </section>
  );
}
