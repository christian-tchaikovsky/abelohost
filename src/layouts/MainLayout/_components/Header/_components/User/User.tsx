"use client";

import Link from "next/link";
import { match } from "ts-pattern";

import { ROUTES } from "@/constants/routes";
import { Flex } from "@/layouts/Flex/Flex";
import { Icon } from "@/components/Icons/Icon";
import { Anchor } from "@/components/Anchor/Anchor";
import { Typography } from "@/components/Typography/Typography";
import { useUserContext } from "@/contexts/UserContext/UserContext";
import { removeTokens } from "@/services/TokenStorageService/TokenStorageService";

export const User = () => {
  const user = useUserContext();

  return (
    <div>
      {match(user)
        .with({ isAuthenticated: true }, () => (
          <Anchor
            as="button"
            onClick={async () => {
              await removeTokens();
              user.setData(null);
            }}
          >
            <Flex
              space="s"
              align="align-center"
            >
              <Typography
                as="span"
                color="danger"
              >
                LOGOUT
              </Typography>
              <Icon
                icon="Logout"
                color="danger"
              />
            </Flex>
          </Anchor>
        ))
        .otherwise(() => (
          <Anchor
            as={Link}
            href={ROUTES.login.path}
          >
            <Flex
              space="s"
              align="align-center"
            >
              <Typography
                as="span"
                color="secondary"
              >
                LOGIN
              </Typography>
              <Icon
                icon="Login"
                color="secondary"
              />
            </Flex>
          </Anchor>
        ))}
    </div>
  );
};
