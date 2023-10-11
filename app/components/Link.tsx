import React from "react";
import NextLink from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";

const Link = ({ href, children }: { href: string; children: string }) => {
  return (
    <NextLink href={href}>
      <RadixLink>{children}</RadixLink>
    </NextLink>
  );
};

export default Link;
