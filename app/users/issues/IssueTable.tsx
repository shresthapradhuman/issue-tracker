"use client";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Issue } from "@prisma/client";
import { Table, TableColumnHeaderCell } from "@radix-ui/themes";
import React from "react";

const IssueTable = ({ issues }: { issues: Issue[] }) => {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <TableColumnHeaderCell>Title</TableColumnHeaderCell>
          <TableColumnHeaderCell>Status</TableColumnHeaderCell>
          <TableColumnHeaderCell>Created At</TableColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {issues.map((issue) => (
          <Table.Row key={issue.id}>
            <Table.Cell>{issue.title}</Table.Cell>
            <Table.Cell>
              <IssueStatusBadge status={issue.status} />
            </Table.Cell>
            <Table.Cell>{issue.createdAt.toDateString()}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default IssueTable;
