"use client";

import {
  BadgeDollarSign,
  Route,
  ShieldCheck,
  Truck,
  Undo2,
  UserRoundCheck,
} from "lucide-react";

// Reused icons with new semantic meaning
const faq = [
  {
    icon: Route,
    question: "What time windows are supported for TWAP/VWAP?",
    answer:
      "We support configurable TWAP and VWAP windows from 5 minutes up to 24 hours. Pro and Institutional plans allow custom window durations (e.g., 45m, 3h) via API.",
  },
  {
    icon: ShieldCheck,
    question: "How is slippage calculated?",
    answer:
      "Slippage is computed as |Spot Price − TWAP| / TWAP × 100%. This reflects the deviation of current market price from the time-weighted average, helping you assess execution risk.",
  },
  {
    icon: Truck,
    question: "How fresh is the data? What’s the latency?",
    answer:
      "Our WebSocket streams deliver updates within 200–500ms of on-chain events. TWAPs are recomputed on every new price tick using exponential decay weighting for responsiveness.",
  },
  {
    icon: BadgeDollarSign,
    question: "Do you support VWAP (Volume-Weighted Average Price)?",
    answer:
      "Yes — VWAP is available on Pro and Institutional plans. It’s calculated using on-chain trade volume from Uniswap V3 and integrated DEXs, updated in real time.",
  },
  {
    icon: Undo2,
    question: "Can I switch TWAP windows without reconnecting?",
    answer:
      'Yes. Send a JSON control frame over the same WebSocket connection to change the window (e.g., `{"window": 3600}`), and the server will switch seamlessly without dropping the stream.',
  },
  {
    icon: UserRoundCheck,
    question: "Which chains and pools are supported?",
    answer:
      "Currently: Ethereum, Arbitrum, and Base. Supported pools include all major Uniswap V3 pairs (ETH/USDC, WBTC/ETH, LINK/USDC, etc.). New pools added weekly based on user demand.",
  },
];

const FAQ = () => {
  return (
    <div
      id="faq"
      className="min-h-screen flex items-center justify-center px-6 py-12 xs:py-20"
    >
      <div className="max-w-screen-lg">
        <h2 className="text-3xl xs:text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tight text-center">
          Technical FAQ
        </h2>
        <p className="mt-3 xs:text-lg text-center text-muted-foreground">
          Everything you need to know about our real-time crypto pricing
          infrastructure.
        </p>

        <div className="mt-12 grid md:grid-cols-2 bg-background rounded-xl overflow-hidden outline outline-[1px] outline-border outline-offset-[-1px]">
          {faq.map(({ question, answer, icon: Icon }) => (
            <div key={question} className="border p-6 -mt-px -ml-px">
              <div className="h-8 w-8 xs:h-10 xs:w-10 flex items-center justify-center rounded-full bg-accent">
                <Icon className="h-4 w-4 xs:h-6 xs:w-6" />
              </div>
              <div className="mt-3 mb-2 flex items-start gap-2 text-lg xs:text-[1.35rem] font-semibold tracking-tight">
                <span>{question}</span>
              </div>
              <p className="text-sm xs:text-base">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
