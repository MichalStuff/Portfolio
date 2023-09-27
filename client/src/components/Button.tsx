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
        "flex justify-around items-center bg-primary text-white text-md text-center gap-3 px-8 py-3 m-2  rounded-md",
        className
      )}
    >
      {children && <p>{children}</p>}
      {icon && <FontAwesomeIcon icon={icon} />}
    </button>
  );
};
