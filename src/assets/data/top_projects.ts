import whatsapp from "../images/whatsapp_project.png";
import instagram from "../images/instagram_project.png";
import base64 from "../images/base64_project.png";
import os_messenger from "../images/os_messenger_project.png";
import afrilib from "../images/afrilib.png";
import healthstack from "../images/healthstack.png";
import green_indie from "../images/green-indie.png";
import asos from "../images/ason.png";

export const projects = [
  {
    name: "Green Indie",
    live: "https://www.greenindie.com/",
    repo: "",
    image: green_indie,
    description: `Green Indie is a virtual auditioning platform for talented upcoming artists to upload and showcase their talents. It is intended for all
          artists that are hoping to break into the music industry. The Green
          Indie platform’s sole purpose is to sponsor talented artists and
          connect artists to recording labels/producers.`,
    techs: ["Next.JS", "Typescript", "SCSS", "Material-UI", "React-Query"],
  },
  {
    name: "Afreb.Lib Academy",
    live: "https://afrelib-client.vercel.app/",
    repo: "",
    image: afrilib,
    description:
      "An Academy Artificial Intelligence Challenge project which I was priviledge to work on the frontend and collaborated with other developers (frontend and backend)",
    techs: [
      "Next.JS",
      "Typescript",
      "CSS",
      "SCSS",
      "Material-UI",
      "React-Query",
    ],
  },

  {
    name: "ASOS Clone",
    live: "https://sulaimon-olaniran-asos-clone.netlify.app/",
    repo: "https://github.com/sulaimon-olaniran/ASOS-clone",
    image: asos,
    description:
      "A Clone of the popular shopping web application know as ASOS, using APIs from Rapid Api",
    techs: [
      "React.JS",
      "Typescript",
      "CSS",
      "SCSS",
      "Material-UI",
      "Redux",
      "Rapid Api",
    ],
  },

  {
    name: "Healthstack Solutions Limited",
    live: "https://healthstack-test.netlify.app/",
    repo: "",
    image: healthstack,
    description:
      "Healthstack is a digital health platform that creates and strengthens a resilient, pandemic-proof healthcare system. They provide hybrid cloud-based digital tools to perform healthcare services and facilitate interactions between healthcare providers and their clients easily using digital technology",
    techs: ["Next.JS", "CSS", "SCSS", "Material-UI", "React-Query"],
  },

  {
    name: "WhatsApp Web Clone",
    live: "https://os-whatsapp-clone.netlify.app/",
    repo: "https://github.com/sulaimon-olaniran/whatsapp-clone",
    image: whatsapp,
    description:
      "A clone of the WhatsApp web app with ability to create account, sending various messages such as texts, stickers, photos and gifs. Create and delete chats, blocking users/contacts,delete messages, clear chat messages, pinning chat, archiving chat, staring messages and some other WhatsApp functionalities. ",
    techs: ["React", "SCSS", "Material-UI", "Context-API"],
  },

  {
    name: "Instagram Web Clone",
    live: "https://os-instagram-clone.netlify.app/",
    repo: "https://github.com/sulaimon-olaniran/instagram-web-clone",
    image: instagram,
    description:
      "A clone of the Instagram web app with functions such as authentication, creating posts and stories, chatting with other users, following and unfollowing users, liking and unliking posts, blocking user, updating account details and other instagram web functions.",
    techs: ["React", "SCSS", "Material-UI", "Redux", "Firebase", "Formik"],
  },

  {
    name: "React Image File to Base64",
    live: "https://www.npmjs.com/package/react-file-image-to-base64",
    repo: "https://github.com/sulaimon-olaniran/react-file-image-to-base64",
    image: base64,
    description:
      "A simple NPM package that helps transform image(s) files to Base64 files. Comes with a custom button to trigger the image selection prompt from the user's device and preferred customized buttons can also be used if the user does not fancy the inbuilt custom button..",
    techs: ["React", "Material-UI", "TypeScript", "MomentJS"],
  },

  {
    name: "OS Messenger Web App",
    live: "https://os-messenger.netlify.app/",
    repo: "https://github.com/sulaimon-olaniran/react-web-chat",
    image: os_messenger,
    description:
      "A simple web chat application, one of my very first fullstack application using firebase, not the best of UI, but it helped in my progress of learning more about React and Fullstack applications. Has functions such as sending messages, and adding users as favourite chat partner.",
    techs: [
      "React",
      "SCSS",
      "Material-UI",
      "Firebase",
      "React Context-API",
      "Formik",
    ],
  },
];
