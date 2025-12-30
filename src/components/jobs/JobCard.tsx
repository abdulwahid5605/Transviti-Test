import {
    Box,
    Flex,
    Text,
    SimpleGrid,
    Link,
    VStack,
    HStack,
    Image,
} from "@chakra-ui/react"
import AppButton from "../ui/AppButton"
import { LuMapPin, LuClock, LuBookmark } from "react-icons/lu"
import imageOne from "../../assets/imageOne.svg"


const JobCard = ({ sectionTitle, linkText, jobs }: any) => {
    return (
        <Box mb={10}>
            <Flex align="center" mb={4}>
                <Text fontSize="lg">
                    {sectionTitle}
                </Text>

                <Link
                    ml={4}
                    mt={0.5}
                    fontSize="md"
                    color="#0154AA"
                    variant="underline"
                >
                    {linkText}
                </Link>
            </Flex>

            {/* Jobs Grid */}
            <SimpleGrid columns={[1, 2, 3, 4, 5]} gap={5}>
                {jobs.map((job: any) => (
                    <Box
                        key={job.id}
                        borderWidth="1px"
                        borderRadius="lg"
                        p={4}
                        bg="white"
                        boxShadow="sm"
                    >
                        <VStack align="start" gap={2}>
                            <HStack gap={2}>
                                <Image
                                    src={imageOne}
                                    alt="UI/UX Icon"
                                    boxSize="40px"
                                />
                                <Text fontWeight="medium">{job.title}</Text>
                            </HStack>

                            <HStack gap={1} align="flex-start" color="gray.500">
                                <LuMapPin size={14} style={{ marginTop: "2px" }} />
                                <Text fontSize="sm">{job.location}</Text>
                            </HStack>

                            <HStack gap={1} align="flex-start" color="gray.500">
                                <LuClock size={14} style={{ marginTop: "2px" }} />
                                <Text fontSize="sm">{job.meta}</Text>
                            </HStack>

                            <HStack w="full" gap={2}>
                                <AppButton size="sm" flex="1" borderRadius="md">
                                    Apply Now
                                </AppButton>
                                <LuBookmark size={24} color="grey" />
                            </HStack>
                        </VStack>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    )
}

export default JobCard
