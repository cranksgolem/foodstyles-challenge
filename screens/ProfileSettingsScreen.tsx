import React from "react";
import {
  Box,
  Button,
  FormControl,
  Input,
  VStack,
  Text,
} from "native-base";

export default function ProfileSettingsScreen() {
  return (
    <Box
      pt={5}
      flex={1}
      bg="customWhite"
      alignItems="center"
      safeArea
    >
      <Text
        w="90%"
        fontFamily="body"
        fontStyle="normal"
        fontWeight="300"
        fontSize="md"
        color="greyishBrown"
      >
        PROFILE
      </Text>
      <VStack
        mt={5}
        flex={1}
        maxW="full"
        w="90%"
        alignItems="center"
        justifyContent="space-between"
        pb="12"
      >
        <VStack space={4} w="full">
          <FormControl>
            <FormControl.Label>
              <Text
                fontFamily="body"
                fontStyle="normal"
                fontWeight="200"
                fontSize="sm"
                color="greyishBrown"
              >
                Name shown on your shared cards
              </Text>
            </FormControl.Label>
            <Input
              fontFamily="body"
              fontStyle="normal"
              fontWeight="200"
              fontSize="md"
              color="greyishBrown"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>
              <Text
                fontFamily="body"
                fontStyle="normal"
                fontWeight="200"
                fontSize="sm"
                color="greyishBrown"
              >
                Email
              </Text>
            </FormControl.Label>
            <Input
              fontFamily="body"
              fontStyle="normal"
              fontWeight="200"
              fontSize="md"
              color="greyishBrown"
            />
          </FormControl>
        </VStack>
        <Button
          variant="outline"
          backgroundColor="customWhite"
          rounded="full"
          size="lg"
          _pressed={{
            backgroundColor: "white",
          }}
          w="50%"
          maxWidth="100%"
        >
          <Text
            fontFamily="body"
            fontStyle="normal"
            fontWeight="300"
            fontSize="sm"
            color="greyishBrown"
          >
            LOG OUT
          </Text>
        </Button>
      </VStack>
      <Box
        bg="white"
        pb="4"
        w="full"
        alignItems="center"
        position="relative"
      >
        <Button
          mt="-6"
          size="lg"
          shadow="7"
          w="40%"
          maxWidth="100%"
          rounded="full"
          backgroundColor="confirm"
        >
          <Text
            color="white"
            fontFamily="body"
            fontStyle="normal"
            fontWeight="300"
            fontSize="md"
          >
            DONE
          </Text>
        </Button>
      </Box>
    </Box>
  );
}