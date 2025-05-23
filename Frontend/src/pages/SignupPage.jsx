import SignupForm from "../components/auth/SignupForm";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const SignupPage = () => {
  const handleLogin = async (data) => {
    console.log("Signup Data:", data);
  };
  return (
    <>
      <Header />
      <div className="pt-50 mb-100">
        <div className="max-w-sm mx-auto p-4 bg-white rounded-xl">
          <h1 className="text-2xl text-black font-bold mb-6 text-center">
            Signup
          </h1>
          <SignupForm onSubmit={handleLogin} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignupPage;
