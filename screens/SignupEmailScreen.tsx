import React from "react";

import { Box, Button, FormControl, Input, Text, VStack } from "native-base";

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
      px="9"
    >
      <VStack>
        <Text
          textAlign="center"
          fontFamily="body"
          fontStyle="normal"
          fontWeight="300"
          fontSize="xl"
          color="white"
          mb="6"
        >
          Sign up with Email
        </Text>
        <VStack
          space="2"
          mb="7"
        >
          <FormControl>
            <FormControl.Label>
              <Text
                textAlign="center"
                fontFamily="body"
                fontStyle="normal"
                fontWeight="200"
                fontSize="md"
                color="white"
              >
                Your name
              </Text>
            </FormControl.Label>
            <Input backgroundColor="white" />
          </FormControl>
          <FormControl>
            <FormControl.Label>
              <Text
                textAlign="center"
                fontFamily="body"
                fontStyle="normal"
                fontWeight="200"
                fontSize="md"
                color="white"
              >
                Email
              </Text>
            </FormControl.Label>
            <Input backgroundColor="white" />
          </FormControl>
          <FormControl>
            <FormControl.Label>
              <Text
                textAlign="center"
                fontFamily="body"
                fontStyle="normal"
                fontWeight="200"
                fontSize="md"
                color="white"
              >
                Password{" "}
                <Text
                  fontFamily="body"
                  fontStyle="normal"
                  fontWeight="100"
                >
                  (min 6 characters)
                </Text>
              </Text>
            </FormControl.Label>
            <Input backgroundColor="white" type="password" />
          </FormControl>
        </VStack>
        <Box
          px="20"
        >
          <Button
            rounded="full"
            background="confirm"
          >
            <Text
              color="white"
              fontFamily="body"
              fontStyle="normal"
              fontWeight="300"
              fontSize="md"
            >
              SIGN UP
            </Text>
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}
