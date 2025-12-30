import { Box, VStack, Avatar, Text } from "@chakra-ui/react"

const ProfileCard = () => {
    return (
        <Box bg="white" p={5} borderRadius="lg" boxShadow="sm" minW="280px">
            <VStack gap={4} align="start">
                <Avatar.Root size="xl">
                    <Avatar.Fallback name="Albert Flores" />
                    <Avatar.Image src="https://i.pravatar.cc/150?img=3" />
                </Avatar.Root>

                <Box>
                    <Text fontWeight="bold">Albert Flores</Text>
                    <Text fontSize="sm" color="gray.500">
                        Senior Product Designer
                    </Text>
                </Box>
            </VStack>
        </Box>
    )
}

export default ProfileCard
