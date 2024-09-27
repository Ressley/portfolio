import { ClassNames } from "@emotion/react";
import {
  Box,
  Button,
  createStyles,
  Text,
  Input,
  TextInput,
  Textarea,
  Loader,
  Modal,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconBrandTelegram } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { FC, useState } from "react";
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

  buttonWrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "end",
  },

  sendMessages: {
    height: "60px",
    borderRadius: "22px",
    textAlign: "right",
    background: "#21202230",
    border: "2px solid #383838",
    color: "#bda159",
    "&:focus-within": {
      borderColor: "#FFFFFF50",
    },
    "&:hover": {
      backgroundColor: "#212022",
    },
  },
}));

export interface Form {
  full_name: string;
  email: string;
  message: string;
}

export const Contact: FC = () => {
  const { classes } = useStyles();
  const [success, setSuccess] = useState<boolean>(false);
  const form = useForm({
    initialValues: {
      full_name: "",
      email: "",
      message: "",
    },
  });

  const sendMessage = async (data: Form) => {
    await axios.post(
      "https://api.telegram.org/bot6023906201:AAEvPYPTEcr9bSTJlTpjDI_HPAMyL-yW8Mk/sendMessage",
      {
        chat_id: "394912103",
        text: `Full name: ${data.full_name}\nEmail: ${data.email}\nMessage: ${data.message}`,
      }
    );
  };

  const mutation = useMutation(
    async (data: Form) => {
      await sendMessage(data);
    },
    {
      onSuccess: () => {
        setSuccess(true);
      },
    }
  );

  return (
    <Box className={classes.wrapper}>
      <Modal
        opened={success}
        onClose={() => {
          setSuccess(false);
        }}
      >
        Hello
      </Modal>
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

      <form onSubmit={form.onSubmit((values) => mutation.mutate(values))}>
        <Box className={classes.formWrapper}>
          {
            <Text color="white" className={classes.contactForm}>
              {" "}
              Contact Form{" "}
            </Text>
          }
          <Box className={classes.form}>
            <TextInput
              className={classes.input}
              {...form.getInputProps("full_name")}
              placeholder={"Full Name"}
            />
            <TextInput
              className={classes.input}
              {...form.getInputProps("email")}
              placeholder={"Email Address"}
            />
          </Box>
          <Textarea
            className={classes.textarea}
            autosize
            minRows={4}
            maxRows={10}
            {...form.getInputProps("message")}
            placeholder={"Your Messages"}
          ></Textarea>
        </Box>
        <Box className={classes.buttonWrapper}>
          <Button
            type="submit"
            className={classes.sendMessages}
            disabled={mutation.isLoading}
            leftIcon={
              mutation.isLoading ? (
                <Loader />
              ) : (
                <IconBrandTelegram size="26px" color="#bda159" />
              )
            }
          >
            Send Messages
          </Button>
        </Box>
      </form>
    </Box>
  );
};
