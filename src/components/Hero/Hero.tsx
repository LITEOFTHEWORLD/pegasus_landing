import { ArrowRight } from "lucide-react";

export const Hero = () => (
    <div className="pt-24 pb-20 bg-gradient-to-b from-purple-900/20 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-white mb-6">
              Trade Smarter with Advanced DEX Aggregation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Access the best prices across multiple DEXs with our optimized routing engine.
              Stake $PGS and earn while you trade.
            </p>
            <div className="flex gap-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg flex items-center gap-2">
                Start Trading <ArrowRight size={20} />
              </button>
              <button className="border border-purple-600 text-purple-600 hover:bg-purple-600/10 px-8 py-3 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex-1">
            <img src="/api/placeholder/500/400" alt="Platform Preview" className="rounded-xl shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
  );