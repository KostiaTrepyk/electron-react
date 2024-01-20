import React from "react";
import { Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

const MBox = motion(Box);

interface ViewTransitionAnimationProps extends React.PropsWithChildren {
  pageKey: React.Key;
}

/** Change `pageKey` to see magic 😊 */
const ViewTransitionAnimation: React.FC<ViewTransitionAnimationProps> = ({
  pageKey,
  children,
}) => {
  return (
    <AnimatePresence>
      <MBox
        key={pageKey}
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          height: "100%",
          width: "100%",
          zIndex: 1,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </MBox>
    </AnimatePresence>
  );
};

export default ViewTransitionAnimation;
