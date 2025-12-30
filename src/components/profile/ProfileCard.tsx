import { Box, VStack, Avatar, Text, Image } from "@chakra-ui/react"

const ProfileCard = () => {
  return (
    <Box
      bg="white"
      borderRadius="xl"
      boxShadow="sm"
      overflow="hidden"
      w={{ base: "100%", lg: "280px" }}
      textAlign="center"
    >
      {/* Cover Image */}
      <Box h="90px" position="relative">
        <Image
          src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
          alt="cover"
          objectFit="cover"
          w="100%"
          h="100%"
        />

        {/* Avatar */}
        <Avatar.Root
          size="xl"
          position="absolute"
          bottom="-32px"
          left="50%"
          transform="translateX(-50%)"
          border="4px solid white"
        >
          <Avatar.Fallback name="Albert Flores" />
          <Avatar.Image src="https://i.pravatar.cc/150?img=3" />
        </Avatar.Root>
      </Box>

      {/* Content */}
      <VStack gap={2} pt={10} pb={4} px={4}>
        <Text fontWeight="bold" fontSize="md">
          Albert Flores
        </Text>

        <Text fontSize="sm" color="gray.600">
          Senior Product Designer | UI/UX Designer | Graphic Designer | Web…
        </Text>

        <Text fontSize="sm" color="gray.500">
          Clinton, Maryland
        </Text>
      </VStack>
    </Box>
  )
}

export default ProfileCard
