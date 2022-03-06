import { Box, Text, Image, Flex, Heading, Spacer, Center, VStack, WrapItem, Wrap } from '@chakra-ui/react'
import { useCore } from '@/providers/CoreProvider'

const SiteInfoList = [
    {heading: 'Heading 1', subHeading: '', desc: 'This is some description like i dont know what to write here. May be with the God grace i will know soon.This is some description like i dont know what to write here. May be with the God grace i will know soon. This is some description like i dont know what to write here. May be with the God grace i will know soon. This is some description like i dont know what to write here. May be with the God grace i will know soon.'},
    {heading: 'Heading 2', subHeading: '', desc: 'This is some description like i dont know what to write here. May be with the God grace i will know soon.This is some description like i dont know what to write here. May be with the God grace i will know soon. This is some description like i dont know what to write here. May be with the God grace i will know soon. This is some description like i dont know what to write here. May be with the God grace i will know soon.'},
]

const LandingContents = () => {
    const { hotDeals } = useCore();

    return ( 
        <Flex mt="10px" flexWrap="wrap" px="24px" justifyContent='center'>
            <Flex maxW='8xl' w='full' flexDir='column'>
                <Box mb="10px">
                    <Image 
                        height='500px'
                        width='100%'
                        objectFit='cover'
                        src='gibbresh.png' 
                        fallbackSrc = 'https://via.placeholder.com/1920x525'
                    />
                </Box>
                <Flex flexDir='column' mt='1em'>
                    <Text fontSize="5xl" fontWeight="extrabold" color='rgb(67,122,255)'>
                        Hot Deals
                    </Text>
                    <Text>
                        A list of most sold items in this month
                    </Text>
                    <Flex justifyContent='space-evenly' mt='2em' p='2em' flexWrap='wrap'>
                        {hotDeals.map((deal, idx) => (
                            <VStack key={idx} p="10px" borderRadius="10px" maxW='275px'>
                                <Image 
                                    mb="10px"
                                    boxSize='275px'
                                    objectFit='cover'
                                    src={deal.image.url}
                                    fallbackSrc = 'https://via.placeholder.com/300'
                                />
                                <Text>{deal.name}</Text>
                                <Text fontSize='10pt' color='whiteAlpha.500'>
                                    {deal.description.substr(3, deal.description.length / 2)}...
                                </Text>
                            </VStack>
                        ))}
                    </Flex>
                </Flex>
                {SiteInfoList.map((info, idx) => (
                    <Box display="flex" width="100%" mt="10em" p="10px" flexDirection={idx === 0 ? "row-reverse" : "row"} key={idx}>
                        <Image 
                            boxShadow='dark-lg' rounded='md'
                            mb="10px"
                            objectFit='cover'
                            src = 'gibbresh.png' 
                            fallbackSrc = 'https://via.placeholder.com/300'
                        />
                        <VStack p="20px" m="20px">
                            <Heading>{info.heading}</Heading>
                            <Text fontSize='2xl'>{info.subHeading}</Text>
                            <Text>
                                {info.desc} 
                            </Text>
                        </VStack>
                    </Box>
                ))}
            </Flex>
        </Flex>
    )
}

export default LandingContents