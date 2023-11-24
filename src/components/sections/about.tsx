import { CircularProgress, Flex, Heading, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";

export default function About(): JSX.Element {
	return (
		<Flex
            id="about"
            bg="#FFFFFF"
			color="#000000"
			flexDirection={{ base: "column", lg: "row" }}
            h="100vh"
            w="100vw"
		>
			<Flex alignItems="center" flex={1} justifyContent="center" position="relative">
				<Image src="/about.jpg" borderRadius="20px" boxSize={80} boxShadow="-10px 20px 60px 0px #462B81" zIndex={2}/>
				<CircularProgress left="40%" size="xs" value={50} color="#2C292E" position="absolute"/>
			</Flex>
			<Flex
				alignItems="flex-start"
				flex={1}
				flexDirection="column"
				justifyContent="center"
				fontFamily="Namco Regular"
				gap={5}
			>
				<Text>About</Text>
				<Heading fontFamily="Silkscreen">
					$DAGA IS A
					<br />
					REVOLUTION.
				</Heading>
				<Text>
					DAGA is a scalable gamified project powered by AI that involves every holder in a vibrant web3 experience.
					<br />
					$DAGA is a token allocated on Ethereum, with a total supply of 100B. ready to change  the crypto space. 
					Become a DAGA citizen buying the token and enter an scalable ecosystem with no limits.
				</Text>
				<UnorderedList>
					<ListItem fontWeight="bold">
						Contract Renounced
					</ListItem>
					<ListItem fontWeight="bold">
						Liquidity Locked
					</ListItem>
					<ListItem fontWeight="bold">
						Expertise Team
					</ListItem>
				</UnorderedList>
			</Flex>
		</Flex>
	);
}
