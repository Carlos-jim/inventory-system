"use client"
import { FaHome } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function TopNav() {
    return (
      <motion.div
       className="flex items-center justify-between p-4"
       initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
       >
        <button className="text-white items-center flex bg-teal-500 rounded-md px-4 py-2"> <FaHome className="mr-2 w-6 h-5" />HOME</button>
      </motion.div>
    );
  }
  