import React from "react";
import { socialMediaIcons } from "../../socialMediaIcons";
import { Link } from "react-router-dom";

const SocalMediaIcons = ({ useIn }) => {
  return (
    <>
      {socialMediaIcons.map((item) => {
        if (item.id === "phone") return null;

        return (
          <Link key={item.id} to={item.url}>
            {React.cloneElement(item.icon, {
              sx: {
                mr: useIn === "xsHeader" ? 0 : 5,
                cursor: "pointer",
                color: "#ffc307",
                padding: useIn === "header" || useIn === "xsHeader" ? 0.3 : 0,
                pb: useIn === "xsHeader" ? 0.2 : 0,
                "&:hover": {
                  color: "#fff",
                },
              },
            })}
          </Link>
        );
      })}
    </>
  );
};

export default SocalMediaIcons;
