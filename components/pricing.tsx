"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { CircleCheck, CircleHelp } from "lucide-react";
import { useState } from "react";

const tooltipContent = {
  websocket:
    "Low-latency WebSocket connection delivering real-time price updates.",
  twap: "Time-Weighted Average Price (TWAP) over configurable windows (5m to 2h).",
  slippage:
    "Real-time slippage alerts when spot price deviates significantly from TWAP.",
  signals:
    "AI-powered trade signals based on volatility, liquidity, and order flow.",
  support: "Priority support for integration, debugging, and custom queries.",
};

const YEARLY_DISCOUNT = 20;

const plans = [
  {
    name: "Hobbyist",
    price: 29,
    description: "For solo traders testing strategies on mainnet.",
    features: [
      { title: "5 concurrent WebSocket streams" },
      { title: "TWAP windows: 5m, 15m", tooltip: tooltipContent.twap },
      { title: "Slippage monitoring", tooltip: tooltipContent.slippage },
      { title: "Basic trade signals", tooltip: tooltipContent.signals },
      { title: "Email support", tooltip: tooltipContent.support },
    ],
    buttonText: "Start Trading",
  },
  {
    name: "Pro Trader",
    price: 199,
    isRecommended: true,
    description: "For active traders needing reliable real-time data.",
    features: [
      { title: "20 concurrent WebSocket streams" },
      {
        title: "TWAP windows: 5m, 15m, 30m, 1h, 2h",
        tooltip: tooltipContent.twap,
      },
      {
        title: "Slippage alerts (email & webhook)",
        tooltip: tooltipContent.slippage,
      },
      {
        title: "Advanced AI signals + anomaly detection",
        tooltip: tooltipContent.signals,
      },
      {
        title: "Discord + email priority support",
        tooltip: tooltipContent.support,
      },
    ],
    buttonText: "Go Pro",
    isPopular: true,
  },
  {
    name: "Institutional",
    price: 1499,
    description: "For teams, funds, and automated trading systems.",
    features: [
      { title: "Unlimited WebSocket streams" },
      {
        title: "Custom TWAP windows (up to 24h)",
        tooltip: tooltipContent.twap,
      },
      {
        title: "Real-time slippage + MEV risk alerts",
        tooltip: tooltipContent.slippage,
      },
      {
        title: "Custom signal models + API access",
        tooltip: tooltipContent.signals,
      },
      {
        title: "24/7 dedicated engineering support",
        tooltip: tooltipContent.support,
      },
    ],
    buttonText: "Contact Sales",
  },
];

const Pricing = () => {
  const [selectedBillingPeriod, setSelectedBillingPeriod] = useState("monthly");

  return (
    <div
      id="pricing"
      className="flex flex-col items-center justify-center py-12 xs:py-20 px-6"
    >
      <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold text-center tracking-tight">
        Real-Time Crypto Intelligence
      </h1>
      <p className="mt-4 text-muted-foreground text-center max-w-2xl">
        Low-latency WebSocket feeds, TWAP analytics, and AI-driven signals —
        built for serious DeFi traders.
      </p>

      <Tabs
        value={selectedBillingPeriod}
        onValueChange={setSelectedBillingPeriod}
        className="mt-8"
      >
        <TabsList className="h-11 px-1.5 rounded-full bg-primary/5">
          <TabsTrigger value="monthly" className="py-1.5 rounded-full">
            Monthly
          </TabsTrigger>
          <TabsTrigger value="yearly" className="py-1.5 rounded-full">
            Yearly (Save {YEARLY_DISCOUNT}%)
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="mt-12 max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-3 items-start gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative border rounded-xl p-6 bg-background/50 flex flex-col",
              {
                "border-[2px] border-primary bg-background": plan.isPopular,
              },
            )}
          >
            {plan.isPopular && (
              <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                Most Popular
              </Badge>
            )}
            <h3 className="text-lg font-medium">{plan.name}</h3>
            <p className="mt-2 text-4xl font-bold">
              $
              {selectedBillingPeriod === "monthly"
                ? plan.price
                : (plan.price * (1 - YEARLY_DISCOUNT / 100)).toFixed(2)}
              <span className="ml-1.5 text-sm text-muted-foreground font-normal">
                /month
              </span>
            </p>
            <p className="mt-3 text-muted-foreground text-sm">
              {plan.description}
            </p>

            <Button
              variant={plan.isPopular ? "default" : "outline"}
              size="lg"
              className="w-full mt-6 text-base"
            >
              {plan.buttonText}
            </Button>

            <Separator className="my-6" />

            <ul className="space-y-3 flex-1">
              {plan.features.map((feature) => (
                <li key={feature.title} className="flex items-start gap-2">
                  <CircleCheck className="h-4 w-4 mt-0.5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{feature.title}</span>
                  {feature.tooltip && (
                    <Tooltip>
                      <TooltipTrigger className="cursor-help">
                        <CircleHelp className="h-3.5 w-3.5 mt-0.5 text-muted-foreground flex-shrink-0" />
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        {feature.tooltip}
                      </TooltipContent>
                    </Tooltip>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
