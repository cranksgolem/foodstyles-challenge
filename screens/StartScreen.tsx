import React from "react";

import { Box, Center, Heading, HStack, Link, VStack, Text, Image, Button } from "native-base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "StartScreen">;

export default function StartScreen({ route, navigation }: Props) {
  return (
    <Center
      bg={{
        linearGradient: {
          colors: ["#fa7745", "#f3c442"],
          start: [0, 0.8],
          end: [0, 0],
        },
      }}
      pt="24"
      px="9"
      flex={1}
      justifyContent="space-between"
    >
      <VStack>
        <Box
          alignItems="center"
        >
          <Image
            source={require("../assets/images/FoodStyles-logo.png")}
            resizeMode="contain"
            alt="FoodStyles logo"
            mb="4"
          />
        </Box>
        <Text
          fontFamily="body"
          fontStyle="normal"
          fontWeight="100"
          fontSize="lg"
          textAlign="center"
          color="white"
          mb="8"
        >
          Sign in to be able to save your preferences and settings.
        </Text>
        <VStack
          space="4"
        >
          <Button
            rounded="full"
            background="white"
            shadow="2"
            leftIcon={
              <Image
                source={require("../assets/images/Apple-logo.png")}
                resizeMode="contain"
                size="4"
                alt="Apple logo"
              />
            }
          >
            <Text
              fontFamily="body"
              fontStyle="normal"
              fontWeight="200"
              color="greyishBrown"
              fontSize="md"
            >
              Sign in with Apple
            </Text>
          </Button>
          <Button
            rounded="full"
            background="white"
            shadow="2"
            leftIcon={
              <Image
                source={require("../assets/images/Facebook-icon.png")}
                resizeMode="contain"
                size="4"
                alt="Facebook logo"
              />
            }
          >
            <Text
              fontFamily="body"
              fontStyle="normal"
              fontWeight="200"
              color="greyishBrown"
              fontSize="md"
            >
              Sign in with Facebook
            </Text>
          </Button>
          <Button
            rounded="full"
            background="white"
            shadow="2"
            leftIcon={
              <Image
                source={require("../assets/images/Google-icon.png")}
                resizeMode="contain"
                size="4"
                alt="Facebook logo"
              />
            }
          >
            <Text
              fontFamily="body"
              fontStyle="normal"
              fontWeight="200"
              color="greyishBrown"
              fontSize="md"
            >
              Sign in with Google
            </Text>
          </Button>
          <Button
            rounded="full"
            background="white"
            shadow="2"
          >
            <Text
              fontFamily="body"
              fontStyle="normal"
              fontWeight="200"
              color="greyishBrown"
              fontSize="md"
              onPress={() => navigation.navigate("SignupEmailScreen")}
            >
              Sign up with Email
            </Text>
          </Button>
          <Button
            backgroundColor="transparent"
          >
            <Text
              fontFamily="body"
              fontStyle="normal"
              fontWeight="200"
              color="white"
              fontSize="md"
              mt="-2"
              onPress={() => navigation.navigate("LoginEmailScreen")}
            >
              Log in with Email
            </Text>
          </Button>
        </VStack>
      </VStack>
      <Text
        color="white"
        fontFamily="body"
        fontStyle="normal"
        fontWeight="100"
        textAlign="center"
        px="12"
        mb="5"
      >
        By signing in you accept the{" "}
        <Text underline>General Terms</Text> and{" "}
        <Text underline>Privacy Policy</Text>
      </Text>
    </Center>
  );
}
