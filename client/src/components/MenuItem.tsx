import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type MenuItemProps = {
  className?: string;
  to: string;
  icon: IconProp;
  active: boolean;
  handler?: () => void;
  text: string;
};

export const MenuItem = ({
  icon,
  to,
  active,
  text,
  handler,
}: MenuItemProps) => {
  return (
    <>
      <li className=" w-16 h16 z-10">
        <a
          href={to}
          className="pt-5 flex flex-col text-center z-10"
          onClick={handler}
        >
          <FontAwesomeIcon
            icon={icon}
            className={`text-2xl text-navy duration-500  ${
              active ? "-mt-16 text-white" : "text-primary"
            }`}
          />
          <p
            className={`${
              active ? "translate-y-6 duration-700 opacity-100" : "opacity-0 "
            }`}
          >
            {text}
          </p>
        </a>
      </li>
    </>
  );
};
