import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, Flex, IconButton, Image, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavbarButton from "./navbar-button";
import WalletButton from "./wallet-button";

export default function Navbar(): JSX.Element {
	const { isOpen, onOpen, onClose } = useDisclosure()

	const sections: { [key: string]: string } = {
		"About": "about",
		"The Story": "story",
		"Roadmap": "roadmap",
		"Tokenomics": "tokenomics",
		"Staking": "staking",
	};

	return (
		<Flex
			bgColor="#000000"
			alignItems="center"
			justifyContent={{base: "space-between", lg:"space-evenly"}}
			position="fixed"
			w="100%"
			zIndex={10}
			py={{base: 4, lg: 2}}
		>
			<Image
				_hover={{ cursor: "pointer" }}
				onClick={() => {
					const targetSection: HTMLElement | null = document.getElementById("hero");
					if (targetSection) targetSection.scrollIntoView({ behavior: "smooth" });
				}}
				src="/logo.svg"
				h="100%"
				w={{base: "25%", lg: "10%"}}
				ml={{base: 4, lg: 2}}
			/>
			<Flex
				alignItems="center"
				flex={0.6}
				justifyContent="space-around"
				py={5}
				display={{base: "none", lg: "flex"}}
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
			<IconButton _hover={{color: "#000000", backgroundColor: "#FFF900" }} aria-label="menu" color="#FFF900" icon={<HamburgerIcon />} onClick={onOpen} display={{base: "block", lg: "none"}} mr={4} bg="#000000" border="solid #FFF900" />
			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={onClose}
				size="full"
			>
				<DrawerContent bg="#000000">
					<Image
						_hover={{ cursor: "pointer" }}
						onClick={() => {
							onClose();
							const targetSection: HTMLElement | null = document.getElementById("hero");
							if (targetSection) targetSection.scrollIntoView({ behavior: "smooth" });
						}}
						src="/logo.svg"
						h="auto"
						w="25%"
						mt={4}
						ml={4}
					/>
					<DrawerCloseButton />
					<DrawerBody as={Flex} alignItems="space-between" justifyContent="center">
						<Flex
							alignItems="center"
							flexDirection="column"
							justifyContent="space-around"
							gap={14}
						>
							<Flex
								alignItems="center"
								flexDirection="column"
								justifyContent="space-around"
								gap={14}
							>
								{Object.entries(sections).map(([key, value]: [string, string], index: number) => {
									return (
										<NavbarButton
											key={index}
											label={key}
											target={value}
											onClose={onClose}
										/>
									);
								})}
							<WalletButton />
							</Flex>
						</Flex>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Flex>
	);
}
