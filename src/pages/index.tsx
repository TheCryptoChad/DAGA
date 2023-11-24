import { api } from "~/utils/api";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";

import Layout from "~/components/layout";
import NavbarButton from "~/components/navbar/navbar-button";
import { Fragment } from "react";
import Hero from "~/components/sections/hero";
import About from "~/components/sections/about";

export default function Home() {
  //const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <Layout>
      <Fragment>
        <Hero />
        <About />
      </Fragment>
    </Layout>
  );
}
