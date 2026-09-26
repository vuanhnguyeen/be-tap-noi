import Link from "next/link";
import { House } from "lucide-react";

export function BackHomeButton() {
  return (
    <Link
      href="/"
      aria-label="Về trang chủ"
      className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-2xl bg-[#f8f2e7] p-3 text-foreground ring-primary-orange/60 transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 active:scale-[0.98]"
    >
      <House className="h-6 w-6" aria-hidden="true" />
    </Link>
  );
}
