import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";
import LogoCloud from "./logo-cloud";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center py-20 px-6">
      <div className="md:mt-6 flex items-center justify-center">
        <div className="text-center max-w-2xl">
          <Badge className="bg-primary rounded-full py-1 border-none">
            v1.0.0 is available now! 🚀
          </Badge>
          <h1 className="mt-6 max-w-[28ch] text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold !leading-[1.15] tracking-tighter bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
            TWAP & SPOT Oracle
          </h1>

          <div className="mt-6 flex items-center justify-center space-x-10">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Time-Weighted Average
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
              <span className="text-sm font-medium text-red-600 dark:text-red-400">
                Instant Spot Price
              </span>
            </div>
          </div>

          <p className="mt-8 max-w-[70ch] text-lg xs:text-xl sm:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 font-light">
            Advanced oracle platform delivering{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              real-time spot price streaming
            </span>{" "}
            and{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              multiple TWAP window calculations
            </span>{" "}
            for precise market insights.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center sm:justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full text-base"
            >
              Get Started <ArrowUpRight className="!h-5 !w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full text-base shadow-none"
            >
              <CirclePlay className="!h-5 !w-5" /> Watch Demo
            </Button>
          </div>
        </div>
      </div>
      <LogoCloud className="mt-24 max-w-3xl mx-auto" />
    </div>
  );
};

export default Hero;
