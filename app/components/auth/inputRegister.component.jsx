"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

const InputsRegisterComponent = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Aquí puedes manejar los datos del formulario, como enviarlos a una API
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          placeholder="jose@gmail.com"
          className={`mt-1 block text-gray-700 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
          {...register("email", {
            required: "El correo es obligatorio",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Formato de correo inválido"
            }
          })}
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
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          placeholder="*****"
          className={`mt-1 text-gray-700 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
          {...register("password", {
            required: "La contraseña es obligatoria",
            minLength: {
              value: 6,
              message: "La contraseña debe tener al menos 6 caracteres"
            }
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">
            {errors.password.message}
          </p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          placeholder="Carlos"
          className={`mt-1 text-gray-700 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
          {...register("nombre", {
            required: "El nombre es obligatorio"
          })}
        />
        {errors.nombre && (
          <p className="text-red-500 text-sm mt-1">
            {errors.nombre.message}
          </p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">
          Apellido
        </label>
        <input
          type="text"
          id="apellido"
          placeholder="Rodriguez"
          className={`mt-1 text-gray-700 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
          {...register("apellido", {
            required: "El apellido es obligatorio"
          })}
        />
        {errors.apellido && (
          <p className="text-red-500 text-sm mt-1">
            {errors.apellido.message}
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
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-default-color-btn hover:bg-hover-color-btn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Registrarse
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex items-center text-center align-center"
      >
        <p className='text-gray-700'>
          ¿Tienes una cuenta? <a href="/" className="font-semibold text-color-text hover:text-hover-color-btn">Entra aquí</a>
        </p>
      </motion.div>
    </form>
  );
};

export default InputsRegisterComponent;
