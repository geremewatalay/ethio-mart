import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import {
  CreditCard,
  Truck,
  ShieldCheck,
  Phone,
  MapPin,
  User,
  ArrowLeft,
  Check,
} from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { cn } from "../../lib/utils";

// Validation schema
const checkoutSchema = z
  .object({
  // Billing Information
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),

  // Shipping Address
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zipCode: z.string().min(5, "ZIP code is required"),
  country: z.string().min(2, "Country is required"),

  // Payment Method
  paymentMethod: z.enum(["card", "telebirr", "cbeBirr", "cash"], {
    required_error: "Please select a payment method",
  }),

  // Card details (conditional)
  cardNumber: z.string().optional(),
  expiryDate: z.string().optional(),
  cvv: z.string().optional(),
  cardName: z.string().optional(),
})
  .superRefine((data, ctx) => {
    if (data.paymentMethod === "card") {
      if (!data.cardNumber?.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["cardNumber"],
          message: "Card number is required",
        });
      }
      if (!data.expiryDate?.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["expiryDate"],
          message: "Expiry date is required",
        });
      }
      if (!data.cvv?.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["cvv"],
          message: "CVV is required",
        });
      }
      if (!data.cardName?.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["cardName"],
          message: "Cardholder name is required",
        });
      }
    }
  });

export const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      paymentMethod: "telebirr",
    },
  });

  // eslint-disable-next-line react-hooks/incompatible-library
  const paymentMethod = watch("paymentMethod");

  const shippingCost = totalPrice > 50 ? 0 : 9.99;
  const tax = totalPrice * 0.08; // 8% tax
  const finalTotal = totalPrice + shippingCost + tax;

  const onSubmit = async () => {
    setIsProcessing(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Clear cart and redirect to success page
    clearCart();
    navigate("/order-success");

    setIsProcessing(false);
  };

  if (cart.length === 0) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-4xl font-black mb-4">Your cart is empty</h1>
        <p className="text-gray-500 mb-8">Add some products to proceed with checkout</p>
        <button
          onClick={() => navigate("/shop")}
          className="bg-emerald-500 text-white px-8 py-3 rounded-xl font-bold"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-white rounded-full transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-3xl font-black">Checkout</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-8">
            {/* Billing Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-3xl shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-xl flex items-center justify-center">
                  <User size={20} />
                </div>
                <h2 className="text-xl font-black">Billing Information</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    {...register("firstName")}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    {...register("lastName")}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                    placeholder="Doe"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    {...register("phone")}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                    placeholder="+251 9XX XXX XXX"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Shipping Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-xl flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <h2 className="text-xl font-black">Shipping Address</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Street Address *
                  </label>
                  <input
                    {...register("address")}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                    placeholder="Bole Road, Near Friendship Hotel"
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      {...register("city")}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                      placeholder="New York"
                    />
                    {errors.city && (
                      <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Region / State *
                    </label>
                    <input
                      {...register("state")}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                      placeholder="Addis Ababa"
                    />
                    {errors.state && (
                      <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Postal Code *
                    </label>
                    <input
                      {...register("zipCode")}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                      placeholder="1000"
                    />
                    {errors.zipCode && (
                      <p className="text-red-500 text-sm mt-1">{errors.zipCode.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Country *
                  </label>
                  <input
                    {...register("country")}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                    placeholder="Ethiopia"
                  />
                  {errors.country && (
                    <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Payment Method */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-xl flex items-center justify-center">
                  <CreditCard size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-black">Payment Method</h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Choose a local payment method available in Ethiopia.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { value: "card", label: "Credit Card", icon: CreditCard },
                  { value: "telebirr", label: "Telebirr", icon: Phone },
                  { value: "cbeBirr", label: "CBE Birr", icon: ShieldCheck },
                  { value: "cash", label: "Cash on Delivery", icon: Truck },
                ].map((method) => (
                  <label
                    key={method.value}
                    className={cn(
                      "flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all",
                      paymentMethod === method.value
                        ? "border-emerald-500 bg-emerald-50"
                        : "border-gray-200 hover:border-gray-300"
                    )}
                  >
                    <input
                      {...register("paymentMethod")}
                      type="radio"
                      value={method.value}
                      className="sr-only"
                    />
                    <method.icon size={20} className="text-gray-600" />
                    <span className="font-bold">{method.label}</span>
                    {paymentMethod === method.value && (
                      <Check size={16} className="text-emerald-500 ml-auto" />
                    )}
                  </label>
                ))}
              </div>

              {errors.paymentMethod && (
                <p className="text-red-500 text-sm">{errors.paymentMethod.message}</p>
              )}

                {(paymentMethod === "telebirr" || paymentMethod === "cbeBirr" || paymentMethod === "cash") && (
                  <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-gray-700">
                    {paymentMethod === "telebirr" && (
                      <p>
                        Pay with Telebirr using your Ethio Telecom wallet. After placing your order, use your Telebirr app to complete the payment.
                      </p>
                    )}
                    {paymentMethod === "cbeBirr" && (
                      <p>
                        Pay with CBE Birr for a fast local checkout. Use your CBE Birr wallet or USSD to send the payment after order confirmation.
                      </p>
                    )}
                    {paymentMethod === "cash" && (
                      <p>
                        Cash on Delivery lets you pay the delivery rider when your order arrives. No online card details are required.
                      </p>
                    )}
                  </div>
                )}

                {/* Card Details */}
                {paymentMethod === "card" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="space-y-4 pt-4 border-t"
                  >
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Card Number *
                      </label>
                      <input
                        {...register("cardNumber")}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                        placeholder="1234 5678 9012 3456"
                      />
                      {errors.cardNumber && (
                        <p className="text-red-500 text-sm mt-1">{errors.cardNumber.message}</p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Expiry Date *
                        </label>
                        <input
                          {...register("expiryDate")}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                          placeholder="MM/YY"
                        />
                        {errors.expiryDate && (
                          <p className="text-red-500 text-sm mt-1">{errors.expiryDate.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          CVV *
                        </label>
                        <input
                          {...register("cvv")}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                          placeholder="123"
                        />
                        {errors.cvv && (
                          <p className="text-red-500 text-sm mt-1">{errors.cvv.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Cardholder Name *
                        </label>
                        <input
                          {...register("cardName")}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                          placeholder="John Doe"
                        />
                        {errors.cardName && (
                          <p className="text-red-500 text-sm mt-1">{errors.cardName.message}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-3xl shadow-sm sticky top-4"
            >
              <h2 className="text-xl font-black mb-6">Order Summary</h2>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-sm line-clamp-2">{item.name}</h4>
                      <p className="text-xs text-gray-500 mt-1">
                        Qty: {item.quantity} × ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="font-bold text-sm">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>{shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-black text-lg border-t pt-3">
                  <span>Total</span>
                  <span className="text-emerald-500">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-emerald-500 text-white py-4 rounded-2xl font-bold mt-6 hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Place Order
                    <Check size={18} />
                  </>
                )}
              </button>
            </motion.div>
          </div>
        </form>
      </div>
    </div>
  );
};