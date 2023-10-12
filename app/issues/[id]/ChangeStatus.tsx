"use client";
import { Issue, Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const statuses: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const ChangeStatus = ({ issue }: { issue: Issue }) => {
  return (
    <>
      <Select.Root
        defaultValue={issue.status || "empty"}
        onValueChange={(status) => {
          axios
            .patch("/api/issues/" + issue.id, {
              status: status || null,
            })
            .then((res) => {
              if (res.status === 200) {
                const data = res.data;
                toast.success(`Issue is assigned to ${data.status}`);
              }
            })
            .catch(() => {
              toast.error("Changes could not be saved.");
            });
        }}
      >
        <Select.Trigger placeholder="Change Issue Status.." />
        <Select.Content>
          {statuses.map((status, idx) => (
            <Select.Item key={idx} value={status.value || "empty"}>
              {status.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  );
};

export default ChangeStatus;
