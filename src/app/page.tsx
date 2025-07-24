import { Suspense } from "react";

import { PRODUCTS } from "@/api/products";

import { Await } from "@/components/Await/Await";
import { Container } from "@/layouts/Container/Container";
import { Typography } from "@/components/Typography/Typography";
import { ProductCard } from "@/components/ProductCard/ProductCard";

import styles from "./page.module.scss";

export default async function Home() {
  const promise = PRODUCTS
    .getAllProducts()
    .then((res) => {
      return res.data;
    });

  return (
    <Container>
      <Typography
        as="h1"
        size="l"
      >
        LATEST PRODUCTS
      </Typography>
      {/**
        * In fallback, you can specify a component for displaying skeleton.
        * At the moment, the plain text is displayed.
        * This implementation to display the skills of working with `Streaming`.
        */}
      <Suspense fallback="Loading...">
        <Await promise={promise}>
          {(products) => (
            <section className={styles.grid}>
              {products.products.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                />
              ))}
            </section>
          )}
        </Await>
      </Suspense>
    </Container>
  );
}
