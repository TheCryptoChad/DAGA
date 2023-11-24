import { Flex, Image } from "@chakra-ui/react";
import NavbarButton from "./navbar-button";
import WalletButton from "./wallet-button";

export default function Navbar(): JSX.Element {
	const sections: { [key: string]: string } = {
		About: "about",
		"The Game": "game",
		"The Story": "story",
		Tokenomics: "tokenomics",
		Staking: "staking",
	};

	return (
		<Flex
			bgColor="#000000"
			alignItems="center"
			justifyContent="space-evenly"
			position="fixed"
			w="100%"
			zIndex={2}
		>
			<Image
				_hover={{ cursor: "pointer" }}
				onClick={() => {
					const targetSection: HTMLElement | null = document.getElementById("hero");
					if (targetSection) targetSection.scrollIntoView({ behavior: "smooth" });
				}}
				src="/logo.png"
				h="80%"
				w="auto"
			/>
			<Flex
				alignItems="center"
				flex={0.6}
				justifyContent="space-around"
				py={5}
			>
				{Object.entries(sections).map(([key, value]: [string, string], index: number) => {
					return (
						<NavbarButton
							key={index}
							label={key}
							target={value}
						/>
					);
				})}
				<WalletButton />
			</Flex>
		</Flex>
	);
}
