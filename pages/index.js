import { Container, Box, Heading } from "@chakra-ui/react"

const Page = () =>
{
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
            <div>Hello I&apos;m a game developer</div>
            </Box>
                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Se Joon Oh
                        </Heading>
                        <p>Game development - Software Engineering - Computer Science</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page