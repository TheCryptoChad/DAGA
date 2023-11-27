import { Button } from "@chakra-ui/button";
import { ArrowForwardIcon } from "@chakra-ui/icons";

type NavbarButtonProps = {
	hero?: boolean;
	label: string;
	target: string;
	onClose?: () => void;
};

export default function NavbarButton(props: NavbarButtonProps): JSX.Element {
	const scrollToTarget = (): void => {
		if (props.onClose) props.onClose();

		setTimeout(() => {
			const targetSection: HTMLElement | null = document.getElementById(props.target);

			if (targetSection) targetSection.scrollIntoView({ behavior: "smooth" });
		}, 300);
	};

	return <Button rightIcon={props.hero ? <ArrowForwardIcon /> : undefined} color="#FFFFFF" fontFamily="Silkscreen" isDisabled={props.label === "Staking"} onClick={scrollToTarget} variant="link">{props.label.toUpperCase()}</Button>;
}
