import AuthCard from "../../../sections/auth/AuthCard";
import RegisterForm from "../../../sections/auth/RegisterForm";

const RegisterPageComponent = () => {
  return (
    <main className="min-h-screen flex flex-col auth-font">
      
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <AuthCard>
          <RegisterForm />
        </AuthCard>
      </div>
      
    </main>
  );
};

export default RegisterPageComponent;
