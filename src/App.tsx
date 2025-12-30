import {
  Box,
  Flex,
  Avatar,
  Text,
  VStack,
  HStack,
  Button,
  SimpleGrid,
  StackSeparator,
  Stack,
  Collapsible,
  useCollapsible,
  Icon,
  Input,
  Select,
  Portal,
  createListCollection
} from "@chakra-ui/react"
import { LuChevronDown, LuChevronUp, LuSearch } from "react-icons/lu"
import ProfileCard from "./components/profile/ProfileCard"
import CalendarCard from "./components/calendar/CalendarCard"
import { featuredJobs, jobTypes, latestJobs, locations, profileStats, recommendedJobs } from "./data/data"
import AppSelect from "./components/ui/AppSelect"
import AppButton from "./components/ui/AppButton"
import JobCard from "./components/jobs/JobCard"

function App() {
  return (
    <Box bg="gray.50" minH="100vh" p={6}>
      <Flex gap={6} align="start">
        <Flex gap={6} align="start" direction="column">
          <ProfileCard />
          <Stack
            minW="280px"
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

        <Box flex="1">
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

              <AppSelect
                collection={locations}
                placeholder="Select Location"
                minW="180px"
              />

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

export default App
