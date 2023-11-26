import { Fragment, ReactNode } from "react";
import Navbar from "./navbar/navbar";
import Head  from "next/head";
import { Box, Flex } from "@chakra-ui/react";
import Footer from "./footer";

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
                <link href='https://fonts.googleapis.com/css?family=Silkscreen' rel='stylesheet' />
                <link href="https://fonts.cdnfonts.com/css/namco" rel="stylesheet" />
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
                <Footer />
			</Flex>
        </Fragment>
    );
}