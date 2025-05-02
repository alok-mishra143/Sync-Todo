import AuthForm from "@/components/shared/AuthForm";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <AuthForm type="login" />
    </div>
  );
};

export default Login;
