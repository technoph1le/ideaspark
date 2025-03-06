import React from "react";

interface ToggleSwitchProps {
  isSingleMode: boolean;
  setSingleMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  isSingleMode,
  setSingleMode,
}) => {
  const handleClick = () => {
    setSingleMode((prev) => !prev);
  };

  return (
    <div className="toggle-switch-container">
      <button
        className="toggle-switch"
        data-mode={`${isSingleMode ? "single" : "combo"}`}
        onClick={handleClick}
        title="Press 'left/right arrows' to switch modes"
      >
        <span className="toggle-switch__circle"></span>
      </button>
      <p className="toggle-switch__result">
        {isSingleMode ? "single mode" : "combo mode"}
      </p>
    </div>
  );
};

export default ToggleSwitch;
