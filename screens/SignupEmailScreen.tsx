import React from "react";

import { Box, FormControl, Text, VStack } from "native-base";

export default function SignupEmailScreen() {
  return (
    <Box
      bg={{
        linearGradient: {
          colors: ["#fa7745", "#f3c442"],
          start: [0, 0.8],
          end: [0, 0],
        },
      }}
      flex={1}
      pt="9"
    >
      <VStack>
        <Text
          textAlign="center"
          fontFamily="body"
          fontStyle="normal"
          fontWeight="300"
          fontSize="lg"
          color="white"
        >
          Sign up with Email
        </Text>
        <VStack>
          <FormControl
        </VStack>
      </VStack>
    </Box>
  );
}
