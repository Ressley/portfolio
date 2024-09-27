import { Badge, Box, createStyles, Divider, Text, Title } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandTwitter,
  IconDeviceMobile,
  IconMail,
  IconMapPinPin,
  IconPhone,
} from "@tabler/icons-react";
import { FC } from "react";
import { Avatar } from "./Avatar";
import { Contact } from "./Contact";

const contacts = [
  {
    label: "Email",
    text: "ayeke12074@gmail.com",
    icon: <IconMail color="#FFDB70" size={28} />,
    link: "mailto:ayeke12074@gmail.com",
  },
  {
    label: "Phone",
    text: "+7 708 279 5707",
    icon: <IconDeviceMobile color="#FFDB70" size={28} />,
    link: "tel:+7 (708) 279-57-07",
  },
  {
    label: "Github",
    text: "github.com/baurzhanson",
    icon: <IconBrandGithub color="#FFDB70" size={28} />,
    link: "https://github.com/baurzhanson",
  },
  {
    label: "Location",
    text: "Astana, Kazakhstan",
    icon: <IconMapPinPin color="#FFDB70" size={28} />,
    link: "https://www.google.com/maps/place/Astana/@51.1038954,71.1719561,10z/data=!3m1!4b1!4m6!3m5!1s0x424580c47db54609:0x97f9148dddb19228!8m2!3d51.1655126!4d71.4272221!16zL20vMGZuMDg?entry=ttu",
  },
];

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "fixed",
    display: "flex",
    padding: "30px 25px",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
    background: "#1E1F1F",
    borderRadius: "25px",
    border: "2px solid #393838",
  },
  upper: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: "24px",
  },
  end: {
    display: "flex",
    flexDirection: "row",
    gap: "12px",
  },
  divider: {
    border: "1.5px solid #393838",
    width: "100%",
  },
  badge: {
    background: "#2B2B2B",
    width: "144px",
    height: "36px",
    borderRadius: "4px",
  },
}));

export const SideBar: FC = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.upper}>
        <Avatar />
        <Title c={"white"} size={"24px"}>
          Ayan Zholdybayev
        </Title>
        <Badge className={classes.badge}>
          <Text c={"white"} size={"12px"}>
            Data Scientist
          </Text>
        </Badge>
      </Box>
      <Divider className={classes.divider} />
      <Box className={classes.center}>
        {contacts.map((contact) => {
          return (
            <Contact
              label={contact.label}
              text={contact.text}
              icon={contact.icon}
              link={contact.link}
            />
          );
        })}
      </Box>
      <Box className={classes.end}>
        <IconBrandInstagram color="#9F9F9F" size={24} />
        <IconBrandTelegram color="#9F9F9F" size={24} />
        <IconBrandTwitter color="#9F9F9F" size={24} />
      </Box>
    </Box>
  );
};
