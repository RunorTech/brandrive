// ToggleSwitch.tsx
import React from 'react';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange(!checked)}
        className="hidden" // Hide the default checkbox
        id="toggle"
      />
      <label
        htmlFor="toggle"
        className={`relative inline-block w-10 h-5 cursor-pointer rounded-full transition-all duration-300 ease-in-out ${checked ? 'bg-black' : 'bg-blue-100'}`}
      >
        <span
          className={`absolute left-0 w-5 h-5 p-[0.15rem] flex justify-center items-center rounded-full shadow transform transition-transform duration-300 ease-in-out ${checked ? 'translate-x-full' : ''}`}
        >
            <span className='bg-blue-600 w-full h-full rounded-full '></span>
        </span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
