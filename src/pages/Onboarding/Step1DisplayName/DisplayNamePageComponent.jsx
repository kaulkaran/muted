import OnboardingCard from "../../../sections/onboarding/OnboardingCard";
import DisplayNameForm from "../../../sections/onboarding/DisplayNameForm";

const DisplayNamePageComponent = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4">
      <OnboardingCard>
        <DisplayNameForm />
      </OnboardingCard>
    </div>
  );
};

export default DisplayNamePageComponent;
