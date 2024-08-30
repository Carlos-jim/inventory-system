import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

export default function FormRegisterProduct() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Aquí puedes manejar el envío de datos
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <motion.h1
        className="text-2xl font-bold text-start mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Agregar nuevo producto
      </motion.h1>
      <motion.p
        className="text-center text-gray-500 mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Completa los siguientes campos para registrar un producto
      </motion.p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre del producto
            </label>
            <motion.input
              {...register("nombre")}
              type="text"
              className="mt-1 block w-full border rounded-md shadow-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileFocus={{ scale: 1.02, borderColor: "#319795" }} // Animación al enfocar
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Categoría
            </label>
            <motion.input
              {...register("categoria")}
              type="text"
              className="mt-1 block w-full border rounded-md shadow-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileFocus={{ scale: 1.02, borderColor: "#319795" }}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Descripción
          </label>
          <motion.textarea
            {...register("descripcion")}
            className="mt-1 block w-full border rounded-md shadow-sm"
            rows="4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileFocus={{ scale: 1.02, borderColor: "#319795" }}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Precio
            </label>
            <motion.input
              {...register("precio")}
              type="number"
              className="mt-1 block w-full border rounded-md shadow-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileFocus={{ scale: 1.02, borderColor: "#319795" }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Cantidad de stock
            </label>
            <motion.input
              {...register("stock")}
              type="number"
              className="mt-1 block w-full border rounded-md shadow-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileFocus={{ scale: 1.02, borderColor: "#319795" }}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Limpiar
          </button>
          <motion.button
            type="submit"
            className="inline-flex items-center ml-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Guardar
          </motion.button>
        </div>
      </form>
    </div>
  );
}
