import { CopyIcon } from '@chakra-ui/icons';
import { HStack, IconButton, Text, useToast } from '@chakra-ui/react'

export const GeneratedISO8601 = () => {
    const toast = useToast();
    const date = new Date().toISOString();

    return (
        <HStack>
            <Text fontSize="md">Generated ISO 8601:&nbsp;</Text>
            <Text fontSize="md">{date}</Text>

            <IconButton 
                variant='outline'
                size='sm'
                colorScheme='green'
                aria-label='Copy'
                icon={<CopyIcon />}
                onClick={() => {
                    copyValue(date);
                    toast({
                        title: 'Value Copied',
                        description: `You copied the date: ${date}`,
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                    });
                }}
            />
        </HStack>
    )
}

function copyValue(date: string) {    
    navigator.clipboard.writeText(date);
}
