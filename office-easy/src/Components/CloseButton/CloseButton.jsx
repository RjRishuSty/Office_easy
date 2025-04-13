import CloseIcon from "@mui/icons-material/Close";

const CloseButton = ({ setIsOpen }) => {
  return (
    <>
      <CloseIcon
        sx={{
          fontSize: "2rem",
          color: "text.secondary",
          backgroundColor: "primary.light",
          borderRadius: "100%",
          p: 1,
          "&:hover":{
            color: "primary.light",
            backgroundColor: "text.secondary",
            boxShadow:'0px 0px 5px #ffa229'
          }
        }}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
};

export default CloseButton;
