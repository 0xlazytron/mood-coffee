import { X } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function PaymentSuccess({
  paymentType = "Net Banking",
  phoneNumber = "+1234567890",
  email = "JimmySmith1996@gmail.com",
  transactionId = "2345678910",
  amount = "$543.02",
  setIsOpenModal
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
    >
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="relative w-full max-w-md bg-white rounded-lg shadow-lg p-6"
      >
        <button
          onClick={() => setIsOpenModal(false)}
          className="absolute right-4 top-4 text-red-500 border border-red-500 rounded-full p-1 hover:text-red-400"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col items-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1,
            }}
            className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4"
          >
            <motion.svg
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-8 h-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </motion.svg>
          </motion.div>
          <h2 className="text-2xl font-semibold text-green-600">
            Successful Payment
          </h2>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600">Payment type</span>
            <span className="font-medium">{paymentType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Phone number</span>
            <span className="font-medium">{phoneNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Email</span>
            <span className="font-medium">{email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Transaction id</span>
            <span className="font-medium">{transactionId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Amount Paid</span>
            <span className="font-medium">{amount}</span>
          </div>
        </div>
            
            <Link to={"/menu"}>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 bg-[#7D6356] text-white rounded-full hover:bg-[#7A654A] transition-colors"
       
        >
          Continue Ordering
        </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
