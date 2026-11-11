import React, { useState } from 'react';
import { 
  CreditCard, ArrowUpRight, ArrowDownLeft, Shield, Lock, Unlock, 
  Send, DollarSign, ChevronRight, Eye, EyeOff, CheckCircle2, AlertCircle, Bell
} from 'lucide-react';

export const MobileBankingShowcase: React.FC<{ isEmbedded?: boolean }> = ({ isEmbedded = false }) => {
  const [isCardFrozen, setIsCardFrozen] = useState(false);
  const [showCardNumber, setShowCardNumber] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<'checking' | 'savings'>('checking');
  const [transferModalOpen, setTransferModalOpen] = useState(false);
  const [transferAmount, setTransferAmount] = useState('250.00');
  const [transferSuccess, setTransferSuccess] = useState(false);

  const transactions = [
    { id: 'tx-1', name: 'GitHub Enterprise', date: 'Today, 2:45 PM', category: 'Software', amount: -21.00, icon: 'code' },
    { id: 'tx-2', name: 'Whole Foods Market', date: 'Today, 11:20 AM', category: 'Groceries', amount: -68.45, icon: 'cart' },
    { id: 'tx-3', name: 'Stripe Global Payout', date: 'Yesterday', category: 'Income', amount: +3450.00, icon: 'income' },
    { id: 'tx-4', name: 'Amazon Web Services', date: 'Nov 09', category: 'Cloud Infrastructure', amount: -142.80, icon: 'cloud' },
    { id: 'tx-5', name: 'Equinox Health Club', date: 'Nov 08', category: 'Wellness', amount: -260.00, icon: 'fitness' }
  ];

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    setTransferSuccess(true);
    setTimeout(() => {
      setTransferSuccess(false);
      setTransferModalOpen(false);
    }, 1500);
  };

  return (
    <div className={`w-full max-w-sm mx-auto bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden font-sans select-none ${isEmbedded ? '' : 'my-4'}`}>
      {/* Phone Status Bar */}
      <div className="flex justify-between items-center px-6 pt-3 pb-2 text-xs text-slate-400 font-mono">
        <span>09:41</span>
        <div className="flex items-center space-x-2">
          <span>5G</span>
          <div className="w-5 h-2.5 border border-slate-400 rounded-sm p-0.5 flex items-center">
            <div className="w-3.5 h-1.5 bg-emerald-400 rounded-2xs"></div>
          </div>
        </div>
      </div>

      {/* App Header */}
      <div className="px-6 py-3 flex justify-between items-center border-b border-slate-800/80">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-slate-700 to-slate-800 border border-slate-700 flex items-center justify-center font-semibold text-sm text-sky-400">
            AV
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Welcome back,</div>
            <div className="text-sm font-semibold text-white">Alexander Vance</div>
          </div>
        </div>
        <button 
          aria-label="Notifications" 
          className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 flex items-center justify-center text-slate-300 relative transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-sky-400 rounded-full"></span>
        </button>
      </div>

      {/* Account Balance Card */}
      <div className="p-6">
        <div className="flex space-x-2 p-1 bg-slate-950/60 rounded-xl mb-4 border border-slate-800">
          <button 
            onClick={() => setSelectedAccount('checking')}
            className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition-all ${
              selectedAccount === 'checking' 
                ? 'bg-slate-800 text-white shadow-sm' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Checking (•• 4892)
          </button>
          <button 
            onClick={() => setSelectedAccount('savings')}
            className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition-all ${
              selectedAccount === 'savings' 
                ? 'bg-slate-800 text-white shadow-sm' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            High-Yield Savings
          </button>
        </div>

        <div className="relative p-5 rounded-2xl bg-gradient-to-br from-slate-850 via-slate-900 to-slate-950 border border-slate-700/70 shadow-lg">
          <div className="flex justify-between items-start">
            <span className="text-xs font-medium uppercase tracking-wider text-slate-400">Total Available Balance</span>
            <span className="inline-flex items-center text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              +4.85% APY
            </span>
          </div>

          <div className="mt-2 flex items-baseline space-x-2">
            <span className="text-3xl font-bold tracking-tight text-white font-mono">
              {selectedAccount === 'checking' ? '$14,892.40' : '$42,150.80'}
            </span>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
            <div className="flex items-center space-x-2">
              <span>Card Status:</span>
              <span className={`font-medium ${isCardFrozen ? 'text-amber-400' : 'text-emerald-400'}`}>
                {isCardFrozen ? 'Frozen' : 'Active'}
              </span>
            </div>
            <button 
              onClick={() => setIsCardFrozen(!isCardFrozen)}
              className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors"
            >
              {isCardFrozen ? <Unlock className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
              <span>{isCardFrozen ? 'Unfreeze' : 'Freeze'}</span>
            </button>
          </div>
        </div>

        {/* Quick Actions Bar */}
        <div className="grid grid-cols-4 gap-2 mt-4">
          <button 
            onClick={() => setTransferModalOpen(true)}
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-sky-500/10 text-sky-400 flex items-center justify-center group-hover:scale-105 transition-transform mb-1.5">
              <Send className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-medium text-slate-300">Transfer</span>
          </button>

          <button className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 transition-colors group">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-transform mb-1.5">
              <ArrowDownLeft className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-medium text-slate-300">Deposit</span>
          </button>

          <button className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 transition-colors group">
            <div className="w-10 h-10 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center group-hover:scale-105 transition-transform mb-1.5">
              <DollarSign className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-medium text-slate-300">Pay Bill</span>
          </button>

          <button 
            onClick={() => setShowCardNumber(!showCardNumber)}
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:scale-105 transition-transform mb-1.5">
              {showCardNumber ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </div>
            <span className="text-[11px] font-medium text-slate-300">{showCardNumber ? 'Hide' : 'Card'}</span>
          </button>
        </div>

        {/* Transactions Feed */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Recent Transactions</h3>
            <button className="text-xs font-medium text-sky-400 hover:text-sky-300 flex items-center">
              View All <ChevronRight className="w-3 h-3 ml-0.5" />
            </button>
          </div>

          <div className="space-x-0 space-y-2">
            {transactions.map((tx) => (
              <div 
                key={tx.id} 
                className="flex items-center justify-between p-3 rounded-xl bg-slate-850/60 hover:bg-slate-800/60 border border-slate-800/80 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs ${
                    tx.amount > 0 
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                      : 'bg-slate-800 text-slate-300 border border-slate-700'
                  }`}>
                    {tx.amount > 0 ? '+' : '−'}
                  </div>
                  <div>
                    <div className="text-xs font-medium text-white">{tx.name}</div>
                    <div className="text-[11px] text-slate-400">{tx.date} • {tx.category}</div>
                  </div>
                </div>
                <div className={`text-xs font-mono font-semibold ${
                  tx.amount > 0 ? 'text-emerald-400' : 'text-slate-200'
                }`}>
                  {tx.amount > 0 ? `+$${tx.amount.toFixed(2)}` : `-$${Math.abs(tx.amount).toFixed(2)}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transfer Modal / Sheet */}
      {transferModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-t-3xl sm:rounded-2xl p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-sm font-semibold text-white">Instant Money Transfer</h4>
              <button 
                onClick={() => setTransferModalOpen(false)}
                className="text-xs text-slate-400 hover:text-white px-2 py-1"
              >
                Cancel
              </button>
            </div>

            {transferSuccess ? (
              <div className="py-8 flex flex-col items-center justify-center text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-2 animate-bounce" />
                <p className="text-sm font-semibold text-white">Transfer Completed!</p>
                <p className="text-xs text-slate-400 mt-1">${transferAmount} sent to Sarah Jenkins</p>
              </div>
            ) : (
              <form onSubmit={handleTransfer} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Recipient</label>
                  <div className="flex items-center space-x-3 p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                    <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 font-semibold text-xs flex items-center justify-center">
                      SJ
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Sarah Jenkins</div>
                      <div className="text-[10px] text-slate-400">sarah.j@apexmail.com</div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Amount (USD)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-slate-400 font-mono text-sm">$</span>
                    <input 
                      type="text" 
                      value={transferAmount}
                      onChange={(e) => setTransferAmount(e.target.value)}
                      className="w-full pl-8 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white font-mono text-sm focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/60 text-xs text-slate-400 flex items-start space-x-2">
                  <Shield className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>Protected by 256-bit bank encryption. Funds arrive in recipient account instantly.</span>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded-xl text-xs transition-colors flex items-center justify-center space-x-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Confirm Transfer ${transferAmount}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
