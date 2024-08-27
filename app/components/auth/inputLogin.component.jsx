"use client";
import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const InputsLoginComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Aquí puedes manejar los datos del formulario, enviarlos a una API, etc.
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "El correo es obligatorio",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Formato de correo inválido",
            },
          })}
          placeholder="jose@gmail.com"
          className={`mt-1 block w-full text-gray-700 px-4 py-2 border rounded-md shadow-sm focus:ring-outline-color focus:border-outline-color`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">
            {errors.email.message}
          </p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: "La contraseña es obligatoria",
            minLength: {
              value: 6,
              message: "La contraseña debe tener al menos 6 caracteres",
            },
          })}
          placeholder="*****"
          className={`mt-1 block w-full text-gray-700 px-4 py-2 border rounded-md shadow-sm focus:ring-outline-color focus:border-outline-color`}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">
            {errors.password.message}
          </p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-default-color-btn hover:bg-hover-color-btn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-outline-color"
        >
          Iniciar sesión
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex items-center text-center"
      >
        <p className="text-gray-700">
          ¿No estás registrado?{" "}
          <a
            href="/auth/register"
            className="font-semibold text-text-color hover:text-hover-color-text"
          >
            Regístrate aquí
          </a>
        </p>
      </motion.div>
    </form>
  );
};

export default InputsLoginComponent;
