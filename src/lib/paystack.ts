/**
 * Paystack helper for NaijaBuild
 * 
 * To use:
 * 1. Create a Paystack account at https://paystack.com
 * 2. Get your Public Key and Secret Key
 * 3. Add them to .env.local
 */

export const PAYSTACK_PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "";

export function formatNaira(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(amount);
}

// Plans in kobo (Paystack uses kobo)
export const PLANS = {
  starter: {
    name: "Starter",
    amount: 450000, // ₦4,500
    display: "₦4,500",
  },
  business: {
    name: "Business",
    amount: 1200000, // ₦12,000
    display: "₦12,000",
  },
  pro: {
    name: "Pro",
    amount: 2500000, // ₦25,000
    display: "₦25,000",
  },
};

/**
 * Example of how to trigger Paystack checkout on the frontend:
 * 
 * const handler = (window as any).PaystackPop.setup({
 *   key: PAYSTACK_PUBLIC_KEY,
 *   email: user.email,
 *   amount: PLANS.business.amount,
 *   currency: "NGN",
 *   ref: `naijabuild_${Date.now()}`,
 *   callback: function(response: any) {
 *     // Verify on backend then activate website
 *     console.log(response.reference);
 *   },
 *   onClose: function() {
 *     // User closed the popup
 *   },
 * });
 * handler.openIframe();
 */
