"use client";

import React from "react";
import { usePriceWebSocket, PoolPrice } from "../hooks/priceSocket";

const formatSlippage = (value: number): string => {
  if (value === 0) return "0.000000";
  if (value < 0.000001) return value.toFixed(10);
  if (value < 0.001) return value.toFixed(7);
  return value.toFixed(6);
};

const formatPrice = (priceString: string): string => {
  const price = parseFloat(priceString);
  if (isNaN(price)) return "–";
  if (price < 0.001) return price.toFixed(15);
  if (price < 0.1) return price.toFixed(6);
  if (price < 10) return price.toFixed(4);
  if (price < 1000) return price.toFixed(2);
  return Math.round(price).toLocaleString();
};

const getSlippageColor = (slippage: number): string => {
  if (slippage > 1) return "text-red-500";
  if (slippage > 0.5) return "text-orange-500";
  return "text-green-500";
};

interface PriceCardProps {
  poolName: string;
  priceData: PoolPrice;
}

const PriceCard: React.FC<PriceCardProps> = ({ poolName, priceData }) => {
  const slippage = parseFloat(priceData.slippage_percent);
  const spotPriceText = formatPrice(priceData.SpotPrice);
  const twapPriceText = formatPrice(priceData.TwapPrice);
  const slippageText = formatSlippage(slippage);

  return (
    <div className="flex flex-col bg-background border rounded-xl py-6 px-5">
      <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      </div>
      <span className="text-lg font-semibold truncate">{poolName}</span>
      <div className="mt-3 space-y-1.5 text-sm">
        <div>
          <span className="text-muted-foreground">Spot:</span>{" "}
          <span className="font-mono">{spotPriceText}</span>
        </div>
        <div>
          <span className="text-muted-foreground">TWAP:</span>{" "}
          <span className="font-mono">{twapPriceText}</span>
        </div>
        <div>
          <span className="text-muted-foreground">Slippage:</span>{" "}
          <span className={`font-mono ${getSlippageColor(slippage)}`}>
            {slippageText}%
          </span>
        </div>
      </div>
    </div>
  );
};

const LiveFeedSection: React.FC = () => {
  const {
    prices,
    isConnected,
    error,
    lastUpdate,
    changeWindow,
    selectedWindow,
  } = usePriceWebSocket();

  const handleWindowChange = (windowSec: number) => {
    changeWindow(windowSec);
  };

  const poolNames = Object.keys(prices).sort();

  // Optional: Debug log
  // React.useEffect(() => {
  //   console.log("Current window:", selectedWindow, "Prices:", prices);
  // }, [selectedWindow, prices]);

  return (
    <div id="features" className="w-full py-12 xs:py-20 px-6">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
          Live Feed
        </h2>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {[300, 900, 1800, 3600, 7200].map((sec) => (
            <button
              key={sec}
              onClick={() => handleWindowChange(sec)}
              className={`px-4 py-2 text-sm rounded-lg transition ${
                selectedWindow === sec
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {sec / 60}m
            </button>
          ))}
        </div>

        <div className="mt-3 text-sm text-muted-foreground">
          {error ? (
            <span className="text-red-500">⚠️ {error}</span>
          ) : isConnected ? (
            <span>
              Live • Updated{" "}
              {lastUpdate
                ? lastUpdate.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : "just now"}
            </span>
          ) : (
            "Connecting..."
          )}
        </div>
      </div>

      <div className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {poolNames.length > 0 ? (
          poolNames.map((poolName) => (
            <PriceCard
              key={poolName}
              poolName={poolName}
              priceData={prices[poolName]}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-muted-foreground">
            {isConnected
              ? "Waiting for price data..."
              : "Connecting to feed..."}
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveFeedSection;
