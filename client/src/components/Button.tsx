import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: React.ReactNode;
  icon?: IconProp;
  className?: string;
};

export const Button = ({ children, icon, className }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "bg-primary text-white text-center px-8 py-3",
        className
      )}
    >
      {children && <p>{children}</p>}
      {icon && <FontAwesomeIcon icon={icon} />}
    </button>
  );
};
