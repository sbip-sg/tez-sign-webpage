import {
  Box,
  Button,
  InputBase,
  Paper,
  Slide,
  Typography,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import React, { useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";

import Section from "../Section";

import background from "../../assets/background/background_4.png";
import { useInView } from "../../hooks/useInView";
import { content } from "../../utils/content";
import { NAV_ROUTES } from "../../utils/routes";
import { styles } from "./style";

const INIT_DETAILS = {
  name: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
  website: "Tez Sign Contact Form",
};

const Contact = ({ setSnackbar }) => {
  const [contactDetails, setContactDetails] = useState(INIT_DETAILS);
  const [isLoading, setIsLoading] = useState(false);

  const [showRequired, setShowRequired] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const [setRef, visible] = useInView({
    threshold: 0.1,
  });

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

  const handleSubmitMessage = async (event) => {
    event.preventDefault();
    const isEmpty = checkIsEmpty();
    const validEmail = validateEmail(contactDetails.email.trim());

    console.log(contactDetails);

    if (validEmail && !isEmpty) {
      setIsLoading(true);
      try {
        const response = await emailjs.send(
          process.env.EMAIL_SERVICE_ID,
          process.env.EMAIL_TEMPLATE_ID,
          contactDetails,
          process.env.EMAIL_PUBLIC_KEY
        );

        setContactDetails(INIT_DETAILS);
        setSnackbar({
          message: "Thanks for your feedback. We will reply to you shortly.",
          isOpen: true,
        });
      } catch (err) {
        console.error(err);
        if (err) {
          setSnackbar({
            message: "Oops... Your message was not sent. Please try again.",
            isOpen: true,
          });
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Box ref={setRef} sx={styles.contactContainer}>
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
                value={contactDetails.name}
              />
            </Paper>

            <Paper sx={styles.input}>
              <InputBase
                onChange={handleChangeInput("lastName")}
                placeholder="Last name*"
                sx={styles.inputBase}
                value={contactDetails.lastName}
              />
            </Paper>
          </Box>

          <Box sx={styles.formRow}>
            <Paper sx={styles.input}>
              <InputBase
                onChange={handleChangeInput("email")}
                placeholder="Email address*"
                sx={styles.inputBase}
                value={contactDetails.email}
              />
            </Paper>

            <Paper sx={styles.input}>
              <InputBase
                onChange={handleChangeInput("phone")}
                placeholder="Phone number"
                sx={styles.inputBase}
                value={contactDetails.phone}
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
                value={contactDetails.message}
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
      </Section>

      <Slide direction="left" in={visible} timeout={800}>
        <Box sx={styles.contactBackground}>
          <Image src={background} alt={"background_image"} />
        </Box>
      </Slide>
    </Box>
  );
};

export default Contact;
