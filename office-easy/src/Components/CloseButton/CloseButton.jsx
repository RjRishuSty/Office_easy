import CloseIcon from "@mui/icons-material/Close";

const CloseButton = ({setIsOpen}) => {
  return (
    <>
      <CloseIcon
        sx={{ fontSize: "1.5rem", color: "primary.light" }}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
};

export default CloseButton;
