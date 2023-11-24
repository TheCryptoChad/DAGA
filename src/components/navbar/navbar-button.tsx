import { Button } from "@chakra-ui/button";
import { ReactNode } from "react";

type NavbarButtonProps = {
	label: string;
	target: string;
};

export default function NavbarButton(props: NavbarButtonProps): JSX.Element {
	const scrollToTarget = (): void => {
		const targetSection: HTMLElement | null = document.getElementById(props.target);

		if (targetSection) targetSection.scrollIntoView({ behavior: "smooth" });
	};

	return <Button color="#FFFFFF" fontFamily="Silkscreen" onClick={scrollToTarget} variant="link">{props.label.toUpperCase()}</Button>;
}
