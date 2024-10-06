"use client"
import { UserButton } from "@/features/auth/component/user-button";
import { useCreateWokspaceModel } from "@/features/store/use-create-workspace-model";

import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspace";
import { useCallback, useEffect, useMemo } from "react";

export default function Home() {

  const [open, setOpen] = useCreateWokspaceModel();

  const { data, isLoading } = useGetWorkspaces();

  const workspaceId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if(isLoading) return;

    if (workspaceId){
      console.log("Redirect to workspace");
    }else{
      console.log("open creation model");
    }

  },[workspaceId, isLoading]);

  return (
    <div>
      <UserButton/>
    </div>
  );
};
