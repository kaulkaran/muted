import { useLocation } from "react-router-dom";

const steps = ["/onboarding/name", "/onboarding/privacy", "/onboarding/invite"];

const OnboardingNavbar = () => {
  const { pathname } = useLocation();
  const stepIndex = steps.indexOf(pathname) + 1;

  return (
    <header className="h-20 px-8 flex items-center justify-between max-w-7xl mx-auto">
      <div className="font-bold text-[rgb(var(--primary))]">Muted</div>

      <div className="flex items-center gap-3">
        <span className="text-xs uppercase tracking-widest text-gray-400">
          Step {stepIndex} of 3
        </span>
        <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[rgb(var(--primary))] transition-all"
            style={{ width: `${(stepIndex / 3) * 100}%` }}
          />
        </div>
      </div>
    </header>
  );
};

export default OnboardingNavbar;
