import React from "react";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Button, FormControl, Input, Text, VStack } from "native-base";
import { RootStackParamList } from "../types";


type Props = NativeStackScreenProps<RootStackParamList, "LoginEmailScreen">;

export default function LoginEmailScreen({ route, navigation }: Props) {
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
          Log in
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
                Password
              </Text>
            </FormControl.Label>
            <Input
              backgroundColor="white"
              type="password"
            />
            {/* <FormControl.ErrorMessage>
              <Box
                background="danger"
                px="2"
                py="1"
                mt="10"
              >
                <Text
                  fontFamily="body"
                  fontStyle="normal"
                  fontWeight="200"
                  color="white"
                  fontSize="md"
                >
                  Email or password is not correct
                </Text>
              </Box>
            </FormControl.ErrorMessage> */}
          </FormControl>
        </VStack>
        <Box
          px="20"
        >
          <Button
            rounded="full"
            background="confirm"
            shadow="2"
            onPress={() => navigation.navigate("ProfileSettingsScreen")}
          >
            <Text
              color="white"
              fontFamily="body"
              fontStyle="normal"
              fontWeight="300"
              fontSize="md"
            >
              LOG IN
            </Text>
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}
