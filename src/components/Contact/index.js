import {
  Box,
  Button,
  InputBase,
  Paper,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { RiArrowRightLine, RiCloseLine } from "react-icons/ri";

import Section from "../Section";

import { content } from "../../utils/content";
import { NAV_ROUTES } from "../../utils/routes";
import { styles } from "./style";

const Contact = () => {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ message: "", isOpen: false });
  const [showRequired, setShowRequired] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const handleChangeInput = (type) => (event) => {
    setContactDetails({ ...contactDetails, [type]: event.target.value });
    setInvalidEmail(false);
    setShowRequired(false);
  };

  const checkIsEmpty = () => {
    const checker =
      contactDetails.name.trim() === "" ||
      contactDetails.lastName.trim() === "" ||
      contactDetails.email.trim() === "" ||
      contactDetails.message.trim() === ""
        ? true
        : false;
    setShowRequired(checker);
    return checker;
  };

  const validateEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validate = regex.test(String(email).toLowerCase());
    setInvalidEmail(!validate);
    return validate;
  };

  const handleSubmitMessage = async () => {
    const isEmpty = checkIsEmpty();
    const validEmail = validateEmail(contactDetails.email.trim());

    if (validEmail && !isEmpty) {
      setIsLoading(true);
      try {
        // !!! to include official email for recieving message
        const response = { status: 400 };
        // const response = await fetch(
        //   `${process.env.REACT_APP_BACKEND_URL}/messages`,
        //   {
        //     method: "post",
        //     body: JSON.stringify(contactDetails),
        //   }
        // );
        // const message = await response.text();

        if (response.status === 200) {
          setSnackbar({ message: message, isOpen: true });
          resetForm();
        } else {
          setSnackbar({
            message: "Oops... Your message was not sent. Please try again.",
            isOpen: true,
          });
        }
      } catch (e) {
        setSnackbar({
          message: "Oops... Your message was not sent. Please try again.",
          isOpen: true,
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Section
      content={content.contact.content}
      header={content.contact.header}
      id={NAV_ROUTES.get("CONTACT").ID}
    >
      <Box sx={styles.formContainer}>
        <Box sx={styles.formRow}>
          <Paper sx={styles.input}>
            <InputBase
              onChange={handleChangeInput("name")}
              placeholder="Name*"
              sx={styles.inputBase}
            />
          </Paper>

          <Paper sx={styles.input}>
            <InputBase
              onChange={handleChangeInput("lastName")}
              placeholder="Last name*"
              sx={styles.inputBase}
            />
          </Paper>
        </Box>

        <Box sx={styles.formRow}>
          <Paper sx={styles.input}>
            <InputBase
              onChange={handleChangeInput("email")}
              placeholder="Email address*"
              sx={styles.inputBase}
            />
          </Paper>

          <Paper sx={styles.input}>
            <InputBase
              onChange={handleChangeInput("phone")}
              placeholder="Phone number"
              sx={styles.inputBase}
            />
          </Paper>
        </Box>

        <Box sx={styles.formRow}>
          <Paper sx={styles.input}>
            <InputBase
              multiline
              onChange={handleChangeInput("message")}
              placeholder="Your message*"
              rows={8}
              sx={styles.inputBase}
            />
          </Paper>
        </Box>

        <Box sx={styles.margin} />

        <Box sx={styles.errorUnit}>
          {showRequired && (
            <Typography sx={styles.error}>
              {"Please complete all required fields."}
            </Typography>
          )}

          {invalidEmail && (
            <Typography sx={styles.error}>
              {"Please provide a valid email address."}
            </Typography>
          )}
        </Box>

        <Box sx={styles.margin} />

        <Box sx={styles.formRow}>
          <Button
            sx={styles.button}
            color="secondary"
            onClick={handleSubmitMessage}
            variant="contained"
          >
            {isLoading ? (
              "Sending..."
            ) : (
              <>
                <Box sx={styles.grow} />
                {content.contact.action}
                <Box sx={styles.grow} />
                <RiArrowRightLine />
              </>
            )}
          </Button>
        </Box>
      </Box>

      {/* Snackbar */}
      <Snackbar
        action={
          <Button
            color="inherit"
            sx={{ minWidth: "inherit" }}
            onClick={() => setSnackbar({ ...snackbar, isOpen: false })}
          >
            <RiCloseLine size="1.4em" />
          </Button>
        }
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackbar.isOpen}
        onClose={() => setSnackbar({ ...snackbar, isOpen: false })}
        message={snackbar.message}
        ContentProps={{ sx: styles.snackbar }}
      />
    </Section>
  );
};

export default Contact;
