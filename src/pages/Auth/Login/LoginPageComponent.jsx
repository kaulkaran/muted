import AuthCard from "../../../sections/auth/AuthCard";
import LoginForm from "../../../sections/auth/LoginForm";

const LoginPageComponent = () => {
  return (
    // Added 'pt-32' to clear the fixed Navbar
    // Added background color variables so the page matches the theme
    <main 
      className="
        min-h-screen w-full
        flex flex-col items-center justify-center 
        px-4 py-12 
        bg-[rgb(var(--bg-light))] 
      "
    >
      <AuthCard>
        <LoginForm />
      </AuthCard>
      
    </main>
  );
};

export default LoginPageComponent;