import { ClassNames } from "@emotion/react";
import {
  Box,
  Button,
  createStyles,
  Text,
  Input,
  TextInput,
  Textarea,
} from "@mantine/core";
import { FC } from "react";
import IFrame from "react-iframe";
//import { ContactMap} from "./ContactMap"

const useStyles = createStyles((theme) => ({
  wrapper: {},
  map: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "18px",
    color: "blue",
  },
  iframe: {
    borderRadius: "22px",
    border: "1px solid black",
    backgroundColor: "dark",
  },
  formWrapper: {
    padding: "20px 0",
  },
  contactForm: {
    fontWeight: 800,
    fontSize: "24px",
  },
  form: {
    borderRadius: "22px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    padding: "20px 0",
    gap: "20px",
  },
  input: {
    width: "100%",
    input: {
      borderRadius: "22px",
      height: "40px",
      background: "inherit",
      border: "2px solid #383838",
      color: "#949496",
      "&:focus-within": {
        borderColor: "#FFFFFF50",
      },
    },
  },
  textarea: {
    textarea: {
      borderRadius: "22px",
      background: "inherit",
      border: "2px solid #383838",
      color: "#949496",
      "&:focus-within": {
        borderColor: "#FFFFFF50",
      },
    },
  },
  messages: {
    radius: "lg",
    size: "lg",
  },
  sendMessage:{
      alignItems:'right' ,
      justifyContent: "right"
  }
}));

export const Contact: FC = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.map}>
        <IFrame
          className={classes.iframe}
          width="850"
          height="400"
          allowFullScreen
          loading="lazy"
          url={
            "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5588.470578403893!2d71.39558631915197!3d51.09294405839645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNazarbayev%20University!5e0!3m2!1sen!2skz!4v1692352243126!5m2!1sen!2skz"
          }
        ></IFrame>
      </Box>
      <Box className={classes.formWrapper}>
        {
          <Text color="white" className={classes.contactForm}>
            {" "}
            Contact Form{" "}
          </Text>
        }
        <Box className={classes.form}>
          <TextInput className={classes.input} placeholder={"Full Name"} />
          <TextInput className={classes.input} placeholder={"Email Address"} />
          {/* <Box className={classes.name}> */}
          {/* </Box> */}
          {/* <Box className={classes.email}>Email Address</Box> */}
        </Box>
        <Textarea
          className={classes.textarea}
          autosize
          minRows={4}
          maxRows={10}
          placeholder={"Your Messages"}
        ></Textarea>
        {/* <Box className={classes.message}>Your Messages</Box> */}
      </Box>
      <Button className={classes.sendMessage}>
          Send Messages
      </Button>
    </Box>
  );
};
