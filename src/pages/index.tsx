import Layout from "~/components/layout";
import Hero from "~/components/sections/hero";
import About from "~/components/sections/about";
import Story from "~/components/sections/story";
import Roadmap from "~/components/sections/roadmap";
import Tokenomics from "~/components/sections/tokenomics";

export default function Home() {
  //const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <Layout>
        <Hero />
        <About />
        <Story />
        <Roadmap />
        <Tokenomics />
    </Layout>
  );
}
