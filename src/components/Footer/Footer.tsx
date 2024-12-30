import { Send, Twitter } from "lucide-react";

export const Footer = () => (
  <footer className="bg-gray-900 py-12 ">
    <div className="container mx-auto px-6  ">
      <div className="grid md:grid-cols-4 gap-2 px-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/api/placeholder/40/40"
              alt="Logo"
              className="rounded-full"
            />
            <span className="text-xl font-bold text-white">PegaSwap</span>
          </div>
          <p className="text-gray-400">Trading and earning made simple.</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <div className="space-y-2">
            <a href="#" className="block text-gray-400 hover:text-white">
              Trade
            </a>
            <a href="#" className="block text-gray-400 hover:text-white">
              Stake
            </a>
            <a href="#" className="block text-gray-400 hover:text-white">
              Whitepaper
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Community</h3>
          <div className="flex gap-4">
            <Twitter className="text-gray-400 hover:text-white cursor-pointer" />
            {/* <Discord className="text-gray-400 hover:text-white cursor-pointer" /> */}
            <Send className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg flex-1"
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        © 2024 PegaSwap. All Rights Reserved.
      </div>
    </div>
  </footer>
);
