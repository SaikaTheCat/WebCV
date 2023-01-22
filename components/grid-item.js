import Image from 'next/image'
import { Box, Text } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({children, title, thumbnail }) => (
    <Box w="100%" textAlign="center">
        <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
            loading="lazy"
        />
        <Text mt={2}>{title}</Text>
        <Text fontSize={14}>{children}</Text>
    </Box>
)

export const WorkGridItem = ({children, title, thumbnail }) => (
    <Box w="100%" textAlign="center">
        <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
        />
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
        <Text fontSize={14}>{children}</Text>
    </Box>
)

export const GridItemStyle = () => (
    <Global
        styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
    />
)