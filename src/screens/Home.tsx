import React from "react";
import { Animated, useWindowDimensions } from "react-native";
import Box from "../components/Box";

import Layout from "../components/Layout";
import Text from "../components/Text";

const Home: React.FC = () => {
  const { height } = useWindowDimensions();
  return (
    <Layout>
      <Box px={3} width="100%">
        <Box py={3}>
          <Text as={Animated.Text} fontSize={7} textAlign="center">
            ⚛
          </Text>
          <Text fontSize={3} textAlign="center">
            React Native Esco Starter
          </Text>
        </Box>
        <Box height={height / 2} width="100%" />
      </Box>
    </Layout>
  );
};

export default Home;
