
import { List, Button, Link, Container, Box, Heading, Image, useColorModeValue, ListItem } from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5"
import { FaItchIo } from "react-icons/fa"

const Page = () => {
    return (
        <Container>
            <Layout>
                <Box
                    borderRadius="lg"
                    mb={6}
                    p={3}
                    textAlign="center"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    css={{ backdropFilter: 'blur(10px)' }}
                >
                    <div>Crafting entertaining games :&#41;</div>
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Se Joon Oh
                        </Heading>
                        <p>Game development - Software Engineering</p>
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
                            maxWidth="120px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/profilePicture1.jpg"
                            alt="Profile Image"
                        />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        About
                    </Heading>
                    <Paragraph>
                        Se Joon is a game developer with a proven track record of delivering high-quality games for both desktop and mobile platforms. He has experience in a wide range of game development tools and technologies, including Unity/C#, GMS2 and JavaScript. His proficiency in full stack development allows him to create well-rounded projects that are polished and engaging for players.

                        As a software engineering graduate and a Korean living in Paraguay, bringing a unique perspective to his work. He is committed to delivering quality results and is always looking for ways to improve his skills and stay current with the latest developments in the industry.
                    </Paragraph>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1997</BioYear>
                        Born in Seoul (서울), Korea.
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Completed Computer Software Engineering Degree Program in the Catholic University of Asunción
                        (Universidad Católica "Nuestra Señora de la Asunción)
                    </BioSection>
                    <BioSection>
                        <BioYear>2022 to present</BioYear>
                        Working at Posibillian Tech as Game Developer
                    </BioSection>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Hobbies
                    </Heading>
                    <Paragraph>
                        Cooking, Music
                        , Video Games,
                        Anime, Playing Bass
                    </Paragraph>
                </Section>
                <Section>
                    <Heading as="h3" variant="section-title">
                        Links
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/SaikaTheCat" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<IoLogoGithub />}
                                >
                                    SaikaTheCat
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/se-joon-oh-dev/" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<IoLogoLinkedin />}
                                >
                                    Se Joon Oh
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://saikathecat.itch.io/" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<FaItchIo />}
                                >
                                    SaikaTheCat
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Layout>
        </Container >
    )
}

export default Page