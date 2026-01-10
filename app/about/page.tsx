'use client';

import React from 'react';
import { Sparkles, Zap, Shield, Users, DollarSign, Clock, Trophy } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      {/* Header */}
      <header className="px-4 py-6">
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <Zap className="w-8 h-8 text-cyan-400" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              LuckyHaus
            </h1>
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Home
            </Link>
            <Link href="/lottery" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Play Now
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span className="text-sm text-pink-300 font-medium">About LuckyHaus</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
              The Future of
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Lottery Gaming
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              LuckyHaus is revolutionizing the lottery experience on Solana blockchain,
              combining transparency, fairness, and excitement in a decentralized gaming platform.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
                To create the most transparent, fair, and exciting lottery system on blockchain technology.
                We believe gaming should be accessible, trustworthy, and fun for everyone, powered by
                the speed and security of Solana.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-xl mb-4">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Blockchain Transparency</h3>
              <p className="text-gray-400">
                Every transaction is recorded on Solana blockchain, ensuring complete transparency
                and verifiability of all lottery operations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-xl mb-4">
                <DollarSign className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Low Cost Entry</h3>
              <p className="text-gray-400">
                Just 1 USDC per ticket makes LuckyHaus accessible to everyone.
                No hidden fees, no complex requirements.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm hover:border-pink-500/30 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-pink-500/20 rounded-xl mb-4">
                <Clock className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Daily Draws</h3>
              <p className="text-gray-400">
                New rounds start daily at midnight Amsterdam time.
                Consistent schedule keeps the excitement alive.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-xl mb-4">
                <Users className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Fair Distribution</h3>
              <p className="text-gray-400">
                Winners are selected randomly from all ticket holders.
                Every ticket has an equal chance of winning.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm hover:border-yellow-500/30 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-500/20 rounded-xl mb-4">
                <Trophy className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Instant Payouts</h3>
              <p className="text-gray-400">
                Winners receive their prizes instantly via automated smart contract
                payouts on the Solana network.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-xl mb-4">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Lightning Fast</h3>
              <p className="text-gray-400">
                Powered by Solana's high-speed blockchain, transactions are processed
                in seconds, not minutes.
              </p>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              How LuckyHaus Works
            </h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-white">Round Begins</h3>
                  <p className="text-gray-400">
                    Each round starts at midnight Amsterdam time. Players can begin purchasing tickets
                    immediately. The pot starts at $0 and grows with each ticket sold.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-white">Buy Tickets</h3>
                  <p className="text-gray-400">
                    Connect your Solana wallet and purchase tickets for 1 USDC each. You can buy multiple
                    tickets to increase your chances. All transactions are verified on-chain.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-white">Round Ends</h3>
                  <p className="text-gray-400">
                    At midnight Amsterdam time, ticket sales close. A winner is randomly selected from
                    all ticket holders. The entire pot (minus a small house commission) goes to the winner.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-white">Winner Announced</h3>
                  <p className="text-gray-400">
                    The winner is announced immediately, and their prize is transferred automatically
                    via smart contract. A new round begins instantly for continuous gaming.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ready to Join the Haus?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Experience the future of lottery gaming. Transparent, fair, and built on Solana.
              </p>
              <Link
                href="/lottery"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <Zap className="w-5 h-5" />
                <span>Start Playing Now</span>
              </Link>
            </div>
          </div>
        </div>
      </main>


    </div>
  );
}