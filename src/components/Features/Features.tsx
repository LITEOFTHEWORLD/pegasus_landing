import { Lock, PieChart, Repeat, Wallet } from "lucide-react";

export const Features = () => {
    const features = [
      {
        icon: <Wallet size={24} />,
        title: "Decentralized and Secure",
        description: "Built on blockchain technology, ensuring trustless and transparent operations."
      },
      {
        icon: <Repeat size={24} />,
        title: "Optimized Trading Routes",
        description: "Our system scans multiple liquidity pools to secure the best prices and minimal fees."
      },
      {
        icon: <PieChart size={24} />,
        title: "Stake & Earn Rewards",
        description: "Become part of the ecosystem by staking $PGS and earning platform revenue as passive income."
      },
      {
        icon: <Lock size={24} />,
        title: "No Middlemen",
        description: "Trade directly from your wallet. Full custody of your funds at all times."
      }
    ];
  
    return (
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose PegaSwap?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl">
                <div className="text-purple-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };