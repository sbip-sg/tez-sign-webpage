import { Box, Link, Slide, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import background from "../../assets/background/background_4.png";
import { useInView } from "../../hooks/useInView";
import { content } from "../../utils/content";
import { styles } from "./style";

const Partners = () => {
  const [setRef, visible] = useInView({
    threshold: 0.1,
  });

  return (
    <Box ref={setRef} sx={styles.partnersContainer}>
      <Box sx={styles.partnersBodyContainer}>
        <Typography variant={"h3"} sx={styles.partnersTitle}>
          {content.partners.header}
        </Typography>

        <Box sx={styles.partnersItems}>
          {content.partners?.items.map((item, index) => {
            return (
              <Link
                href={item.link}
                key={index}
                underline="none"
                target="_blank"
                rel="noopener"
              >
                <Box sx={styles.partnerIcon}>
                  <Image src={item.image} alt={"card_image"} />
                </Box>
              </Link>
            );
          })}
        </Box>
      </Box>

      {/* <Slide direction="left" in={visible} timeout={800}>
        <Box sx={styles.partnersBackground}>
          <Image src={background} alt={"background_image"} />
        </Box>
      </Slide> */}
    </Box>
  );
};

export default Partners;
