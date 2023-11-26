import { Flex, Heading, IconButton, Image, SimpleGrid, Text } from "@chakra-ui/react";
import NavbarButton from "./navbar/navbar-button";

export default function Footer(): JSX.Element {
    const sections: { [key: string]: string } = {
        "Home": "hero",
		"About": "about",
		"The Story": "story",
		"Roadmap": "roadmap",
		"Tokenomics": "tokenomics",
		"Staking": "staking",
	};

    return(
        <Flex
            bg="#000000"
            flexDirection="column"
            py={2}
            alignItems="center"
        >
            <Flex flex={2} w="70%">
                <SimpleGrid columns={3} gap={4}>
                    <Flex flexDirection="column">
                        <Image src="/tokenomic.png" />
                        <Text>$DAGA is a coin with no intrinsic value or expectation of financial return. The coin is for entertainment purposes only.</Text>
                        <Heading>Follow Us On</Heading>
                        <Flex>
                        </Flex>
                    </Flex>
                    <Flex flexDirection="column">
                        <Heading>Useful Links</Heading>
                        {Object.entries(sections).map(([key, value]: [string, string], index: number) => {
                            return (
                                <NavbarButton
                                    key={index}
                                    label={key}
                                    target={value}
                                />
                            );
                        })}
                    </Flex>
                    <Flex>
                        <Heading>Contact Us</Heading>

                    </Flex>
                </SimpleGrid>
            </Flex>
            <Flex alignItems="center" borderTop="solid #FFFFFF" justifyContent="center" textAlign="center" flex={0.5} w="100%">
                2024 © All Rights Reserved By DAGA
            </Flex>
        </Flex>
    );
}