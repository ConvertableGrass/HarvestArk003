import React, { useState } from 'react';
import { Wallet, Shield, Zap, Gamepad2, Sparkles, ChevronRight, ExternalLink } from 'lucide-react';
import { DigitalFingerprintLogo } from './DigitalFingerprintLogo';

interface LoginPageProps {
  onLogin: (username: string) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<string>('');

  const wallets = [
    {
      id: 'metamask',
      name: 'MetaMask',
      icon: '🦊',
      description: 'Connect using MetaMask wallet',
      popular: true
    },
    {
      id: 'walletconnect',
      name: 'WalletConnect',
      icon: '🔗',
      description: 'Scan with WalletConnect to connect',
      popular: true
    },
    {
      id: 'coinbase',
      name: 'Coinbase Wallet',
      icon: '🔵',
      description: 'Connect with Coinbase Wallet',
      popular: false
    },
    {
      id: 'phantom',
      name: 'Phantom',
      icon: '👻',
      description: 'Connect using Phantom wallet',
      popular: false
    },
    {
      id: 'trust',
      name: 'Trust Wallet',
      icon: '🛡️',
      description: 'Connect with Trust Wallet',
      popular: false
    }
  ];

  const handleWalletConnect = async (walletId: string) => {
    setSelectedWallet(walletId);
    setIsConnecting(true);

    // Simulate wallet connection
    setTimeout(() => {
      const wallet = wallets.find(w => w.id === walletId);
      onLogin(`${wallet?.name} User`);
      setIsConnecting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <DigitalFingerprintLogo size={100} className="mb-6" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
            Harvest Ark
          </h1>
          <p className="text-gray-400 text-sm">v3.0.2 - Complete Web Game</p>
          <div className="flex items-center justify-center gap-1 mt-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-xs text-cyan-400 font-semibold">Digital Identity Gaming</span>
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </div>
        </div>

        {/* Connect Wallet Section */}
        <div className="bg-black/50 backdrop-blur-xl rounded-2xl border border-cyan-500/30 p-8 shadow-2xl shadow-cyan-500/10">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-600/20 to-indigo-600/20 rounded-xl mb-4 border border-cyan-500/30">
              <Wallet className="w-8 h-8 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Connect Your Wallet</h2>
            <p className="text-gray-400 text-sm">
              Verify your digital identity to start your galactic farming adventure
            </p>
          </div>

          {/* Wallet Options */}
          <div className="space-y-3 mb-6">
            {wallets.map((wallet) => (
              <button
                key={wallet.id}
                onClick={() => handleWalletConnect(wallet.id)}
                disabled={isConnecting}
                className={`
                  w-full p-4 rounded-xl border transition-all group hover:scale-[1.02] active:scale-[0.98]
                  ${selectedWallet === wallet.id && isConnecting
                    ? 'border-cyan-500 bg-cyan-900/20 animate-pulse'
                    : 'border-gray-600 bg-gray-900/30 hover:border-cyan-500/50 hover:bg-gray-800/50'
                  }
                  ${isConnecting && selectedWallet !== wallet.id ? 'opacity-50 cursor-not-allowed' : ''}
                `}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{wallet.icon}</div>
                    <div className="text-left">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white">{wallet.name}</span>
                        {wallet.popular && (
                          <span className="text-xs bg-cyan-600/30 text-cyan-300 px-2 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-400">{wallet.description}</p>
                    </div>
                  </div>
                  
                  {selectedWallet === wallet.id && isConnecting ? (
                    <div className="w-5 h-5 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin"></div>
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Security Features */}
          <div className="bg-gray-900/30 rounded-lg p-4 mb-6 border border-gray-700">
            <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              Secure Digital Identity
            </h3>
            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <Zap className="w-3 h-3 text-cyan-400" />
                <span>Your identity, your claims, your uniqueness</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-3 h-3 text-green-400" />
                <span>Blockchain-verified game progress</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-indigo-400" />
                <span>True ownership of digital assets</span>
              </div>
            </div>
          </div>

          {/* Demo Access */}
          <div className="pt-4 border-t border-gray-700">
            <button
              onClick={() => onLogin('Demo Player')}
              disabled={isConnecting}
              className={`
                w-full py-3 px-4 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 rounded-lg 
                text-gray-300 text-sm transition-all flex items-center justify-center gap-2
                ${isConnecting ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              <Gamepad2 className="w-4 h-4" />
              Continue as Guest (No Wallet Required)
            </button>
          </div>

          {/* Help Link */}
          <div className="text-center mt-4">
            <button className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors flex items-center justify-center gap-1 mx-auto">
              <span>New to digital identity?</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-xs text-gray-500">
          <p>© 2025 Harvest Ark. All rights reserved.</p>
          <p className="mt-1">Powered by digital fingerprint technology</p>
        </div>
      </div>
    </div>
  );
};