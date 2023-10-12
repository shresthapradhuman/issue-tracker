import prisma from "@/prisma/client";
import { Flex, Heading } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import React from "react";
import IssueTable, { IssueQuery, columnNames } from "./IssueTable";
import { Status } from "@prisma/client";

interface Props {
  searchParams: IssueQuery;
}

const IssueListPage = async ({ searchParams }: Props) => {
  const session = await getServerSession();

  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;
  const where = { status };

  const orderBy = columnNames.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;

  const issues = await prisma.issue.findMany({
    where: {
      assignedToUser: {
        email: session?.user?.email,
      },
    },
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });
  return (
    <Flex direction="column" gap="3">
      <Heading size={"7"}>Assigned Issues</Heading>
      <IssueTable issues={issues} searchParams={searchParams} />
    </Flex>
  );
};

export default IssueListPage;
