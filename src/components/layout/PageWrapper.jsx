import { useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const PageWrapper = ({ children }) => {
  const { pathname } = useLocation();

  const isAuth =
    pathname.startsWith("/login") || pathname.startsWith("/register");
  const isOnboarding = pathname.startsWith("/onboarding");
  const isApp =
    pathname.startsWith("/chat") || pathname.startsWith("/settings");

  return (
    <>
      {/* NAVBAR */}
      {!isApp && <Navbar />}

      <main>{children}</main>

      {/* FOOTER */}
      {!isApp && (
        <Footer variant={isAuth || isOnboarding ? "minimal" : "public"} />
      )}
    </>
  );
};

export default PageWrapper;
