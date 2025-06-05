"use client";

import { useRef } from "react";

import { Confetti, type ConfettiRef } from "@/components/magicui/confetti";

export function ConfettiDemo() {
  const confettiRef = useRef<ConfettiRef>(null);

  return (
    <div>
      {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"></span> */}

      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />
    </div>
  );
}
