// import ReactSt from 'react'
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SocalMediaIcons = ({ useIn }) => {
  return (
    <>
      <FacebookOutlinedIcon
        sx={{
          mr: 5,
          cursor: "pointer",
          color: "#ffc307",
          "&:hover":{
            color:'#2b5aac',
          }
        }}
      />
      <InstagramIcon
        sx={{
          mr: 5,
          cursor: "pointer",
          color: "#ffc307",
          "&:hover":{
            color:'#2b5aac',
          }
        }}
      />
      <LinkedInIcon
        sx={{
          mr: 5,
          cursor: "pointer",
          color: "#ffc307",
          "&:hover":{
            color:'#2b5aac',
          }
        }}
      />
      <XIcon
        sx={{
          mr: 5,
          cursor: "pointer",
          color: "#ffc307",
          "&:hover":{
            color:'#2b5aac',
          }
        }}
      />
      <YouTubeIcon
        sx={{
          // mr: 5,
          cursor: "pointer",
          color: "#ffc307",
          "&:hover":{
            color:'#2b5aac',
          }
        }}
      />
    </>
  );
};

export default SocalMediaIcons;
