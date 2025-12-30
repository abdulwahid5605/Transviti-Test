import {
  Flex,
  Input,
  Avatar,
  HStack,
  Text,
  Box,
  Image,
  IconButton,
  Drawer,
  Portal,
  VStack,
} from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { LuMenu } from "react-icons/lu"
import logo from "../../assets/logo.svg"
import AppButton from "../ui/AppButton"

const ACTIVE_COLOR = "#0154AA"
const INACTIVE_COLOR = "#737A91"

const NAV_LINKS = [
  { label: "Find Jobs", path: "/" },
  { label: "Top Companies", path: "/companies" },
  { label: "Job Tracker", path: "/tracker" },
  { label: "My Calendar", path: "/calendar" },
  { label: "Documents", path: "/documents" },
  { label: "Messages", path: "/messages" },
  { label: "Notifications", path: "/notifications" },
]

const Navbar = () => {
  return (
    <Flex
      bg="white"
      px="8"
      py="3"
      align="center"
      justify="space-between"
      boxShadow="sm"
    >
      {/* LOGO */}
      <Box>
        <Image src={logo} alt="logo" h="32px" />
      </Box>

      {/* DESKTOP NAV */}
      <HStack gap="6" display={{ base: "none", lg: "flex" }}>
        {NAV_LINKS.map((link) => (
          <NavLink key={link.path} to={link.path}>
            {({ isActive }) => (
              <Text
                fontWeight={isActive ? "600" : "400"}
                color={isActive ? ACTIVE_COLOR : INACTIVE_COLOR}
                cursor="pointer"
              >
                {link.label}
              </Text>
            )}
          </NavLink>
        ))}
      </HStack>

      {/* DESKTOP RIGHT */}
      <HStack gap="4" display={{ base: "none", lg: "flex" }}>
        <Input placeholder="Search" maxW="220px" />

        <AppButton
          bg={ACTIVE_COLOR}
          color="white"
          _hover={{ bg: "#01428A" }}
        >
          Resume Builder
        </AppButton>

        <Avatar.Root size="sm">
          <Avatar.Fallback name="Albert Flores" />
          <Avatar.Image src="https://bit.ly/sage-adebayo" />
        </Avatar.Root>
      </HStack>
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <IconButton
            aria-label="Open Menu"
            variant="ghost"
            display={{ base: "flex", lg: "none" }}
          >
            <LuMenu size={22} />
          </IconButton>
        </Drawer.Trigger>

        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Image src={logo} alt="logo" h="28px" />
              </Drawer.Header>

              <Drawer.Body>
                <VStack align="stretch" gap={4}>
                  {NAV_LINKS.map((link) => (
                    <NavLink key={link.path} to={link.path}>
                      {({ isActive }) => (
                        <Text
                          fontWeight="500"
                          color={isActive ? ACTIVE_COLOR : INACTIVE_COLOR}
                        >
                          {link.label}
                        </Text>
                      )}
                    </NavLink>
                  ))}

                  <Input placeholder="Search" />

                  <AppButton
                    bg={ACTIVE_COLOR}
                    color="white"
                    _hover={{ bg: "#01428A" }}
                  >
                    Resume Builder
                  </AppButton>
                </VStack>
              </Drawer.Body>

              <Drawer.CloseTrigger />
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Flex>
  )
}

export default Navbar
