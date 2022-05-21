import React from "react";

import { Box, Button, FormControl, Input, Text, VStack } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { fetcher } from "../api";
import { RootStackParamList } from "../types";

type FormFields = {
  name: string;
  email: string;
  password: string;
};

type Props = NativeStackScreenProps<RootStackParamList, "SignupEmailScreen">;

export default function SignupEmailScreen({ route, navigation }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(
    async (data) => {
      console.log("data :>> ", data);
      try {
        const response = await fetcher(`
          mutation {
             signUpWithEmail(name:"${data.name}", email:"${data.email}", password:"${data.password}"){
             user {
               id,
               email,
               name,
               facebookId,
               googleId,
               appleId,
             },
             accessToken,
             refreshToken
           }
          }`);
        navigation.replace("LoginEmailScreen")
      } catch (error) {
        console.log("error :>> ", error);
      }
    },
    (errors) => console.log("errors", errors)
  );

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
          <Controller
            name="name"
            control={control}
            rules={{
              required: "This field is required",
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormControl isInvalid={!!errors.name}>
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
                <Input
                  backgroundColor="white"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
                {errors.name && (
                  <FormControl.ErrorMessage>
                    {errors.name?.message}
                  </FormControl.ErrorMessage>
                )}
              </FormControl>
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{
              required: "This field is required",
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormControl isInvalid={!!errors.email}>
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
                <Input
                  backgroundColor="white"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
                {errors.email && (
                  <FormControl.ErrorMessage>
                    {errors.email.message}
                  </FormControl.ErrorMessage>
                )}
              </FormControl>
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{
              required: "This field is required",
              validate: {
                "is-min": (value) => {
                  return value.length < 6
                    ? "Password must be 6 characters minimum"
                    : true;
                },
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormControl isInvalid={!!errors.password}>
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
                <Input
                  backgroundColor="white"
                  type="password"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
                {errors.password?.message && (
                  <FormControl.ErrorMessage>
                    {errors.password.message}
                  </FormControl.ErrorMessage>
                )}
              </FormControl>
            )}
          />
        </VStack>
        <Box
          px="20"
        >
          <Button
            rounded="full"
            background="confirm"
            disabled={isSubmitting}
            shadow="2"
            onPress={onSubmit}
            isLoading={isSubmitting}
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
