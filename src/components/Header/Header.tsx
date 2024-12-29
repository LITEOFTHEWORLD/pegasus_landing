import React from 'react';

export const Header = () => (
  <nav className="fixed top-0 w-full bg-gray-900/50 backdrop-blur-lg z-50">
    <div className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/api/placeholder/40/40" alt="Logo" className="rounded-full" />
          <span className="text-xl font-bold text-white">PegaSwap</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-300 hover:text-white">Trade</a>
          <a href="#" className="text-gray-300 hover:text-white">Stake</a>
          <a href="#" className="text-gray-300 hover:text-white">About</a>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  </nav>
);