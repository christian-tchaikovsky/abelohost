"use client";

import Image from "next/image";

import type { Product } from "@/api/_types/Products";

import { Flex } from "@/layouts/Flex/Flex";
import { Icon } from "@/components/Icons/Icon";
import { Anchor } from "@/components/Anchor/Anchor";
import { Button } from "@/components/Button/Button";
import { Typography } from "@/components/Typography/Typography";
import { useUserContext } from "@/contexts/UserContext/UserContext";

import styles from "./ProductCard.module.scss";

export type Props = Product;

const FORMATTER = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

export const ProductCard = ({
  title,
  category,
  price: _price,
  thumbnail,
}: Props) => {
  const isAuthenticated = useUserContext((state) => state.isAuthenticated);

  const price = FORMATTER.format(_price / 100);

  return (
    <article>
      <Anchor
        href="#"
        rel="bookmark"
        className={styles["product-card"]}
      >
        <header className={styles.header}>
          {isAuthenticated && (
            <Button
              className={styles.button}
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              <Flex
                space="s"
                align="align-center"
              >
                <Typography
                  as="span"
                  color="secondary"
                >
                  Add to cart
                </Typography>
                <Icon
                  icon="Plus"
                  color="secondary"
                />
              </Flex>
            </Button>
          )}
          <Image
            width={600}
            height={600}
            quality={100}
            src={thumbnail}
            alt={`Изображение товара ${title}`}
          />
        </header>
        <Flex
          space="s"
          direction="column"
          className={styles.info}
        >
          <Typography
            as="h2"
            title={title}
            className={styles.title}
          >
            {title}
          </Typography>
          <Typography>
            Category:&nbsp;
            <Typography as="span">{category.toUpperCase()}</Typography>
          </Typography>
          <Typography>
            Price:&nbsp;
            <Typography as="span">{price}</Typography>
          </Typography>
        </Flex>
      </Anchor>
    </article>
  );
};
