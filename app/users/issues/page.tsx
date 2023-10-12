import prisma from "@/prisma/client";
import { Flex, Heading } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import React from "react";
import IssueTable from "./IssueTable";

const IssueListPage = async () => {
  const session = await getServerSession();
  const issues = await prisma.issue.findMany({
    where: {
      assignedToUser: {
        email: session?.user?.email,
      },
    },
  });
  return (
    <Flex direction="column" gap="3">
      <Heading size={"7"}>Assigned Issues</Heading>
      <IssueTable issues={issues} />
    </Flex>
  );
};

export default IssueListPage;
