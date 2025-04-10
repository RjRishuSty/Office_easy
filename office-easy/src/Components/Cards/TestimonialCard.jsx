import {
  Box,
  Card,
  CardContent,
  Chip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import UserRating from "../UserRating/UserRating";

const TestimonialCard = ({ item }) => {
  const minTab = useMediaQuery("(max-width:1163px)");
  return (
    <Card
      sx={{
        width: "100%",
        overflow: "hidden",
        transition:
          "transform 0.3s ease, filter 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          filter: "brightness(90%)",
          boxShadow: "0px 0px 7px #000",
          transform: "scale(1.05)",
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          {React.cloneElement(item.icon, {
            sx: {
              fontSize: minTab ? "3.5rem" : "6rem",
              color: "text.secondary",
              mr: 0.5,
            },
          })}
          {minTab ? (
            <Box
              sx={{
                mt: 1,
                width: "100%",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  color: "text.primary",
                  fontWeight: 700,
                }}
              >
                {minTab
                  ? item.name.length > 8
                    ? item.name.slice(0, 7)
                    : item.name
                  : item.name}
              </Typography>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  mt: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    color: "text.primary",
                    fontWeight: 700,
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  mt: 0.8,
                }}
              >
                <Chip
                  label={item.location}
                  variant="filled"
                  sx={{
                    color: "#fff",
                    fontSize: "0.9rem",
                    mr: 1,
                    backgroundColor: "primary.light",
                  }}
                />
                <UserRating rating={item.rating} />
              </Box>
            </Box>
          )}
        </Box>
        {minTab ? (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              mt: 1,
              mb: 1,
            }}
          >
            <Chip
              label={item.location}
              variant="filled"
              sx={{
                color: "#fff",
                fontSize: "0.9rem",
                mr: 1,
                backgroundColor: "primary.light",
              }}
            />
            <UserRating rating={item.rating} />
          </Box>
        ) : (
          ""
        )}
        <Typography
          gutterBottom
          sx={{
            fontSize: "1rem",
            textAlign: "start",
            color: "text.light",
          }}
        >
          {item.feedback}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
