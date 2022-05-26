import {
  RiFacebookCircleFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/ri";

import blocks from "../assets/images/blocks_icon.png";
import dummy_profile_1 from "../assets/images/dummy_profile_1.png";
import dummy_profile_2 from "../assets/images/dummy_profile_2.png";
import dummy_profile_3 from "../assets/images/dummy_profile_3.png";
import eye from "../assets/images/eye_icon.png";
import heroImage from "../assets/images/hero.png";
import key from "../assets/images/key_icon.png";
import lock from "../assets/images/lock_icon.png";
import mobile from "../assets/images/mobile.png";
import partners_nus from "../assets/partners/nus_logo.jpg";
import partners_soc from "../assets/partners/soc_logo.jpg";
import partners_sbip from "../assets/partners/sbip_logo.png";
import platform from "../assets/images/platform.png";
import search from "../assets/images/search_icon.png";
import wallet from "../assets/images/wallet.png";

export const content = {
  hero: {
    image: heroImage,
    slogan: "A Digital Signing Platform for Everyone.",
    subSlogan: "We aim to disrupt the signing experience with the blockchain.",
  },
  products: {
    header: "Products",
    content:
      "We provide three tools to facilitate trusted, secure, and efficient document signing.",
    items: [
      {
        image: platform,
        header: "TezSign Platform",
        content:
          "The platform provides easy-to-use interface to document owner and document signer, allowing them to simply sign and manage the documents, as well as verifying the history of the signed documents.",
      },
      {
        image: wallet,
        header: "TezSign Browser Wallet",
        content:
          "The browser wallet manages users’ private keys, decentralized identities, and verifiable credentials, which enable flexible authentication to verify users’ identities and strong privacy protection to safeguard users’ documents.",
      },
      {
        image: mobile,
        header: "TezSign Mobile Application",
        content:
          "The mobile application offers similar functionalities to the platform for users to sign and manage their documents. Furthermore, it securely manages users’ private key and associated credentials.",
      },
    ],
  },
  tech: {
    header: "Technologies",
    content: "",
    items: [
      {
        image: search,
        header: "Verifiable Database",
        content:
          "An immutable and tamper-evident storage that supports accountability and data provenance verification.",
      },
      {
        image: eye,
        header: "Decentralized Identity",
        content:
          "It stores user's identity in a decentralized manner, allowing individuals to fully manage their personal information.",
      },
      {
        image: key,
        header: "Trusted Authentication",
        content:
          "Fine-grained authentication based on verifiable credentials, providing high-level trust to individuals in signing.",
      },
      {
        image: lock,
        header: "Secure Document Sharing",
        content:
          "Securely share documents via public-key cryptography, ensuring only qualified signers can view your documents.",
      },
      {
        image: blocks,
        header: "Interoperable Blockchains",
        content:
          "Facilitate different blockchain systems to communicate with each other, such that users from other blockchains can easily be integrated.",
      },
    ],
  },
  resources: {
    header: "Resources",
    content: "",
    items: [
      {
        image: "",
        header: "How do I know the signers are authenticated?",
        content:
          "Our platform provides a variety of authentication methods to verify the signers’ identities, including passcode, two-factor authentication, and decentralized identity. We ensure that only qualified signers can sign on the document.",
      },
      {
        image: "",
        header: "How safe is my document?",
        content:
          "Your document is highly protected via standard encryption techniques, only qualified signers can open and read the content of the document.",
      },
      {
        image: "",
        header: "How do I verify the signed document?",
        content:
          "You can upload the original copy of the document to the frontend, our platform will retrieve the actions history of this document, which are recorded in the immutable storages, either verifiable database or blockchain.",
      },
    ],
  },
  team: {
    header: "Team",
    content: "",
    items: [
      {
        image: dummy_profile_1,
        header: "Cody Fisher",
        content: "Chief Executive Officer",
      },
      {
        image: dummy_profile_2,
        header: "Devon Lane",
        content: "Chief Technology Officer",
      },
      {
        image: dummy_profile_3,
        header: "Albert Flores",
        content: "Product Manager",
      },
    ],
  },
  contact: {
    header: "Contact Us",
    action: "Submit",
  },
  partners: {
    header: "Partners",
    items: [
      { image: partners_nus, name: "NUS", link: "https://nus.edu.sg/" },
      {
        image: partners_soc,
        name: "NUS School of Computing",
        link: "https://www.comp.nus.edu.sg/",
      },
      { image: partners_sbip, name: "SBIP", link: "https://sbip.sg/" },
    ],
  },
  footer: {
    socialMedia: [
      {
        icon: <RiTwitterFill size="1.8em" />,
        label: "",
        url: "",
      },
      {
        icon: <RiLinkedinBoxFill size="1.8em" />,
        label: "",
        url: "",
      },
      {
        icon: <RiFacebookCircleFill size="1.8em" />,
        label: "",
        url: "",
      },
    ],
    address: [
      "Singapore Blockchain Innovation Programme",
      "#03-47, iCube Building",
      "21 Heng Mui Keng Terrace",
      "Singapore 119613",
    ],
    email: "contact@tezsign.com",
    copyright: `Copyright © ${new Date().getFullYear()} TezSign`,
  },
};
