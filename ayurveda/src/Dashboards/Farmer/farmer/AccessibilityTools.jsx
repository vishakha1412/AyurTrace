import React, { useState } from 'react';

export default function AccessibilityTools() {
  const [highContrast, setHighContrast] = useState(false);
  const toggleContrast = () => {
    setHighContrast(!highContrast);
    document.body.classList.toggle('contrast-mode');
  };

  return (
    <div className="p-4 text-sm text-green-700 flex gap-4 items-center">
      <span className="font-medium">🧩 Accessibility:</span>
      <button onClick={toggleContrast} className="hover:underline">
        {highContrast ? 'Disable High Contrast' : 'Enable High Contrast'}
      </button>
      {/* Future: Add text-to-speech or voice input */}
    </div>
  );
}
