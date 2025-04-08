// import ReactSt from 'react'
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocalMediaIcons = () => {
  return (
    <>
      <FacebookOutlinedIcon
        sx={{ mr: 5, cursor: "pointer", color: "#2b5aac" }}
        onMouseEnter={(e) => (e.target.style.color = "#ffc307")}
        onMouseLeave={(e) => (e.target.style.color = "#2b5aac")}
      />
      <InstagramIcon
        sx={{ mr: 5, cursor: "pointer", color: "#2b5aac" }}
        onMouseEnter={(e) => (e.target.style.color = "#ffc307")}
        onMouseLeave={(e) => (e.target.style.color = "#2b5aac")}
      />
      <LinkedInIcon
        sx={{ mr: 5, cursor: "pointer", color: "#2b5aac" }}
        onMouseEnter={(e) => (e.target.style.color = "#ffc307")}
        onMouseLeave={(e) => (e.target.style.color = "#2b5aac")}
      />
      <XIcon
        sx={{ mr: 5, cursor: "pointer", color: "#2b5aac" }}
        onMouseEnter={(e) => (e.target.style.color = "#ffc307")}
        onMouseLeave={(e) => (e.target.style.color = "#2b5aac")}
      />
      <YouTubeIcon
        sx={{ mr: 5, cursor: "pointer", color: "#2b5aac" }}
        onMouseEnter={(e) => (e.target.style.color = "#ffc307")}
        onMouseLeave={(e) => (e.target.style.color = "#2b5aac")}
      />
    </>
  );
};

export default SocalMediaIcons;
