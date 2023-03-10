
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
                    <div>Crafting entertaining games</div>
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
                            borderTopLeftRadius="10px"
                            borderTopRightRadius="10px"
                            borderBottomLeftRadius="10px"
                            borderBottomRightRadius="10px"
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
                    I'm a game developer with experience in a wide range of game development tools and technologies, including Unity/C#, GMS2 and UE5. I create well-rounded projects, always looking for ways to improve my skills and stay updated to the latest developments in the industry.
                    </Paragraph>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1997</BioYear>
                        Born in Seoul (서울), Korea
                    </BioSection>
                    <BioSection>
                        <BioYear>2001</BioYear>
                        First game ever played: Pokemon Yellow
                    </BioSection>
                    <BioSection>
                        <BioYear>2009</BioYear>
                        Designed first game asset: Starcraft custom map
                    </BioSection>
                    <BioSection>
                        <BioYear>2013</BioYear>
                        Started a rock band as a bassist
                    </BioSection>
                    <BioSection>
                        <BioYear>2017</BioYear>
                        First game ever designed and developed,<br /><br />
                        Started Computer Software Engineering degree&#39;s program
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Started sushi restaurant business
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Completed Computer Software Engineering Degree Program in the Catholic University of Asunción
                        (Universidad Católica &quot;Nuestra Señora de la Asunción&quot;)<br /><br />
                        Started working at Posibillian Tech as Game Developer
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