import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Box, Chip } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Cards = ({ item }) => {
  const [showFull, setShowFull] = useState(false);
  return (
    <Card sx={{ width: "100%", height: "auto", padding: "0px 0px 1rem 0px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={item.img}
          alt="Commercial Property Space"
          sx={{
            objectFit: "cover",
            objectPosition: "center",
            filter: "brightness(85%)",
            transition: "transform 0.4s ease-in-out, filter 0.3s ease-in-out",
            transform: "scale(1)",
            "&:hover": {
              filter: "brightness(150%)",
              transform: "scale(1.05)",
            },
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            sx={{ fontSize: "1.2rem", fontWeight: 600, color: "text.main" }}
          >
            {item.title.length > 30
              ? `${item.title.slice(0, 30)}...`
              : item.title}
          </Typography>
          <Typography
            variant="caption"
            sx={{ letterSpacing: 0.4, fontWeight: 700 }}
          >
            {item.location}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="caption"
              sx={{ letterSpacing: 0.4, fontWeight: 500, mr: 1.5 }}
            >
              <span style={{ fontSize: "0.9rem", color: "text.main" }}>
                Area:-
              </span>{" "}
              {item.areaSqFt}
              <span style={{ fontSize: "0.5rem" }}>sq.ft</span>
            </Typography>
            <Typography
              variant="caption"
              sx={{ letterSpacing: 0.4, fontWeight: 500, mr: 1.5 }}
            >
              <span style={{ fontSize: "0.9rem", color: "text.main" }}>
                Rent:-
              </span>{" "}
              {item.rent}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 1,
              mb: 1,
            }}
          >
            {item.features.map((feature) => (
              <Chip
                label={feature}
                color="#fff"
                variant="filled"
                sx={{
                  color: "#fff",
                  fontSize: "0.7rem",
                  backgroundColor: "text.secondary",
                }}
              />
            ))}
          </Box>

          <Typography
            gutterBottom
            sx={{
              fontSize: "0.9rem",
              color: "text.light",
              "&:hover": { color: "text.main" },
            }}
          >
            {item.description.length > 70 ? (
              <Box component="span">
                {showFull
                  ? item.description
                  : `${item.description.slice(0, 70)}...`}
                <Button
                  variant="text"
                  size="small"
                  onClick={() => setShowFull(!showFull)}
                  sx={{
                    fontSize: "0.8rem",
                    textTransform: "none",
                    color: "text.light",
                    ml: 1,
                    "&:hover": {
                      color: "text.secondary",
                    },
                  }}
                >
                  {showFull ? "Show less" : "Read more"}
                </Button>
              </Box>
            ) : (
              item.description
            )}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <NavLink component="a" to={`tel:${item.contact.phone}`}>
          <Button
            size="small"
            variant="contained"
            sx={{ backgroundColor: "text.primary", color: "#fff" }}
            startIcon={<LocalPhoneIcon sx={{ color: "#fff" }} />}
          >
            {" "}
            Call Now
          </Button>
        </NavLink>
        <Link to="/contact">
          <Button
            size="small"
            variant="contained"
            sx={{ backgroundColor: "text.primary", color: "#fff" }}
            endIcon={<ContactSupportIcon sx={{ color: "#fff" }} />}
          >
            {item.contact.cta}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
export default Cards;
