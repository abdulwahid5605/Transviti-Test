import {
    Box,
    Flex,
    Text,
    Icon,
    Collapsible,
    useCollapsible,
} from "@chakra-ui/react"
import { LuChevronDown, LuChevronUp } from "react-icons/lu"

const CalendarCard = () => {
    const collapsible = useCollapsible({ defaultOpen: false })

    return (
        <Collapsible.RootProvider value={collapsible} w={{ base: "100%", lg: "280px" }}>
            <Box bg="white" borderRadius="lg" boxShadow="sm" overflow="hidden">
                <Collapsible.Trigger asChild>
                    <Flex p={4} justify="space-between" cursor="pointer">
                        <Box>
                            <Text fontWeight="bold">My calendar</Text>
                            <Text fontSize="sm" color="gray.500">
                                Upcoming Interviews
                            </Text>
                        </Box>
                        <Icon>
                            {collapsible.open ? <LuChevronUp /> : <LuChevronDown />}
                        </Icon>
                    </Flex>
                </Collapsible.Trigger>

                <Collapsible.Content>
                    <Box px={4} pb={4} pt={2} borderTopWidth="1px">
                        <Text fontSize="sm" color="gray.600">
                            No upcoming interviews scheduled
                        </Text>
                    </Box>
                </Collapsible.Content>
            </Box>
        </Collapsible.RootProvider>
    )
}

export default CalendarCard
