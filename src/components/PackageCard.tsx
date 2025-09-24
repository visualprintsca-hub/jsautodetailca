import React from 'react';
import Link from 'next/link';
import Button from '@/components/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

type PackageCardProps = {
  iconSrc?: string;
  title: string;
  subtitle?: string;
  startingLabel?: string;
  price: string; // include currency symbol in caller
  viewAllHref?: string;
  onBook?: () => void;
  glow?: boolean;
  dialogContent?: React.ReactNode; // 👈 new prop
};

export default function PackageCard({
  iconSrc = '/window.svg',
  title,
  subtitle,
  startingLabel = 'Starting From',
  price,
  onBook,
  glow = false,
  dialogContent, // 👈 destructure here
}: PackageCardProps): React.ReactElement {
  return (
    <div className={glow
      ? 'relative p-2 rounded-[1.6rem] h-fit overflow-hidden bg-[radial-gradient(120%_120%_at_100%_0%,_rgba(191,65,201,1)_0%,_rgba(190,24,93,0.8)_50%,_rgba(244,114,182,0.5)_100%)]'
      : 'p-2 rounded-[1.6rem]'
    }>
      {glow && (
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[260px] w-[260px] rounded-full bg-[conic-gradient(from_0deg,_rgba(244,114,182,0.7),_rgba(190,24,93,0.7),_rgba(162,28,175,0.7),_rgba(244,114,182,0.7))] animate-slow-spin blur-2xl opacity-60" />
      )}
      <div className="relative z-10 rounded-3xl border border-white/10 shadow-xl p-4 md:p-6 overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900">
        {/* glow accent (gradient) */}
        <div className="pointer-events-none absolute -right-10 top-10 h-48 w-48 rounded-full bg-gradient-to-br from-fuchsia-500/30 to-transparent blur-3xl" />

        <div className="flex items-center gap-4">
          <div className="h-12 w-12 shrink-0 rounded-xl bg-black/30 border border-white/10 grid place-items-center shadow">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={iconSrc} alt="icon" className="h-6 w-6 object-contain" />
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-xl md:text-2xl italic tracking-wide text-white uppercase" style={{ fontFamily: 'Nippo' }}>
            {title}
          </h3>
          {subtitle && (
            <p className="mt-2 text-zinc-300 text-base md:text-lg">{subtitle}</p>
          )}
        </div>

        <div className="mt-8">
          <p className="text-zinc-300 text-lg md:text-xl ">{startingLabel}</p>
          <div className="mt-3 text-white" style={{ fontFamily: 'Nippo' }}>
            <span className="text-6xl md:text-7xl font-black italic">{price}</span>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <Button variant="primary" size="md" onClick={onBook}>Book</Button>
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="cursor-pointer text-fuchsia-300 hover:text-fuchsia-200 text-sm md:text-base"
              >
                view all
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              {dialogContent /* 👈 use the prop */}
            </DialogContent>
          </Dialog>
        </div>

        {/* subtle inner border */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/5" />
      </div>
    </div>
  );
}
