import { PRODUCTS } from "@/api/products";

import { Container } from "@/layouts/Container/Container";
import { Typography } from "@/components/Typography/Typography";
import { ProductCard } from "@/components/ProductCard/ProductCard";

import styles from "./page.module.scss";

export default async function Home() {
  const products = await PRODUCTS
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
      <section className={styles.grid}>
        {products.products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </section>
    </Container>
  );
}
