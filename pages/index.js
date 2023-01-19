import { Container, Box, Heading, Image } from "@chakra-ui/react"

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                <div>Hello I&apos;m a Game Developer</div>
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Se Joon Oh
                    </Heading>
                    <p>Game development - Software Engineering - Computer Science</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    align="center"
                >
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/profilePicture1.jpg"
                        alt="Profile Image"
                    />
                </Box>
            </Box>
        </Container>
    )
}

export default Page