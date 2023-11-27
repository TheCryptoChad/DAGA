import { Button } from "@chakra-ui/button";

type NavbarButtonProps = {
	label: string;
	target: string;
	onClose?: () => void;
};

export default function NavbarButton(props: NavbarButtonProps): JSX.Element {
	const scrollToTarget = (): void => {
		if (props.onClose) props.onClose();

		const targetSection: HTMLElement | null = document.getElementById(props.target);

		if (targetSection) targetSection.scrollIntoView({ behavior: "smooth" });
	};

	return <Button color="#FFFFFF" fontFamily="Silkscreen" isDisabled={props.label === "Staking"} onClick={scrollToTarget} variant="link">{props.label.toUpperCase()}</Button>;
}
