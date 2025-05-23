import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../validation/auth/loginSchema";
import { Link } from "react-router-dom";

const LoginForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(loginSchema) });

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
        {/* Email & Errors */}
        <div>
          <label
            htmlFor="email"
            className="block text-xl font-medium text-black"
          >
            Email:
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="mt-1 block w-[250px] text-white rounded-md border-gray-300 shadow-sm focus:ring focus:ring-opacity-50"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password & Errors */}
        <div>
          <label
            htmlFor="password"
            className="block text-xm font-medium text-black"
          >
            Password:
          </label>
          <input
            id="password"
            type="password"
            {...register("password")}
            className="mt-1 block w-[250px] text-black rounded-md border-gray-300 shadow-sm focus:ring focus:ring-opacity-50"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Button Login & Signup */}
        <div className="flex items-center justify-center gap-10 mt-10">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
          <Link
            to={"/Signup"}
            className="bg-blue-500 py-2 px-4 rounded-md text-white   "
          >
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
