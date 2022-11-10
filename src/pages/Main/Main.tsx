import { Layout } from "@app/shared/Layout/Layout";
import { Bullets } from "./Bullets";
import { Form } from "./Form";
import { Hero } from "./Hero";

export function Main() {
  return (
    <Layout>
      <Hero />
      <Bullets />
      <Form />
    </Layout>

  );
}
