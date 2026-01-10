'use client';

import React from 'react';
import { Sparkles, Zap, Trophy, ArrowRight, Star, Users, DollarSign } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-pink-500/20 rounded-full blur-xl float-animation"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/15 rounded-full blur-2xl float-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-500/25 rounded-full blur-lg float-animation" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-4 py-6">
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Zap className="w-8 h-8 text-cyan-400" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              LuckyHaus
            </h1>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="/lottery" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Play Now
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 px-4 py-16">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Title */}
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span className="text-sm text-pink-300 font-medium">The Ultimate Solana Lottery</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent leading-tight glow-effect">
              Welcome to
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                LuckyHaus
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the most exciting lottery on Solana. Buy tickets with USDC, watch the pot grow,
              and stand a chance to win big every day at midnight Amsterdam time.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/lottery"
              className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/25 flex items-center justify-center space-x-2 relative overflow-hidden"
            >
              <Zap className="w-5 h-5" />
              <span>Enter the Lottery</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-xl mb-4 mx-auto">
                <DollarSign className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">1 USDC</h3>
              <p className="text-gray-400">Per Ticket Price</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-xl mb-4 mx-auto">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Daily</h3>
              <p className="text-gray-400">Draws Every Day</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm hover:border-pink-500/30 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-pink-500/20 rounded-xl mb-4 mx-auto">
                <Trophy className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">100%</h3>
              <p className="text-gray-400">Transparent Winners</p>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Connect Wallet</h3>
                <p className="text-gray-400">Connect your Solana wallet and ensure you have USDC</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Buy Tickets</h3>
                <p className="text-gray-400">Purchase tickets for 1 USDC each. More tickets = better chances</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Win Big</h3>
                <p className="text-gray-400">Winner selected randomly at midnight Amsterdam time</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <div className="text-center">
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Ready to Get Lucky?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of players in the most transparent and exciting lottery on Solana.
                Your chance to win starts with just 1 USDC.
              </p>
              <Link
                href="/lottery"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <span>Start Playing Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </main>


    </div>
  );
}