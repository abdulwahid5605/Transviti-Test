import { Select, Portal } from "@chakra-ui/react"

const AppSelect = ({ collection, placeholder, width = "160px" }:any) => {
  return (
    <Select.Root collection={collection} size="sm" width={width}>
      <Select.HiddenSelect />
      <Select.Control border="none">
        <Select.Trigger border="none">
          <Select.ValueText placeholder={placeholder} />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>

      <Portal>
        <Select.Positioner>
          <Select.Content>
            {collection.items.map((item:any) => (
              <Select.Item item={item} key={item.value}>
                {item.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

export default AppSelect
