import { CircularProgress, Flex, Heading, Image, Text } from '@chakra-ui/react';

export default function About(): JSX.Element {
	return (
		<Flex
			id='about'
			bg='#FFFFFF'
			color='#000000'
			flexDirection={{ base: 'column', lg: 'row' }}
			h={{ base: 'full', lg: '100vh' }}
			w='80%'
			gap={{ base: 8, lg: 0 }}
			pt={20}
		>
			<Flex
				alignItems='center'
				flex={1}
				justifyContent='center'
				position='relative'
			>
				<Image
					ml={-3}
					src='/about.jpg'
					borderRadius='20px'
					boxSize={80}
					boxShadow='-10px 20px 60px 0px #462B81'
					zIndex={2}
				/>
			</Flex>
			<Flex
				alignItems={{ base: 'center', lg: 'flex-start' }}
				flex={1}
				flexDirection='column'
				justifyContent='center'
				gap={5}
			>
				<Text
					fontWeight='1000'
					fontSize='1.5rem'
					fontFamily='Poppins'
				>
					ABOUT
				</Text>
				<Heading fontFamily='Silkscreen'>
					$DAGA IS A
					<br />
					REVOLUTION.
				</Heading>
				<Text fontWeight='bold'>
					DAGA is a scalable gamified project powered by AI that involves every holder in a vibrant web3 experience.
					<br />
					$DAGA is a token allocated on Ethereum, with a total supply of 100B. ready to change the crypto space. Become a DAGA citizen buying the token and enter an
					scalable ecosystem with no limits.
				</Text>
			</Flex>
		</Flex>
	);
}
