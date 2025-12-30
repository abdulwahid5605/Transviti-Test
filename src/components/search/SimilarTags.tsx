import { HStack, Text, Box } from "@chakra-ui/react"

const TAGS = ["Frontend", "Backend", "Graphic Designer"]

const SimilarTags = () => {
  return (
    <HStack gap={3} mt={4} mb={4} flexWrap="wrap">
      <Text fontSize="sm" color="gray.500">
        Similar:
      </Text>

      {TAGS.map((tag) => (
        <Box
          key={tag}
          px={3}
          py={1}
          fontSize="sm"
          borderWidth="1px"
          borderRadius="md"
          cursor="pointer"
          _hover={{
            bg: "gray.50",
            borderColor: "#0154AA",
            color: "#0154AA",
          }}
        >
          {tag}
        </Box>
      ))}
    </HStack>
  )
}

export default SimilarTags
