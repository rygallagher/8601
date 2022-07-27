import { HStack, Tag } from '@chakra-ui/react'

export const UTCOffsetOverlay = () => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const hoursOffset = new Date().getTimezoneOffset() / 60;
  const hoursOffsetString = hoursOffset > 0 ? `UTC -${Math.abs(hoursOffset)}` : `UTC +${Math.abs(hoursOffset)}`;

  return (
    <HStack position="fixed" top={4} left={4}>
      <Tag>
        {timezone}
      </Tag>

      <Tag>{hoursOffsetString}</Tag>
    </HStack>
  )
}
