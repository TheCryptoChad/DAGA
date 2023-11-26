import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import NavbarButton from "../navbar/navbar-button";

export default function Hero(): JSX.Element {
	return (
		<Flex
			id="hero"
			alignItems="center"
			backgroundImage="/hero.jpg"
			backgroundPosition="center"
			backgroundSize="cover"
			justifyContent="center"
			mt={5}
			h="100vh"
			w="100%"
		>
			<Flex
				alignItems="flex-start"
				flexDirection="column"
				fontFamily="Namco Regular"
				w="80%"
				gap={5}
			>
				<Text fontSize="2.2rem">
					the scalable
					<br />
					financial gamified
					<br />
					project
				</Text>
				<Text>
					welcome to the most innovative and
					<br />
					vibrant crypto experience
					<br />
					welcome to daga
				</Text>
				<Flex
					alignItems="center"
					flexDirection={{ base: "column", lg: "row" }}
					fontFamily="Silkscreen"
					justifyContent="space-between"
					gap={5}
					w={{base: "90%", lg: "45%" }}
				>
					<Button
						_hover={{ bg: "#000000", color: "#FFF900" }}
						bg="#FFF900"
						borderRadius="20px"
						color="#000000"
						variant="solid"
						w={{base: "100%", lg: "35%" }}
					>
						BUY $DAGA
					</Button>
					<Button
						_hover={{ bg: "#000000", color: "#FFF900" }}
						bg="#FFF900"
						borderRadius="20px"
						color="#000000"
						variant="solid"
						w={{base: "100%", lg: "35%" }}
					>
						CHART
					</Button>
					<NavbarButton
						label="About Us ------>"
						target="about"
					/>
				</Flex>
			</Flex>
		</Flex>
	);
}
