import { Box, Text, Image, Flex, Heading, Spacer, Center, VStack, WrapItem, Wrap } from '@chakra-ui/react'

const HotDealsList = [
    {title: 'Item 1', desc: 'This is where the description goes!'},
    {title: 'Item 2', desc: 'This is where the description goes!'},
    {title: 'Item 3', desc: 'This is where the description goes!'},
    {title: 'Item 4', desc: 'This is where the description goes!'},
]

const SiteInfoList = [
    {heading: 'Heading 1', subHeading: '', desc: 'This is some description like i dont know what to write here. May be with the God grace i will know soon.This is some description like i dont know what to write here. May be with the God grace i will know soon. This is some description like i dont know what to write here. May be with the God grace i will know soon. This is some description like i dont know what to write here. May be with the God grace i will know soon.'},
    {heading: 'Heading 2', subHeading: '', desc: 'This is some description like i dont know what to write here. May be with the God grace i will know soon.This is some description like i dont know what to write here. May be with the God grace i will know soon. This is some description like i dont know what to write here. May be with the God grace i will know soon. This is some description like i dont know what to write here. May be with the God grace i will know soon.'},
]

const LandingContents = () => {
    return ( 
        <Flex mt="10px" flexWrap="wrap" px="24px" justifyContent='center'>
            <Flex maxW='8xl' w='full' flexDir='column'>
                <Box mb="10px">
                    <Image 
                        height='500px'
                        width='100%'
                        objectFit='cover'
                        src = 'gibbresh.png' 
                        fallbackSrc = 'https://via.placeholder.com/1920x525'
                    />
                </Box>
                <Flex flexDir='column' mt='1em'>
                    <Text fontSize="5xl" fontWeight="extrabold">
                        Hot Deals
                    </Text>
                    <Text color='whiteAlpha.600'>
                        Lorem erkemremrmermemremrmermerme asdadadasdasdsasdsasd
                    </Text>
                    <Flex justifyContent='space-evenly' mt='2em'>
                        {HotDealsList.map((deal, idx) => (
                            <VStack key={idx} p="10px" borderRadius="10px">
                                <Image 
                                    mb="10px"
                                    objectFit='cover'
                                    src = 'gibbresh.png' 
                                    fallbackSrc = 'https://via.placeholder.com/300'
                                />
                                <Text>{deal.title}</Text>
                                <Text>{deal.desc}</Text>
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