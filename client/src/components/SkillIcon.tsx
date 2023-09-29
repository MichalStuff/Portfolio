import React from "react";

const SkillIcon = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="flex flex-col justify-center p-4">
      <div className="w-full h-full">{icon}</div>
      <h2 className="text-primary">{title}</h2>
    </div>
  );
};

export default SkillIcon;
