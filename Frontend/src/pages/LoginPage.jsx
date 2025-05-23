import LoginForm from "../components/auth/LoginForm";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const LoginPage = () => {
  const handleLogin = async (data) => {
    console.log("Login data:", data);
    // Call API here
  };
  return (
    <>
      <Header />
      <div className="pt-50 mb-100">
        <div className="max-w-sm mx-auto p-4 bg-white rounded-xl">
          <h1 className="text-2xl text-black font-bold mb-6 text-center">
            Login
          </h1>
          <LoginForm onSubmit={handleLogin} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
