import { Button } from "@chakra-ui/react";
import { useState } from "react";

export default function WalletButton(): JSX.Element {
    const [wallet] = useState<string>("");

    return(
        <Button _hover={{ bg: "gray.700", color: "#FFF900" }} bg="#FFF900" borderRadius="20px" color="#000000" fontFamily="Silkscreen" isDisabled variant="solid">
            {wallet ? wallet : "Connect"}
        </Button>
    );
}