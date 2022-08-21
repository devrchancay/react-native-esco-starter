import React, { ReactNode } from "react";
import { useWindowDimensions } from "react-native";

import Box from "./Box";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { height } = useWindowDimensions();
  return (
    <Box height={height} justifyContent="center" alignItems="center">
      {children}
    </Box>
  );
};

export default React.memo(Layout);
