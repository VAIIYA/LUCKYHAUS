'use client';

import React from 'react';
import { Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
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
              <Shield className="w-4 h-4 text-pink-400" />
              <span className="text-sm text-pink-300 font-medium">Privacy Policy</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
              Your Privacy Matters
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              At LuckyHaus, we are committed to protecting your privacy and ensuring transparency
              in how we handle your data.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-white">Information We Collect</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  LuckyHaus operates on the Solana blockchain, which provides inherent transparency.
                  When you interact with our platform, the following information may be collected:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Wallet Address:</strong> Your Solana wallet address is required to participate in the lottery</li>
                  <li><strong>Transaction Data:</strong> All lottery transactions are recorded on the Solana blockchain</li>
                  <li><strong>Ticket Purchases:</strong> Records of tickets purchased and associated transaction signatures</li>
                  <li><strong>Usage Data:</strong> Basic analytics about platform usage (anonymized)</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-white">How We Use Your Information</h2>
              <div className="space-y-4 text-gray-300">
                <p>We use the collected information solely for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Lottery Operations:</strong> To process ticket purchases and determine winners</li>
                  <li><strong>Transparency:</strong> To provide public transaction history and winner announcements</li>
                  <li><strong>Platform Improvement:</strong> To analyze usage patterns and improve the user experience</li>
                  <li><strong>Security:</strong> To prevent fraud and ensure fair play</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-white">Data Storage and Security</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  LuckyHaus prioritizes the security of your data:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Blockchain Storage:</strong> Transaction data is stored immutably on the Solana blockchain</li>
                  <li><strong>GitHub Gist:</strong> Lottery state data is stored in encrypted GitHub Gists</li>
                  <li><strong>No Personal Data:</strong> We do not collect or store personally identifiable information</li>
                  <li><strong>Encryption:</strong> All stored data is encrypted and access is restricted</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-white">Data Sharing and Third Parties</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We are committed to protecting your privacy:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>No Sale of Data:</strong> We do not sell, trade, or rent your personal information to third parties</li>
                  <li><strong>Blockchain Transparency:</strong> Transaction data is publicly visible on Solana blockchain</li>
                  <li><strong>Service Providers:</strong> We may use third-party services for hosting and analytics, but they do not receive personal data</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-white">Your Rights and Choices</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Regarding your data on LuckyHaus:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Blockchain Immutability:</strong> Data stored on blockchain cannot be deleted or modified</li>
                  <li><strong>Wallet Control:</strong> You control your wallet and can choose not to interact with our platform</li>
                  <li><strong>Access Requests:</strong> You can request access to any additional data we may hold</li>
                  <li><strong>Contact Us:</strong> For privacy concerns, you can contact us through our official channels</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-white">Cookies and Analytics</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Our website may use cookies and analytics services to improve your experience:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Analytics:</strong> We use anonymized analytics to understand platform usage</li>
                  <li><strong>Third-Party Services:</strong> Vercel and other hosting providers may collect basic usage data</li>
                  <li><strong>Opt-out:</strong> You can disable cookies in your browser settings</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-white">Changes to This Policy</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We may update this Privacy Policy from time to time. Changes will be:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Posted on Website:</strong> Updates will be posted on this page</li>
                  <li><strong>Effective Immediately:</strong> Changes take effect when posted</li>
                  <li><strong>Major Changes:</strong> Significant changes may be announced via our platforms</li>
                  <li><strong>Review Regularly:</strong> We encourage you to review this policy periodically</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-white">Contact Information</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Official Website:</strong> Visit our main website for contact information</li>
                  <li><strong>Social Channels:</strong> Check our official social media accounts</li>
                  <li><strong>Blockchain:</strong> All official communications will reference our verified contracts</li>
                </ul>
                <p className="mt-4">
                  <strong>Last Updated:</strong> January 2026
                </p>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <span>← Back to Home</span>
            </Link>
          </div>
        </div>
      </main>


    </div>
  );
}