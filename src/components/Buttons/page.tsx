"use client"
import React from "react";

const ClickableButtons = ({
  text,
  icon,
  action
}: {
  text: string;
  icon: React.ReactNode;
    action: () => void;
}) => {
  return (
    <button
    onClick={action}
    className="flex items-center gap-3 py-2 px-4 rounded-md border border-secondary-light text-[15px] font-medium hover:bg-secondary-dark/80 text-text-header cursor-pointer">
      {icon}
      <p>{text}</p>
    </button>
  );
};

export default ClickableButtons;
