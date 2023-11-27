import { type AppType } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { api } from "~/utils/api";

const MyApp: AppType = ({ Component, pageProps }) => {
	const theme = extendTheme({
		fonts: {
			html: "Poppins, sans-serif",
			body: "Poppins, sans-serif",
			heading: "Poppins, sans-serif",
		},
		styles: {
			global: {
				body: {
					overflowX: "hidden",
				}
			}
		}
	});

	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
};

export default api.withTRPC(MyApp);
