import { Button, Icon } from "@chakra-ui/react"

const AppButton = ({ icon, children, ...props }:any) => {
  return (
    <Button
      backgroundColor="#0154AA"
      size="sm"
      px={6}
      {...props}
      rounded="md"
    >
      {icon && <Icon as={icon} mr={2} />}
      {children}
    </Button>
  )
}

export default AppButton
