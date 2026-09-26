import type { ReactNode } from "react";

type AppHeaderProps = {
  title: string;
  subtitle?: string;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
};

export function AppHeader({ title, subtitle, leftSlot, rightSlot }: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-20 px-[max(1rem,env(safe-area-inset-left))] pt-[max(0.75rem,env(safe-area-inset-top))]">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 rounded-3xl bg-white/95 px-4 py-3 shadow-sm backdrop-blur-sm sm:px-5">
        <div className="flex min-w-0 items-center gap-3">
          {leftSlot}
          <div className="min-w-0">
            <h1 className="truncate font-display text-2xl font-extrabold text-foreground sm:text-3xl">{title}</h1>
            {subtitle ? <p className="truncate text-sm font-semibold text-muted sm:text-base">{subtitle}</p> : null}
          </div>
        </div>
        {rightSlot}
      </div>
    </header>
  );
}
