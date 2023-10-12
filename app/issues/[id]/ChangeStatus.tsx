"use client";
import { Issue, Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import React from "react";

const statuses: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const ChangeStatus = ({ issue }: { issue: Issue }) => {
  return (
    <Select.Root defaultValue={issue.status || "empty"}>
      <Select.Trigger placeholder="Change Issue Status.." />
      <Select.Content>
        {statuses.map((status, idx) => (
          <Select.Item key={idx} value={status.value || "empty"}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default ChangeStatus;
