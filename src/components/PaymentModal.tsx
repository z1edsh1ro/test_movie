import {  AnimatePresence } from "framer-motion";
import { X, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
  timeLeft: number;
}

const PaymentModal = ({ isOpen, onClose, total, timeLeft }: PaymentModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80"
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-lg bg-background p-6 rounded-lg shadow-lg mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Payment</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-yellow-800">
                  <AlertCircle className="h-5 w-5" />
                  <p className="font-medium">Important: Payment Deadline</p>
                </div>
                <p className="mt-2 text-yellow-700">
                  Please complete your payment within {timeLeft} seconds.
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-medium">Bank Account Details:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Bank: Skuberg Bank</p>
                  <p>Account Number: 1234-xxxx-xxxx-5678</p>
                  <p>Account Name: The movie</p>
                  <p className="font-medium mt-2">Amount: ${total.toFixed(2)}</p>
                </div>
              </div>

              {timeLeft === 0 && (
                <div className="text-red-500 text-center">
                  Time's up! Please try again.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PaymentModal; 