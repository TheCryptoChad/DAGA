import { Fragment, ReactNode } from "react";
import Navbar from "./navbar/navbar";
import Head  from "next/head";
import { Box, Flex } from "@chakra-ui/react";

type LayoutProps = {
    children: ReactNode;
}

export default function Layout(props: LayoutProps): JSX.Element {
    return (
        <Fragment>
            <Head>
                <title>DAGA - Scalable Financial Gamified Token</title>
                <meta name="description" content="DAGA is a scalable, financial, gamified project." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Flex 
                as="main"
				flexDirection="column"
				height="100vh"
				width="100vw"
			>
				<Navbar />
				<Box flex={1}>
					{props.children}
				</Box>
			</Flex>
        </Fragment>
    );
}