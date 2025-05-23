import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import signupSchema from "../../validation/auth/signupSchema";
import { Link } from "react-router-dom";

const SignupForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
        {/* name & Errors */}
        <div>
          <label
            htmlFor="name"
            type="text"
            className="block text-xl font-medium text-black"
          >
            Name:
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className="mt-1 block w-[250px] text-black rounded-md border-gray-300 shadow-sm focus:ring focus:ring-opacity-50"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
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
            className="mt-1 block w-[250px] text-black rounded-md border-gray-300 shadow-sm focus:ring focus:ring-opacity-50"
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

        {/* ConfirmPassword & Errors */}
        <div>
          <label
            htmlFor="confirmPassworrd"
            className="block text-xm font-medium text-black"
          >
            Confirm Password:
          </label>
          <input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword")}
            className="mt-1 block w-[250px] text-black rounded-md border-gray-300 shadow-sm focus:ring focus:ring-opacity-50"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Button Login & Signup */}
        <div className="flex items-center justify-center gap-10 mt-10">
          <Link
            to={"/Login"}
            className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
          >
            Login
          </Link>
          <button
            className="bg-blue-500 py-2 px-4 rounded-md text-white"
            type="submit"
            disabled={isSubmitting}
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
