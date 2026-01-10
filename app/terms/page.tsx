'use client';

import React from 'react';
import { FileText, Zap } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
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
              <FileText className="w-4 h-4 text-pink-400" />
              <span className="text-sm text-pink-300 font-medium">Terms of Service</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Please read these terms carefully before using LuckyHaus.
              By participating, you agree to be bound by these terms.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-white">Acceptance of Terms</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  By accessing and using LuckyHaus ("the Service"), you accept and agree to be bound by
                  the terms and provision of this agreement. If you do not agree to abide by the above,
                  please do not use this service.
                </p>
                <p>
                  These Terms of Service apply to all users of the LuckyHaus lottery platform on the Solana blockchain.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-white">Description of Service</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  LuckyHaus is a decentralized lottery platform built on the Solana blockchain that allows users to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Purchase lottery tickets using USDC stablecoin</li>
                  <li>Participate in daily lottery draws</li>
                  <li>Win prizes based on random selection from ticket holders</li>
                  <li>View transparent transaction history and winner announcements</li>
                </ul>
                <p>
                  The service is provided "as is" and operates 24/7, with daily draws at midnight Amsterdam time.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-white">Eligibility and Age Restrictions</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  To use LuckyHaus, you must:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Be at least 18 years old or the legal age of majority in your jurisdiction</li>
                  <li>Have a valid Solana wallet with sufficient USDC balance</li>
                  <li>Accept responsibility for all transactions made with your wallet</li>
                  <li>Comply with all applicable laws and regulations in your jurisdiction</li>
                </ul>
                <p>
                  LuckyHaus reserves the right to restrict access from certain jurisdictions where lottery
                  participation may be prohibited or restricted.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-white">Ticket Purchase and Payment</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Ticket purchases are subject to the following terms:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Ticket Price:</strong> Each ticket costs exactly 1 USDC</li>
                  <li><strong>Payment Method:</strong> USDC transfers via Solana blockchain</li>
                  <li><strong>Transaction Fees:</strong> Users are responsible for Solana network fees</li>
                  <li><strong>House Commission:</strong> A percentage of each ticket contributes to platform operations</li>
                  <li><strong>Refunds:</strong> Tickets are non-refundable once purchased</li>
                </ul>
                <p>
                  All transactions are final and irreversible once confirmed on the Solana blockchain.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-white">Lottery Rules and Fairness</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  The LuckyHaus lottery operates under transparent rules:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Random Selection:</strong> Winners are selected randomly from all ticket holders</li>
                  <li><strong>Equal Chance:</strong> Each ticket has an equal probability of winning</li>
                  <li><strong>Daily Draws:</strong> Rounds end at midnight Amsterdam time</li>
                  <li><strong>Prize Distribution:</strong> Winner receives the entire pot minus house commission</li>
                  <li><strong>Multiple Tickets:</strong> Users may purchase multiple tickets to increase chances</li>
                </ul>
                <p>
                  All lottery operations are recorded on the Solana blockchain for complete transparency.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-white">User Responsibilities</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  As a user of LuckyHaus, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate wallet information and maintain wallet security</li>
                  <li>Not attempt to manipulate or interfere with lottery operations</li>
                  <li>Not use the service for any illegal or unauthorized purpose</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Report any suspected security issues or bugs</li>
                  <li>Accept that blockchain transactions are irreversible</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-white">Prohibited Activities</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  The following activities are strictly prohibited:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Using multiple wallets to circumvent fair play rules</li>
                  <li>Attempting to hack, exploit, or disrupt the platform</li>
                  <li>Creating fake accounts or impersonating other users</li>
                  <li>Distributing malware or engaging in fraudulent activities</li>
                  <li>Violating intellectual property rights</li>
                  <li>Engaging in money laundering or other illegal financial activities</li>
                </ul>
                <p>
                  Violation of these rules may result in permanent suspension from the platform.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-white">Disclaimers and Limitations</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Important disclaimers:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>As Is Service:</strong> The service is provided "as is" without warranties</li>
                  <li><strong>No Guarantees:</strong> There are no guarantees of winning or platform availability</li>
                  <li><strong>Blockchain Risks:</strong> Users accept all risks associated with blockchain transactions</li>
                  <li><strong>Third-Party Services:</strong> We are not responsible for third-party wallet or exchange issues</li>
                  <li><strong>Regulatory Compliance:</strong> Users are responsible for compliance with local laws</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-white">Intellectual Property</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  LuckyHaus branding, design, and content are protected:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>All content on the platform is owned by LuckyHaus or licensed appropriately</li>
                  <li>Users may not copy, distribute, or create derivative works without permission</li>
                  <li>The LuckyHaus name and logo are trademarks</li>
                  <li>Open source components follow their respective licenses</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-white">Termination</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  LuckyHaus reserves the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Terminate or suspend access to the service at any time</li>
                  <li>Modify or discontinue the service without notice</li>
                  <li>Refuse service to users who violate these terms</li>
                  <li>Update these terms with reasonable notice</li>
                </ul>
                <p>
                  Upon termination, your right to use the service ceases immediately.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-white">Governing Law</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  These Terms of Service are governed by:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Applicable international blockchain and cryptocurrency regulations</li>
                  <li>The laws of the jurisdiction where the service is operated</li>
                  <li>Users agree to submit to the exclusive jurisdiction of appropriate courts</li>
                  <li>Disputes will be resolved through binding arbitration when possible</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-white">Contact Information</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  For questions about these Terms of Service:
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