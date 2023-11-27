import Layout from "~/components/layout";
import Hero from "~/components/sections/hero";
import About from "~/components/sections/about";
import Story from "~/components/sections/story";
import Roadmap from "~/components/sections/roadmap";
import Tokenomics from "~/components/sections/tokenomics";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  //const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <Layout>
        <Flex alignItems="center" bg="#FFFFFF" justifyContent="flex-start" flexDirection="column" w="100%">
          <Hero />
          <About />
          <Story />
          <Roadmap />
          <Tokenomics />
        </Flex>
    </Layout>
  );
}
