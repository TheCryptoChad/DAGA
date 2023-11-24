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
			h="100vh"
			w="100vw"
		>
			<Flex
				alignItems="flex-start"
				flexDirection="column"
				fontFamily="Namco Regular"
				w="80%"
				gap={5}
			>
				<Heading>
					THE SCALABLE
					<br />
					FINANCIAL GAMIFIED
					<br />
					PROJECT
				</Heading>
				<Text>
					WELCOME TO THE MOST INNOVATIVE AND
					<br />
					VIBRANT CRYPTO EXPERIENCE.
					<br />
					WELCOME TO DAGA.
				</Text>
				<Flex
					alignItems="center"
					fontFamily="Silkscreen"
					justifyContent="space-between"
					w="35%"
				>
					<Button
						_hover={{ bg: "#000000", color: "#FFF900" }}
						bg="#FFF900"
						borderRadius="20px"
						color="#000000"
						variant="solid"
					>
						BUY $DAGA
					</Button>
					<Button
						_hover={{ bg: "#000000", color: "#FFF900" }}
						bg="#FFF900"
						borderRadius="20px"
						color="#000000"
						variant="solid"
					>
						CHART
					</Button>
					<NavbarButton
						label="About Us --------->"
						target="about"
					/>
				</Flex>
			</Flex>
		</Flex>
	);
}
