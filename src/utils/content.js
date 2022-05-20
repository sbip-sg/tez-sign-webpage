import heroImage from "../assets/images/dummy_image.png";
import mobile from "../assets/images/mobile.png";
import platform from "../assets/images/platform.png";
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
        image: mobile,
        header: "Verifiable Database",
        content:
          "An immutable and tamper-evident storage that supports accountability and data provenance verification.",
      },
      {
        image: mobile,
        header: "Decentralized Identity",
        content:
          "It stores user's identity in a decentralized manner, allowing individuals to fully manage their personal information.",
      },
      {
        image: mobile,
        header: "Trusted Authentication",
        content:
          "Fine-grained authentication based on verifiable credentials, providing high-level trust to individuals in signing.",
      },
      {
        image: mobile,
        header: "Secure Document Sharing",
        content:
          "Securely share documents via public-key cryptography, ensuring only qualified signers can view your documents.",
      },
      {
        image: mobile,
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
};
