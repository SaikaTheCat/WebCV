import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";

import thumbAws from '../public/images/skills/aws.jpg'
import thumbUnity from '../public/images/skills/unity.jpg'
import thumbDjango from '../public/images/skills/django.png'
import thumbDotnet from '../public/images/skills/dotnet.png'
import thumbGit from '../public/images/skills/git.png'
import thumbGMS2 from '../public/images/skills/gms2.jpg'
import thumbKnime from '../public/images/skills/knime.jpg'
import thumbPlayfab from '../public/images/skills/playfab.png'
import thumbpsq from '../public/images/skills/postgres-logo.png'
import thumbReact from '../public/images/skills/react-logo.png'
import thumbUE from '../public/images/skills/ue-logo.jpg'
import thumbWeb from '../public/images/skills/webgamedevelopment.jpg'

const Skills = () => {
    return (
        <Container>
            <Layout>
                <Heading as="h3" fontSize={20} mb={4}>
                    Game Development
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem title="Unity" thumbnail={thumbUnity}>
                            3D and 2D games development for single and multiplayer platforms
                            with Unity/C#
                        </WorkGridItem>
                    </Section>

                    <Section>
                        <WorkGridItem title="Unreal Engine" thumbnail={thumbUE}>
                            3D games development through blueprints and C++
                        </WorkGridItem>
                    </Section>

                    <Section delay={0.1}>
                        <WorkGridItem title="Game Maker Studio 2" thumbnail={thumbGMS2}>
                            Indie 2d games done with GMS2
                        </WorkGridItem>
                    </Section>

                    <Section delay={0.1}>
                        <WorkGridItem title="Web Games Development" thumbnail={thumbWeb}>
                            WebGL games through JavaScript, HTML5 and CSS3
                        </WorkGridItem>
                    </Section>

                    <Section delay={0.1}>
                        <WorkGridItem title="Azure PlayFab" thumbnail={thumbPlayfab}>
                            Connecting PlayFab for multiplayer games functionalities, also integrating
                            CloudScripting through Azure Functions
                        </WorkGridItem>
                    </Section>

                </SimpleGrid>

                <Section delay={0.2}>
                    <Divider my={6} />

                    <Heading as="h3" fontSize={20} mb={4}>
                        Web and RESTful Stacks
                    </Heading>

                    <SimpleGrid columns={[1, 1, 2]} gap={6}>
                        <Section delay={0.3}>
                            <WorkGridItem title=".NET" thumbnail={thumbDotnet}>
                                Since C# is my favorite programming language, I often choose
                                this framework as back-end service for my projects
                            </WorkGridItem>
                        </Section>

                        <Section delay={0.3}>
                            <WorkGridItem title="React.js" thumbnail={thumbReact}>

                                This became my default tool for front-end web development
                                thanks to its strong community support and efficiency

                            </WorkGridItem>
                        </Section>

                        <Section delay={0.3}>
                            <WorkGridItem title="Django" thumbnail={thumbDjango}>
                                Due to its simplicity, reliability and scability, is definitely
                                one of my favorite choice for web framework when I need a fast development

                            </WorkGridItem>
                        </Section>

                        <Section delay={0.3}>
                            <WorkGridItem title="Postgresql" thumbnail={thumbpsq}>
                                As a powerful, open-source database with a wide range of features and scalability, making it an ideal choice for many applications.

                            </WorkGridItem>
                        </Section>

                    </SimpleGrid>
                </Section>
                <Section delay={0.4}>
                    <Divider my={6} />
                    <Heading as="h3" fontSize={20} mb={4}>
                        Other Tools
                    </Heading>
                </Section>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.4}>
                        <WorkGridItem title="Git" thumbnail={thumbGit}>
                            For version controlling in github or gitlab
                        </WorkGridItem>
                    </Section>

                    <Section delay={0.4}>
                        <WorkGridItem title="Knime" thumbnail={thumbKnime}>
                            As a powerful data analytics platform that enables users to create visual dataflows and process large amounts of data. It can be used for predictive analytics, machine learning, text mining and more.
                        </WorkGridItem>
                    </Section>

                    <Section delay={0.4}>
                        <WorkGridItem title="AWS" thumbnail={thumbAws}>
                            Amazon Web Services (AWS) is a cloud computing platform
                            that provides services such as computing power,
                            storage, databases, and more, to help businesses and developers to build applications and websites quickly and efficiently.
                        </WorkGridItem>
                    </Section>

                </SimpleGrid>
            </Layout>
        </Container>
    )
}

export default Skills