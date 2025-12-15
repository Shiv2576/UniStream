"use client";

import { HTMLAttributes } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function LogoCloud(props: HTMLAttributes<HTMLDivElement>) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div {...props}>
        <p className="text-center">Trusted by leading Companies</p>
        <div className="mt-6 flex items-center justify-center flex-wrap gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-8 w-24 bg-muted rounded animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  const logos =
    resolvedTheme === "dark"
      ? ["/coinmarketcapW.svg", "/dydxW.svg", "/hyperW.svg"]
      : ["/coinmarketcapB.svg", "/dydxB.svg", "/hyperB.svg"];

  return (
    <div {...props}>
      <p className="text-center">Trusted by leading Companies</p>
      <div className="mt-6 flex items-center justify-center flex-wrap gap-4 [&_svg]:h-auto [&_svg]:w-24 xs:[&_svg]:w-auto xs:[&_svg]:h-8 text-muted-foreground">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {logos.map((src, idx) => (
            <div key={idx} className="flex items-center">
              <Image
                src={src}
                alt=""
                width={120}
                height={40}
                className="h-7 md:h-8 w-auto object-contain opacity-80"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
