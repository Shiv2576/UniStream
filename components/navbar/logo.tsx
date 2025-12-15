import Link from "next/link";
import Image from "next/image";

export const Logo = () => (
  <Link
    href="/"
    className="flex items-center space-x-2.5 group"
    aria-label="Disperz Home"
  >
    <Image
      src="/uniswap-uni-logo.svg"
      alt=""
      width={40}
      height={40}
      priority
      className="h-8 w-8 md:h-10 md:w-10"
      aria-hidden="true"
    />
    {/* Enhanced Wordmark */}
    <span
      className="text-[20px] font-[550] tracking-[0.02em] text-current leading-none md:text-[22px] font-bold"
      style={{
        fontFamily:
          "'Geist Variable', 'Satoshi', 'Manrope', system-ui, sans-serif",
      }}
    >
      Unistream
    </span>
  </Link>
);
