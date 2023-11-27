import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Roadmap(): JSX.Element {
	return (
		<Flex
			id="roadmap"
			alignItems="center"
			backgroundImage="/texture.png"
			backgroundPosition="center"
			backgroundSize="cover"
			flexDirection="column"
			gap={2}
			pb={12}
			justifyContent="center"
			w="full"
			color="#FFFFFF"
		>
			<Box
				w="60%"
				h="0"
				borderTop="solid 60px #FFFFFF"
				borderLeft="solid 450px transparent"
				borderRight="solid 450px transparent"
			/>
			<Flex
				flexDirection="column"
				alignItems="center"
				mb={8}
				mt={8}
			>
				<Text fontWeight="extrabold">Roadmap</Text>
				<Heading
					w={{ base: "full", lg: "60%" }}
					textAlign="center"
					fontFamily="Silkscreen"
				>
					A MARKET CAP FINANCIAL GAME THAT BRINGS NEW DEVELOPMENTS
				</Heading>
			</Flex>
			<Image
				display={{ base: "none", lg: "block" }}
				h="50%"
				src="/roadmap.png"
				w="50%"
			/>
			<Flex
				w="100%"
				h="40vh"
				display={{ base: "flex", lg: "none" }}
				alignItems="center"
				overflowX="auto"
				css={{
					"&::-webkit-scrollbar": {
						width: "0.5em",
					},
					"&::-webkit-scrollbar-thumb": {
						backgroundColor: "transparent",
					},
					"&::-webkit-scrollbar-track": {
						backgroundColor: "transparent",
					},
				}}
			>
				<Image
					display={{ base: "block", lg: "none" }}
					src="/roadmap-mobile.png"
					h="100%"
					minW="800%"
				/>
			</Flex>
		</Flex>
	);
}
