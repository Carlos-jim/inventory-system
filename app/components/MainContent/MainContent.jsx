"use client"
import { motion } from "framer-motion";
import Image from "next/image";

export default function MainContent() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {/* Agregar Producto */}
      <motion.div
        className="w-full sm:w-64 h-64 bg-white shadow-lg rounded-xl flex flex-col items-center justify-center"
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image src="/icons/add-to-basket.png" alt="Add Product" width={124} height={124} className="mb-4" />
        <h3 className="text-lg font-semibold">AGREGAR PRODUCTO</h3>
      </motion.div>

      {/* Productos Disponibles */}
      <motion.div
        className="w-full sm:w-64 h-64 bg-white shadow-lg rounded-xl flex flex-col items-center justify-center"
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Image src="/icons/in-stock.png" alt="Available Products" width={124} height={124} className="mb-4" />
        <h3 className="text-lg font-semibold">PRODUCTOS DISPONIBLES</h3>
      </motion.div>

      {/* Estadísticas */}
      <motion.div
        className="w-full sm:w-64 h-64 bg-white shadow-lg rounded-xl flex flex-col items-center justify-center"
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <Image src="/icons/work-plan.png" alt="Statistics" width={124} height={124} className="mb-4" />
        <h3 className="text-lg font-semibold">ESTADISTICAS</h3>
      </motion.div>
    </div>
  );
}
