import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X, AlertCircle, Info } from "lucide-react";
import { cn } from "../../lib/utils";

export const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  // Add toast function
  const addToast = (message, type = "success") => {
    const id = Math.random().toString(36).substring(2, 9);

    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  // expose globally (simple approach)
  useEffect(() => {
    window.showToast = addToast;
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case "success":
        return <CheckCircle size={22} />;
      case "error":
        return <AlertCircle size={22} />;
      case "info":
        return <Info size={22} />;
      default:
        return <CheckCircle size={22} />;
    }
  };

  const getStyle = (type) => {
    switch (type) {
      case "success":
        return "bg-slate-900 text-white border-slate-800";
      case "error":
        return "bg-red-600 text-white border-red-700";
      case "info":
        return "bg-blue-600 text-white border-blue-700";
      default:
        return "bg-slate-900 text-white";
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] flex flex-col gap-3">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={cn(
              "flex items-center gap-3 px-5 py-3 rounded-2xl shadow-xl border min-w-[280px]",
              getStyle(toast.type)
            )}
          >
            <div className="shrink-0">{getIcon(toast.type)}</div>

            <p className="text-sm font-semibold flex-1">
              {toast.message}
            </p>

            <button
              onClick={() =>
                setToasts((prev) =>
                  prev.filter((t) => t.id !== toast.id)
                )
              }
              className="opacity-70 hover:opacity-100 transition"
            >
              <X size={18} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};