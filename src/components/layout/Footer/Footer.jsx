import PublicFooter from "./PublicFooter";
import MinimalFooter from "./MinimalFooter";

const Footer = ({ variant }) => {
  if (variant === "minimal") return <MinimalFooter />;
  return <PublicFooter />;
};

export default Footer;
