import { Box,Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Roadmap(): JSX.Element {
	return (
		<Flex
			id="roadmap"
			alignItems="center"
            backgroundImage="/roadmap-texture.png"
			backgroundPosition="center"
			backgroundSize="cover"
            flexDirection="column"
            gap={2}
            pb={8}
            justifyContent="center"
			w="full"
            color="#FFFFFF"
		>
            <Flex flexDirection="column" alignItems="center" mb={8} mt={48}>
                <Text fontWeight="extrabold">Roadmap</Text>
                <Heading w={{base: "full", lg:"60%"}} textAlign="center" fontFamily="Silkscreen">A MARKET CAP FINANCIAL GAME THAT BRINGS NEW DEVELOPMENTS</Heading>
            </Flex>
			<Image h="95%" src="/roadmap.png" w="90%" />
		</Flex>
	);
}
