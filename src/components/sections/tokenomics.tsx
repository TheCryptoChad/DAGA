import { Box, CircularProgress, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Tokenomics(): JSX.Element {
    const allocations: { color: string; percentage: number; description: string }[] = [
		{
			color: "#F2BD21",
			percentage: 85,
			description: "UNISWAP LP",
		},
		{
			color: "#F4981C",
			percentage: 5,
			description: "PARTNERSHIPS - CEX LIQUIDITY",
		},
		{
			color: "#F05D15",
			percentage: 6,
			description: "BUSINESS DEVELOPMENT",
		},
		{
			color: "#DF3413",
			percentage: 4,
			description: "MARKETING FUND",
		}
	];

	return (
		<Flex
            id="tokenomics"
            backgroundImage="/texture.png"
			backgroundPosition="center"
			backgroundSize="cover"
			color="#FFFFFF"
			flexDirection={{ base: "column", lg: "row" }}
			h={{base: "full", lg: "100vh" }}
            w="100vw"
			py={20}
		>
			<Text display={{base: "block", lg: "none" }} textAlign="center" fontWeight="extrabold">SUPPLY DISTRIBUTION</Text>
			<Heading display={{base: "block", lg: "none" }} textAlign="center" fontFamily="Silkscreen">
				TOKENOMICS
			</Heading>
			<Flex alignItems="center" flex={1} justifyContent="center">
                <Flex alignItems="center" borderRadius="50%" bg="#2C292E" justifyContent="center" h="350px" w="350px" position="relative">
                    <CircularProgress size="xs" trackColor="transparent" value={85} color="#F2BD21" position="absolute" zIndex={4} />
                    <CircularProgress size="xs" trackColor="transparent" value={90} color="#F4981C" position="absolute" zIndex={3}/>
                    <CircularProgress size="xs" trackColor="transparent" value={96} color="#F05D15" position="absolute" zIndex={2}/>
                    <CircularProgress size="xs" trackColor="transparent" value={100} color="#DF3413" position="absolute" zIndex={1}/>
                    <Image src="/tokenomic.png" w="50%" />
                </Flex>
			</Flex>
			<Flex
				alignItems="flex-start"
				flex={1}
				flexDirection="column"
				justifyContent="center"
				gap={5}
				alignSelf="center"
				py={{base: 8, lg: 0}}
			>
				<Text display={{base: "none", lg: "block" }} fontWeight="extrabold">SUPPLY DISTRIBUTION</Text>
				<Heading display={{base: "none", lg: "block" }} fontFamily="Silkscreen">
					TOKENOMICS
				</Heading>
                {allocations.map((allocation: {color: string; percentage: number; description: string}, index: number) => {
                    return (
                        <Flex
                            key={index}
                            alignItems="center"
                            justifyContent="space-evenly"
                            flexWrap="wrap"
							fontFamily="Silkscreen"
                            gap={2}
                        >
                            <Box h="15px" w="15px" bg={allocation.color}/>
                            <Text>{allocation.percentage}%</Text>
                            <Text flex={1}>{allocation.description}</Text>
                        </Flex>
                    )
                })}
			</Flex>
		</Flex>
	);
}
