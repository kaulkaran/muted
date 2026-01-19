const OnboardingCard = ({ children }) => {
  return (
    <div className="w-full max-w-md bg-white rounded-xl p-8 shadow-sm border border-black/5 dark:border-white/5">
      {children}
    </div>
  );
};

export default OnboardingCard;
