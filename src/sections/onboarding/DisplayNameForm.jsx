import React, { useState } from "react";
import ProgressHeader from "./ProgressHeader";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateDisplayName } from "../../app/user/userThunks";

const DisplayNameForm = ({ step, totalSteps }) => {
  const [displayName, setDisplayName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!displayName.trim()) return;
    dispatch(updateDisplayName(displayName, navigate));
  };

  return (
    <div className="w-full bg-white rounded-[2.5rem] border border-black/5 overflow-hidden">
      <div className="p-10 md:p-12">

        <ProgressHeader step={step} totalSteps={totalSteps} />

        <div className="mt-8 mb-10">
          <h1 className="text-3xl font-bold">What should we call you?</h1>
        </div>

        <div className="space-y-8">
          <input
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="e.g. Julian"
            className="w-full px-6 h-16 rounded-2xl bg-[#f8f7f7]"
          />

          <button
            onClick={handleContinue}
            className="w-full h-16 bg-[rgb(var(--primary))] text-white rounded-2xl font-bold"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayNameForm;
