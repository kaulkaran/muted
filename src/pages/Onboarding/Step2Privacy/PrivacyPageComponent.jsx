import OnboardingCard from "../../../sections/onboarding/OnboardingCard";
import PrivacyControls from "../../../sections/onboarding/PrivacyControls";

const PrivacyPageComponent = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4">
      <OnboardingCard>
        <PrivacyControls />
      </OnboardingCard>
    </div>
  );
};

export default PrivacyPageComponent;
