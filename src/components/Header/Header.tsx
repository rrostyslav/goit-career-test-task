import { Icon } from "@/components/Icon";
import { Link, NavLink } from "react-router";
import { Typography } from "@/components/Typography";

const navigation: {
  to: string;
  label: string;
}[] = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/catalog",
    label: "Catalog",
  },
];

export const Header = () => {
  return (
    <div>
      <div className="flex justify-center items-center mx-16 relative h-18">
        <Link to="/" className="absolute left-0">
          <Icon name="logo" />
        </Link>
        <div className="flex gap-x-8">
          {navigation.map((navItem) => (
            <NavLink
              to={navItem.to}
              className={(props) => (props.isActive ? "text-button-hover" : "")}
            >
              <Typography name="body2" color="inherit">
                {navItem.label}
              </Typography>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
