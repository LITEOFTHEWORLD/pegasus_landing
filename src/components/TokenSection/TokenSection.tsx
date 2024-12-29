export const TokenSection = () => (
    <div className="py-20 bg-gradient-to-b from-gray-900 to-purple-900/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-6">
              Introducing $PGS – Powering the Ecosystem
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400">Utility</h3>
                <p className="text-gray-300">Stake $PGS to unlock platform rewards.</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400">Governance</h3>
                <p className="text-gray-300">Vote on protocol upgrades and changes.</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400">Supply</h3>
                <p className="text-gray-300">1,000,000 $PGS</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img src="/api/placeholder/400/400" alt="Token Distribution" className="rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );