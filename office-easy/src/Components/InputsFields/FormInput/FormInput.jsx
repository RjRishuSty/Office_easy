import {
  Button,
  Grid,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import Styles from "./FormInput.module.css";
import { contactInfo } from "../../../contactInfo";
import PublishIcon from "@mui/icons-material/Publish";
import SelectInputs from "../SelectInputs/SelectInputs";
import { enqueueSnackbar } from "notistack";

const FormInput = ({ useIn }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    location: "",
    jobTypes: "",
    file: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleValidate = useCallback(() => {
    let requiredFields = [];

    if (useIn === "contact") {
      requiredFields = ["firstname", "lastname", "email", "phone"];
    } else if (useIn === "career") {
      requiredFields = [
        "firstname",
        "lastname",
        "email",
        "phone",
        "location",
        "jobTypes",
        "file",
      ];
    }

    for (const key of requiredFields) {
      if (!formData[key] || formData[key].toString().trim() === "") {
        enqueueSnackbar(`Please fill the ${key} field`, { variant: "error" });
        return false;
      }
    }

    return true;
  }, [formData, useIn]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (handleValidate()) {
        enqueueSnackbar("Form Submitted", { variant: "success" });
      }
    },
    [handleValidate]
  );
  return (
    <Stack component="form" sx={{ width: "100%" }} onSubmit={handleSubmit}>
      <Grid container rowSpacing={2} columnSpacing={5} sx={{ py: 5 }}>
        {contactInfo.map((field, index) => (
          <Grid
            key={index}
            size={{
              xs: 12,
              sm: field.id === "message" || field.id === "file" ? 12 : 6,
              md: field.id === "message" || field.id === "file" ? 12 : 6,
            }}
          >
            {field.type === "textarea" ? (
              useIn === "career" ? (
                ""
              ) : (
                <TextareaAutosize
                  fullWidth
                  id={field.id}
                  aria-label={field.label}
                  minRows={2}
                  placeholder={field.label}
                  className={Styles.textarea}
                  onChange={handleChange}
                />
              )
            ) : field.id === "jobTypes" ? (
              useIn === "contact" ? (
                ""
              ) : (
                <SelectInputs
                  label={field.label}
                  options={field.options}
                  useIn="career"
                  value={formData.jobTypes}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      jobTypes: e.target.value,
                    }))
                  }
                />
              )
            ) : field.id === "file" ? (
              useIn === "contact" ? (
                ""
              ) : (
                <>
                  <Typography gutterBottom sx={{ color: "text.secondary" }}>
                    {field.label}
                  </Typography>
                  <TextField
                    fullWidth
                    id={field.id}
                    type={field.type}
                    variant="outlined"
                    style={{ color: "text.main" }}
                    onChange={handleChange}
                  />
                </>
              )
            ) : field.id === "location" && useIn === "contact" ? (
              ""
            ) : (
              <TextField
                fullWidth
                id={field.id}
                label={field.label}
                type={field.type}
                variant="outlined"
                style={{ color: "text.main" }}
                onChange={handleChange}
              />
            )}
          </Grid>
        ))}
        <Grid
          size={{ xs: 12, md: 12, sm: 12 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            type="submit"
            size="large"
            variant="contained"
            sx={{ color: "#fff", backgroundColor: "text.secondary" }}
            endIcon={<PublishIcon sx={{ color: "text.main" }} />}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default FormInput;
