"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import AddProduct from "@/public/icons/add-to-basket.png";
import AvaibleProduct from "@/public/icons/in-stock.png";
import Stadistics from "@/public/icons/stadistics.png";

export default function MainContent() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {/* Agregar Producto */}
      <motion.div
        className="w-full sm:w-64 h-64 bg-white shadow-lg rounded-xl flex flex-col items-center justify-center"
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src={AddProduct}
          alt="Add Product"
          width={124}
          height={124}
          className="mb-4"
          placeholder="blur"
        />
        <h3 className="text-lg font-semibold">AGREGAR PRODUCTO</h3>
      </motion.div>

      {/* Productos Disponibles */}
      <motion.div
        className="w-full sm:w-64 h-64 bg-white shadow-lg rounded-xl flex flex-col items-center justify-center"
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src={AvaibleProduct}
          alt="Available Products"
          width={124}
          height={124}
          className="mb-4"
          placeholder="blur"
        />
        <h3 className="text-lg font-semibold">PRODUCTOS DISPONIBLES</h3>
      </motion.div>

      {/* Estadísticas */}
      <motion.div
        className="w-full sm:w-64 h-64 bg-white shadow-lg rounded-xl flex flex-col items-center justify-center"
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2}}
      >
        <Image
          src={Stadistics}
          alt="Statistics"
          width={124}
          height={124}
          className="mb-4"
          placeholder="blur"
        />
        <h3 className="text-lg font-semibold">ESTADISTICAS</h3>
      </motion.div>
    </div>
  );
}
