import { Box,Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Roadmap(): JSX.Element {
	return (
		<Flex
			id="roadmap"
			alignItems="center"
			bg="#E13DE4"
            flexDirection="column"
            gap={2}
            justifyContent="center"
			w="100vw"
		>
            <Box
                w="60%"
                h="0"
                borderTop="solid 60px #FFFFFF" // Change the color as needed
                borderLeft="solid 450px transparent"
                borderRight="solid 450px transparent"
            />
            <Flex flexDirection="column" alignItems="center">
                <Text>Roadmap</Text>
                <Heading>A MARKET CAP FINANCIAL GAME THAT BRINGS NEW DEVELOPMENTS</Heading>
            </Flex>
			<Image h="95%" src="/roadmap.png" w="90%" />
		</Flex>
	);
}
