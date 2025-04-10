import {
    Menu,
    MenuItem,
    Typography,
    useMediaQuery,
    Collapse,
    Box,
  } from "@mui/material";
  import React, { useState } from "react";
  import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
  import { NavLink, useNavigate } from "react-router-dom";
  
  const DropDownMenu = ({ item, useIn, setIsOpen }) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [dropdownOpenId, setDropdownOpenId] = useState(null);
    const [expandedSubItemId, setExpandedSubItemId] = useState(null);
  
    const miniLaptop = useMediaQuery("(max-width:1276px)");
    const isMobile = useMediaQuery("(max-width:900px)");
    const navigate = useNavigate();
  
    const handleToggle = (event, id) => {
      if (dropdownOpenId === id) {
        setDropdownOpenId(null);
        setAnchorEl(null);
        setExpandedSubItemId(null);
      } else {
        setDropdownOpenId(id);
        setAnchorEl(event.currentTarget);
      }
    };
  
    const handleClose = () => {
      setDropdownOpenId(null);
      setAnchorEl(null);
      setExpandedSubItemId(null);
    };
  
    const handleSubItemClick = (subItem) => {
      if (subItem.facility) {
        setExpandedSubItemId(
          expandedSubItemId === subItem.id ? null : subItem.id
        );
      } else {
        handleClose();
        if (setIsOpen) setIsOpen(false);
        if (subItem.path) {
          navigate(subItem.path);
        }
      }
    };
  
    return (
      <>
        <MenuItem
          sx={{
            padding: 0,
            borderRadius: 1,
            mx: 0.5,
            background: "none",
            "&:hover": { backgroundColor: "transparent" },
          }}
          onClick={item.section ? (e) => handleToggle(e, item.id) : undefined}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              padding: isMobile ? 0 : 1,
              mb:
                isMobile || useIn === "footer" || useIn === "sidebar"
                  ? 0.7
                  : 0,
              gap: 0.5,
              color:
                useIn === "footer"
                  ? "#fff"
                  : dropdownOpenId === item.id
                  ? "text.secondary"
                  : "text.primary",
              fontWeight: 500,
              fontSize: miniLaptop ? 14 : 17,
              cursor: "pointer",
              textTransform: "capitalize",
              "&:hover": {
                color: "text.secondary",
              },
            }}
          >
            {item.name}
            <ArrowDropDownIcon
              fontSize="small"
              sx={{
                transform:
                  dropdownOpenId === item.id ? "rotate(180deg)" : "rotate(0deg)",
                transition: "0.3s",
              }}
            />
          </Typography>
  
          {/* Main Dropdown */}
          <Menu
            id={`${item.id}-menu`}
            anchorEl={anchorEl}
            open={dropdownOpenId === item.id}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          >
            {item.section?.map((subItem) => (
              <Box key={subItem.id}>
                <MenuItem
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSubItemClick(subItem);
                  }}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    minWidth: 180,
                  }}
                >
                  <Typography>{subItem.name}</Typography>
                  {subItem.facility && (
                    <ArrowDropDownIcon
                      sx={{
                        transform:
                          expandedSubItemId === subItem.id
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "0.3s",
                      }}
                    />
                  )}
                </MenuItem>
  
                {/* Nested Facility Items */}
                {subItem.facility && (
                  <Collapse
                    in={expandedSubItemId === subItem.id}
                    timeout="auto"
                    unmountOnExit
                  >
                    {subItem.facility.map((facilityItem) => (
                      <MenuItem
                        key={facilityItem.id}
                        component={NavLink}
                        to={facilityItem.path}
                        sx={{ pl: 4,color:'text.main',fontSize:'0.9rem' }}
                        onClick={() => {
                          handleClose();
                          if (setIsOpen) setIsOpen(false);
                        }}
                      >
                        {facilityItem.name}
                      </MenuItem>
                    ))}
                  </Collapse>
                )}
              </Box>
            ))}
          </Menu>
        </MenuItem>
      </>
    );
  };
  
  export default DropDownMenu;
  