import AuthForm from "@/components/shared/AuthForm";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <AuthForm type="signup" />
    </div>
  );
};

export default Signup;
