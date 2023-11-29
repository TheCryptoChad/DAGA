import { Button, Flex, Text } from "@chakra-ui/react";
import NavbarButton from "../navbar/navbar-button";

export default function Hero(): JSX.Element {
	return (
		<Flex
			id="hero"
			alignItems="center"
			backgroundImage="/hero.png"
			backgroundPosition="center"
			backgroundSize="cover"
			justifyContent="center"
			h="100vh"
			w="full"
		>
			<Flex
				alignItems={{base: "center", lg: "flex-start"}}
				flexDirection="column"
				fontFamily="Namco Regular"
				w="80%"
				gap={5}
				color="#FFFFFF"
			>
				<Text fontSize="2.2rem">
					ai driven,
					<br />
					scalable gamified 
					<br />
					project
				</Text>
				<Text>
					welcome to the most innovative and
					<br />
					vibrant crypto experience
					<br />
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
						isDisabled
						_hover={{ bg: "#000000", color: "#FFF900" }}
						bg="#FFF900"
						borderRadius="20px"
						color="#000000"
						variant="solid"
						w={{base: "100%", lg: "35%" }}
						onClick={() => window.location.href = `https://app.uniswap.org/swap?chain=mainnet&outputCurrency=${process.env.NEXT_PUBLIC_DAGA_ADDRESS}`}
					>
						BUY $DAGA 
					</Button>
					<Button
						isDisabled
						_hover={{ bg: "#000000", color: "#FFF900" }}
						bg="#FFF900"
						borderRadius="20px"
						color="#000000"
						variant="solid"
						w={{base: "100%", lg: "35%" }}
						onClick={() => window.location.href = `https://www.dextools.io/app/en/ether/pair-explorer/${process.env.NEXT_PUBLIC_LP_ADDRESS}`}
					>
						CHART
					</Button>
					<NavbarButton
						hero
						label="About Us"
						target="about"
					/>
				</Flex>
			</Flex>
		</Flex>
	);
}
