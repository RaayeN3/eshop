import { FC } from "react";
import DashLinkButton from "./DashLinkButton";
import DashMenuButton from "./DashMenuButton";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

type LinkButton = {
  type: "link";
  label: string;
  url: string;
  icon: React.ReactNode;
};

type MenuLink = {
  title: string;
  url: string;
};

type MenuButton = {
  type: "menu";
  label: string;
  menuLinks: MenuLink[];
  icon: React.ReactNode;
};

type ButtonItems = LinkButton | MenuButton;

type Props = {
  title: string;
  items: ButtonItems[];
};

const MenuGroup = ({ title, items }: Props) => {
  return (
    <div className="space-y-2">
      <h2 className="uppercase font-semibold text-sm text-gray-500 py-2 px-4">
        {title}
      </h2>
      <div className=" space-y-2">
        {items.map((item, index) =>
          item.type === "link" ? (
            <DashLinkButton
              key={index}
              label={item.label}
              url={item.url}
              icon={item.icon}
            />
          ) : (
            <DashMenuButton
              key={index}
              label={item.label}
              menuLinks={item.menuLinks}
              icon={item.icon}
            />
          )
        )}
      </div>
    </div>
  );
};

export default MenuGroup;
