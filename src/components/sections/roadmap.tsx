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
			w="full"
		>
            <Box
                w="60%"
                h="0"
                borderTop="solid 60px #FFFFFF"
                borderLeft="solid 450px transparent"
                borderRight="solid 450px transparent"
            />
            <Flex flexDirection="column" alignItems="center" my={8}>
                <Text fontWeight="extrabold">Roadmap</Text>
                <Heading w={{base: "full", lg:"60%"}} textAlign="center" fontFamily="Silkscreen">A MARKET CAP FINANCIAL GAME THAT BRINGS NEW DEVELOPMENTS</Heading>
            </Flex>
			<Image h="95%" src="/roadmap.png" w="90%" />
		</Flex>
	);
}
