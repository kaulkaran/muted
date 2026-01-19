import OnboardingCard from "../../../sections/onboarding/OnboardingCard";
import InviteForm from "../../../sections/onboarding/InviteForm";

const InvitePageComponent = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4">
      <OnboardingCard>
        <InviteForm />
      </OnboardingCard>
    </div>
  );
};

export default InvitePageComponent;
