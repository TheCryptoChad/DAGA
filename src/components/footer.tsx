import { Flex, Heading, IconButton, Image, SimpleGrid, Text } from "@chakra-ui/react";
import NavbarButton from "./navbar/navbar-button";
import { LinkIcon } from "@chakra-ui/icons";

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
            pt={14}
            pb={{base: 10, lg: 5}}
            alignItems="center"
            color="#FFFFFF"
        >
            <Flex flex={2} w="70%">
                <SimpleGrid columns={{base: 1, lg: 3}} gap={6} mb={8}>
                    <Flex gap={6} flexDirection="column" alignItems={{base: "center", lg: "flex-start"}}>
                        <Image src="/tokenomic.png" w="50%"/>
                        <Text>$DAGA is a coin with no intrinsic value or expectation of financial return. The coin is for entertainment purposes only.</Text>
                        <Heading display={{base: "none", lg: "block"}} fontWeight="extrabold" fontSize="1.2rem">Follow Us On</Heading>
                        <Flex display={{base: "none", lg: "flex"}} alignItems="center" gap={3}>
                            <IconButton isDisabled onClick={() => window.location.href = "https://www.twitter.com/DAGA"} aria-label="twitter" icon={<Image src="/twitter.jpg" h="full" borderRadius="4px" />} />
                            <IconButton isDisabled onClick={() => window.location.href = "https://www.t.me/DAGA"} aria-label="twitter" icon={<Image src="/telegram.jpg" h="full" borderRadius="4px" />} />
                        </Flex>
                    </Flex>

                    <Flex justifySelf="center" alignItems={{base: "center", lg: "flex-start"}} justifyContent="flex-start" flexDirection="column">
                        <Heading mb={5} fontWeight="extrabold" fontSize="1.2rem">Useful Links</Heading>
                        <SimpleGrid columns={{base: 2, lg: 1}} gap={3}>
                            {Object.entries(sections).map(([key, value]: [string, string], index: number) => {
                                return (
                                    <NavbarButton
                                        key={index}
                                        label={key}
                                        target={value}
                                    />
                                );
                            })}
                        </SimpleGrid>
                    </Flex>

                    <Flex alignItems={{base: "center", lg: "start"}} flexDirection="column">
                        <Heading mb={5} fontWeight="extrabold" fontSize="1.2rem">Contact Us</Heading>
                        <Flex alignItems="center" gap={3}>
                            <IconButton onClick={() => window.location.href = "mailto:info@dagacoin.xyz"} _hover={{ color: "#FFFFFF", backgroundColor: "gray.600" }} aria-label="contact" color="#000000" icon={<LinkIcon />} bg="#FFFFFF"  />
                            <Text>info@dagacoin.xyz</Text>
                        </Flex>
                    </Flex>

                    <Heading textAlign="center" display={{base: "block", lg: "none"}} fontWeight="extrabold" fontSize="1.2rem">Follow Us On</Heading>
                    <Flex justifyContent={{base: "center", lg: "flex-start"}} display={{base: "flex", lg: "none"}} gap={3}>
                        <IconButton isDisabled onClick={() => window.location.href = "https://www.twitter.com/DAGA"} aria-label="twitter" icon={<Image src="/twitter.jpg" h="full" borderRadius="4px" />} />
                        <IconButton isDisabled onClick={() => window.location.href = "https://www.t.me/DAGA"} aria-label="twitter" icon={<Image src="/telegram.jpg" h="full" borderRadius="4px" />} />
                    </Flex>
                </SimpleGrid>
            </Flex>
            <Flex alignItems="center" borderTop="solid #FFFFFF" pt={2} justifyContent="center" textAlign="center" flex={0.5} w="100%">
                2024 © All Rights Reserved By DAGA
            </Flex>
        </Flex>
    );
}