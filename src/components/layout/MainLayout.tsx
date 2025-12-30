import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Navbar from "../navbar/Navbar"

const MainLayout = () => {
  return (
    <Box minH="100vh" bg="gray.50">
      <Navbar />
      <Box>
        <Outlet />
      </Box>
    </Box>
  )
}

export default MainLayout
