import { Card, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function Story(): JSX.Element {
	const cards: { image: string; title: string; description: string }[] = [
		{
			image: "/card1.png",
			title: "CITIZENS OF DAGA",
			description: "The city of DAGA is ruled under the yoke of tyranny. The citizens are ready to start a revolution never seen before.",
		},
		{
			image: "/card2.png",
			title: "WRITE THE STORY",
			description: "Buy $DAGA to gain citizenship. The narrative of DAGA will be shaped through the achievement of milestones and the active involvement of the community.",
		},
		{
			image: "/card3.png",
			title: "BE A HERO",
			description: "Hold $DAGA and receive airdrops that will give special benefits in all the future developments.",
		},
		{
			image: "/card4.png",
			title: "SEPPUKU",
			description: "A taxation system wherein citizens selling $DAGA contribute 5% of the corresponding ETH to the DAGA staking contract as a sacrifice.",
		},
		{
			image: "/card5.png",
			title: "DAILY QUESTS",
			description: "Spread the word of $DAGA and participate in the quests for being elegible in the daily prizes.",
		},
		{
			image: "/card6.png",
			title: "CONQUER THE WORLD",
			description: "Take DAGA to Times Square or Burj Khalifa. Fight for a Tesla, a Lamborghini or fly to the space. There is no limits for $DAGA holders.",
		},
	];

	return (
		<Flex
			id="story"
			alignItems="center"
			bg="#FFFFFF"
			color="#000000"
			flexDirection="column"
			justifyContent="flex-start"
			w="full"
			pb={20}
			pt={{base: 20, lg: 0}}
		>
			<Text fontWeight="extrabold">THE STORY</Text>
			<Heading fontFamily="Silkscreen">WELCOME TO THE<br />WORLD OF DAGA</Heading>
			<SimpleGrid
				columns={{base: 1, lg: 3 }}
                gap={5}
                w="80%"
				py={12}
			>
				{cards.map((card: { image: string; title: string; description: string }, index: number) => {
					return (
						<Card
                            key={index}
							color="#000000"
							bg="#FFFFFF"
							borderRadius="10px"
							boxShadow="0px 4px 5px 0px #000000"
                            justifySelf="center"
                            p={0}
							pb={4}
							alignSelf="stretch"
						>
							<Image
								borderTopRadius="10px"
								src={card.image}
								mb={4}
								h="50%"
							/>
							<Flex
								flexDirection="column"
								gap={4}
								px={3}
								pt={10}
								pb={6}
							>
								<Heading fontSize="1.1rem" fontFamily="Silkscreen">{card.title}</Heading>
								<Text>{card.description}</Text>
							</Flex>
						</Card>
					);
				})}
			</SimpleGrid>
		</Flex>
	);
}
