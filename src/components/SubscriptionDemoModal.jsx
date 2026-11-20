import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  CreditCard, 
  Check, 
  RefreshCw, 
  Receipt, 
  ShieldCheck, 
  AlertCircle,
  Database,
  Sparkles
} from 'lucide-react';

export default function SubscriptionDemoModal({ isOpen, onClose }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [customerName, setCustomerName] = useState('Alex Morgan');
  const [customerEmail, setCustomerEmail] = useState('alex@example.com');
  const [savedData, setSavedData] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  // Load from LocalStorage
  useEffect(() => {
    if (isOpen) {
      try {
        const stored = localStorage.getItem('demo_subscription_billing');
        if (stored) {
          const parsed = JSON.parse(stored);
          setSavedData(parsed);
          setSelectedPlan(parsed.planId || 'pro');
          setBillingCycle(parsed.cycle || 'monthly');
        } else {
          // Default initial state
          const defaultSub = {
            planId: 'pro',
            planName: 'Pro Tier',
            cycle: 'monthly',
            amount: 49,
            customerName: 'Alex Morgan',
            customerEmail: 'alex@example.com',
            status: 'Active',
            startDate: new Date().toLocaleDateString(),
            nextBilling: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
            invoices: [
              { id: 'INV-2026-001', date: new Date().toLocaleDateString(), amount: '$49.00', status: 'Paid' }
            ]
          };
          localStorage.setItem('demo_subscription_billing', JSON.stringify(defaultSub));
          setSavedData(defaultSub);
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, [isOpen]);

  const plans = [
    {
      id: 'starter',
      name: 'Starter Plan',
      monthlyPrice: 19,
      yearlyPrice: 15,
      description: 'Ideal for freelance developers and individuals getting started.',
      features: ['Up to 3 Active Projects', 'Basic Analytics', 'Community Support', 'LocalStorage Sync']
    },
    {
      id: 'pro',
      name: 'Pro Professional',
      monthlyPrice: 49,
      yearlyPrice: 39,
      popular: true,
      description: 'Best for growing engineering teams and active digital services.',
      features: ['Unlimited Projects', 'Automated Invoicing', 'Priority Support', 'Full API Access', 'Custom Roles']
    },
    {
      id: 'enterprise',
      name: 'Enterprise Scale',
      monthlyPrice: 99,
      yearlyPrice: 79,
      description: 'Tailored for enterprise workloads needing custom SLA and security.',
      features: ['Dedicated Instance', '24/7 Phone Support', 'Custom Integrations', 'Audit Logging', 'SLA Guarantee']
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    const planObj = plans.find((p) => p.id === selectedPlan);
    const price = billingCycle === 'monthly' ? planObj.monthlyPrice : planObj.yearlyPrice * 12;

    const newInvoice = {
      id: `INV-2026-${Math.floor(100 + Math.random() * 900)}`,
      date: new Date().toLocaleDateString(),
      amount: `$${price}.00`,
      status: 'Paid'
    };

    const newSub = {
      planId: planObj.id,
      planName: planObj.name,
      cycle: billingCycle,
      amount: price,
      customerName,
      customerEmail,
      status: 'Active',
      startDate: new Date().toLocaleDateString(),
      nextBilling: new Date(
        Date.now() + (billingCycle === 'monthly' ? 30 : 365) * 24 * 60 * 60 * 1000
      ).toLocaleDateString(),
      invoices: savedData ? [newInvoice, ...savedData.invoices] : [newInvoice]
    };

    localStorage.setItem('demo_subscription_billing', JSON.stringify(newSub));
    setSavedData(newSub);
    setToastMessage(`Plan upgraded to ${planObj.name} and saved to LocalStorage!`);
    setTimeout(() => setToastMessage(''), 3500);
  };

  const handleResetStorage = () => {
    localStorage.removeItem('demo_subscription_billing');
    setSavedData(null);
    setToastMessage('LocalStorage data reset successfully.');
    setTimeout(() => setToastMessage(''), 3000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden my-8 z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white">
                <Receipt className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  Subscription Billing Management System
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                    Live Demo
                  </span>
                </h3>
                <p className="text-xs text-slate-400 flex items-center gap-2">
                  <Database className="w-3.5 h-3.5 text-emerald-400" />
                  Synced with Browser LocalStorage
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Toast Alert */}
          {toastMessage && (
            <div className="bg-emerald-950/90 border-b border-emerald-800/80 px-6 py-2.5 text-xs sm:text-sm text-emerald-300 flex items-center gap-2 animate-fadeIn">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{toastMessage}</span>
            </div>
          )}

          {/* Body Content */}
          <div className="p-6 overflow-y-auto space-y-6">
            
            {/* Active Subscription Status Banner */}
            {savedData && (
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/60 to-cyan-950/60 border border-cyan-800/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase font-semibold text-cyan-400 tracking-wider">
                    Current Active Subscription
                  </div>
                  <div className="text-lg font-bold text-white mt-0.5 flex items-center gap-2">
                    {savedData.planName}
                    <span className="text-xs font-normal px-2 py-0.5 rounded-full bg-emerald-900/60 text-emerald-300 border border-emerald-700/60">
                      {savedData.status}
                    </span>
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    Subscriber: <span className="font-semibold">{savedData.customerName}</span> ({savedData.customerEmail}) • Renewal: {savedData.nextBilling}
                  </div>
                </div>

                <div className="text-right flex flex-col items-end gap-1.5 w-full sm:w-auto">
                  <div className="text-xl font-mono font-extrabold text-cyan-300">
                    ${savedData.amount}{savedData.cycle === 'monthly' ? '/mo' : '/yr'}
                  </div>
                  <button
                    onClick={handleResetStorage}
                    className="text-xs text-slate-400 hover:text-rose-400 flex items-center gap-1 transition-colors"
                  >
                    <RefreshCw className="w-3 h-3" />
                    Reset Stored Data
                  </button>
                </div>
              </div>
            )}

            {/* Billing Cycle Toggle */}
            <div className="flex flex-col items-center justify-center gap-2 pt-2">
              <div className="flex items-center gap-3 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
                <button
                  type="button"
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    billingCycle === 'monthly'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Monthly Billing
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    billingCycle === 'yearly'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Annual Billing
                  <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 font-bold">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>

            {/* Plans Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {plans.map((p) => {
                const isCurrent = savedData?.planId === p.id;
                const isSelected = selectedPlan === p.id;
                const price = billingCycle === 'monthly' ? p.monthlyPrice : p.yearlyPrice;

                return (
                  <div
                    key={p.id}
                    onClick={() => setSelectedPlan(p.id)}
                    className={`rounded-xl p-5 border cursor-pointer transition-all duration-200 relative flex flex-col justify-between ${
                      isSelected
                        ? 'bg-slate-800/90 border-cyan-400 shadow-lg shadow-cyan-500/10 scale-[1.02]'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {p.popular && (
                      <span className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500 text-slate-950 uppercase tracking-wider">
                        Most Popular
                      </span>
                    )}

                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-white text-base">{p.name}</h4>
                        {isCurrent && (
                          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded-md border border-emerald-800/50">
                            Active
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mt-1">{p.description}</p>
                      
                      <div className="my-4">
                        <span className="text-3xl font-extrabold text-white font-mono">${price}</span>
                        <span className="text-xs text-slate-400">/month</span>
                        {billingCycle === 'yearly' && (
                          <div className="text-[11px] text-cyan-400 font-medium">Billed annually (${price * 12}/yr)</div>
                        )}
                      </div>

                      <div className="space-y-2 pt-3 border-t border-slate-800 text-xs text-slate-300">
                        {p.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 pt-3">
                      <div
                        className={`w-full py-2 rounded-lg text-center text-xs font-semibold transition-all ${
                          isSelected
                            ? 'bg-cyan-500 text-slate-950 font-bold'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {isSelected ? 'Selected' : 'Choose Plan'}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Subscriber Form & Confirmation */}
            <form onSubmit={handleSubscribe} className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-cyan-400" />
                Subscriber Details &amp; Confirmation
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Subscriber Full Name</label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:border-cyan-400 focus:outline-none"
                    placeholder="Enter name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Billing Email Address</label>
                  <input
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    required
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:border-cyan-400 focus:outline-none"
                    placeholder="Enter email"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between pt-2 gap-3">
                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Client-side simulation writing directly to localStorage
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 hover:from-blue-500 hover:to-cyan-500 shadow-md shadow-cyan-500/25 transition-all"
                >
                  Confirm Subscription &amp; Save
                </button>
              </div>
            </form>

            {/* Generated Invoices Table */}
            {savedData?.invoices && savedData.invoices.length > 0 && (
              <div className="border border-slate-800 rounded-xl overflow-hidden">
                <div className="bg-slate-950 px-4 py-2.5 border-b border-slate-800 text-xs font-bold text-slate-300 flex items-center justify-between">
                  <span>Billing &amp; Invoice History</span>
                  <span className="text-[11px] font-normal text-slate-500">Synced to Client Storage</span>
                </div>
                <div className="divide-y divide-slate-800 text-xs text-slate-300">
                  {savedData.invoices.map((inv, idx) => (
                    <div key={idx} className="px-4 py-2.5 flex items-center justify-between bg-slate-900/40">
                      <div className="flex items-center gap-3">
                        <Receipt className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="font-mono text-white font-medium">{inv.id}</span>
                        <span className="text-slate-400 text-[11px]">{inv.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-cyan-300">{inv.amount}</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800/50">
                          {inv.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
