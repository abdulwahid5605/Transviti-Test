import {
    Box,
    Flex,
    Text,
    HStack,
    StackSeparator,
    Stack,
    Input,
} from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"
import CalendarCard from "../components/calendar/CalendarCard"
import { featuredJobs, jobTypes, latestJobs, locations, profileStats, recommendedJobs } from "../data/data"
import AppSelect from "../components/ui/AppSelect"
import AppButton from "../components/ui/AppButton"
import JobCard from "../components/jobs/JobCard"
import ProfileCard from "../components/profile/ProfileCard"
import SimilarTags from "../components/search/SimilarTags"
const FindJobs = () => {
    return (
        <Box bg="gray.50" minH="100vh" p={6}>
            <Flex
                gap={6}
                align="start"
                direction={{ base: "column", lg: "row" }}
            >
                <Flex
                    gap={6}
                    align="start"
                    direction="column"
                    w={{ base: "100%", lg: "280px" }}
                    flexShrink={0}
                >
                    <ProfileCard />
                    <Stack
                        w={{ base: "100%", lg: "280px" }}
                        bg="white"
                        p={5}
                        borderRadius="lg"
                        boxShadow="sm"
                        separator={<StackSeparator borderColor="gray.200" />}
                    >
                        {profileStats.map((item) => (
                            <HStack key={item.label} justify="space-between">
                                <Text fontSize="sm">{item.label}</Text>
                                <Text color="#0154AA">{item.value}</Text>
                            </HStack>
                        ))}
                    </Stack>
                    <CalendarCard />
                </Flex>

                <Box flex="1" width="100%">
                    <Box mb={4}>
                        <Text fontWeight="bold" fontSize="xl">
                            Find your Dream Job,{" "}
                            <Text as="span" color="#0154AA">
                                Albert!
                            </Text>
                        </Text>

                        <Text fontSize="sm" color="gray.500">
                            Explore the latest job openings and apply for the best opportunities
                            available today!
                        </Text>
                    </Box>
                    <Box bg="white" p={3} borderRadius="lg" boxShadow="sm" mb={4}>
                        <Flex gap={3} align="center" wrap="wrap">
                            <Input
                                placeholder="Job Title, Company, or Keywords"
                                flex="1"
                                border="none"
                                _focus={{ boxShadow: "none" }}
                            />
                            <Box
                                mx={1}
                                color="gray.300"
                                fontWeight="medium"
                            >
                                |
                            </Box>
                            <AppSelect
                                collection={locations}
                                placeholder="Select Location"
                                minW="180px"
                            />
                            <Box
                                mx={1}
                                color="gray.300"
                                fontWeight="medium"
                            >
                                |
                            </Box>
                            <AppSelect
                                collection={jobTypes}
                                placeholder="Job Type"
                                minW="140px"
                            />

                            <AppButton icon={LuSearch}>
                                Search
                            </AppButton>
                        </Flex>
                    </Box>
                    <SimilarTags/>
                    <JobCard
                        sectionTitle="Featured Jobs"
                        linkText="See Featured Jobs"
                        jobs={featuredJobs}
                    />

                    <JobCard
                        sectionTitle="Recommended Jobs"
                        linkText="See Recommended Jobs"
                        jobs={recommendedJobs}
                    />

                    <JobCard
                        sectionTitle="Latest Jobs"
                        linkText="See Latest Jobs"
                        jobs={latestJobs}
                    />
                </Box>
            </Flex>
        </Box>
    )
}

export default FindJobs