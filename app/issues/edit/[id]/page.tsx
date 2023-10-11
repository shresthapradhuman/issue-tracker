import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

const EditIssuePage = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: params.id,
    },
  });
  if (!issue) notFound();
  return <IssueForm issue={issue} />;
};

export default EditIssuePage;
