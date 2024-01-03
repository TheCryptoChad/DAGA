import { Box, CircularProgress, Flex, Heading, Image, Text } from '@chakra-ui/react';

export default function Tokenomics(): JSX.Element {
	const allocations: { color: string; percentage: number; description: string }[] = [
		{
			color: '#EFBD40',
			percentage: 50,
			description: 'UNISWAP LP',
		},
		{
			color: '#F09937',
			percentage: 10,
			description: 'SEED ROUND',
		},
		{
			color: '#F05D15',
			percentage: 20,
			description: 'COMMUNITY ROUND',
		},
		{
			color: '#DA3B26',
			percentage: 5,
			description: 'PARTNERSHIPS - CEX LIQUIDITY',
		},
		{
			color: '#A62B17',
			percentage: 8,
			description: 'BUSINESS DEVELOPMENT',
		},
		{
			color: '#7E1E0F',
			percentage: 7,
			description: 'MARKETING FUND',
		},
	];

	return (
		<Flex
			id='tokenomics'
			backgroundImage='/texture.png'
			backgroundPosition='center'
			backgroundSize='cover'
			color='#FFFFFF'
			flexDirection={{ base: 'column', lg: 'row' }}
			h={{ base: 'full', lg: '100vh' }}
			w='100vw'
			py={20}
		>
			<Text
				display={{ base: 'block', lg: 'none' }}
				textAlign='center'
				fontWeight='1000'
				fontFamily='Poppins'
				fontSize='1.5rem'
			>
				SUPPLY DISTRIBUTION
			</Text>
			<Heading
				display={{ base: 'block', lg: 'none' }}
				textAlign='center'
				fontFamily='Silkscreen'
			>
				TOKENOMICS
			</Heading>
			<Flex
				alignItems='center'
				flex={1}
				justifyContent='center'
			>
				<Flex
					alignItems='center'
					borderRadius='50%'
					bg='#2C292E'
					justifyContent='center'
					h='350px'
					w='350px'
					position='relative'
				>
					<CircularProgress
						size='xs'
						trackColor='transparent'
						value={50}
						color='#EFBD40'
						position='absolute'
						zIndex={6}
					/>
					<CircularProgress
						size='xs'
						trackColor='transparent'
						value={60}
						color='#F09937'
						position='absolute'
						zIndex={5}
					/>
					<CircularProgress
						size='xs'
						trackColor='transparent'
						value={80}
						color='#F05D15'
						position='absolute'
						zIndex={4}
					/>
					<CircularProgress
						size='xs'
						trackColor='transparent'
						value={85}
						color='#DA3B26'
						position='absolute'
						zIndex={3}
					/>
					<CircularProgress
						size='xs'
						trackColor='transparent'
						value={93}
						color='#A62B17'
						position='absolute'
						zIndex={2}
					/>
					<CircularProgress
						size='xs'
						trackColor='transparent'
						value={100}
						color='#7E1E0F'
						position='absolute'
						zIndex={1}
					/>
					<Image
						src='/tokenomic.png'
						w='50%'
					/>
				</Flex>
			</Flex>
			<Flex
				alignItems='flex-start'
				flex={1}
				flexDirection='column'
				justifyContent='center'
				gap={5}
				alignSelf='center'
				py={{ base: 8, lg: 0 }}
			>
				<Text
					display={{ base: 'none', lg: 'block' }}
					fontWeight='extrabold'
				>
					SUPPLY DISTRIBUTION
				</Text>
				<Heading
					display={{ base: 'none', lg: 'block' }}
					fontFamily='Silkscreen'
				>
					TOKENOMICS
				</Heading>
				{allocations.map((allocation: { color: string; percentage: number; description: string }, index: number) => {
					return (
						<Flex
							key={index}
							alignItems='center'
							justifyContent='space-evenly'
							flexWrap='wrap'
							fontFamily='Silkscreen'
							gap={5}
						>
							<Box
								h='15px'
								w='15px'
								bg={allocation.color}
							/>
							<Box>
								{allocation.percentage < 10 && (
									<Text
										display='inline'
										textColor='transparent'
									>
										0
									</Text>
								)}
								{allocation.percentage}%
							</Box>
							<Text flex={1}>{allocation.description}</Text>
						</Flex>
					);
				})}
			</Flex>
		</Flex>
	);
}
