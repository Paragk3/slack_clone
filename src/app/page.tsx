"use client"
import { UserButton } from "@/features/auth/component/user-button";
import { useCreateWokspaceModel } from "@/features/workspaces/store/use-create-workspace-model";

import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspace";
import {  useEffect, useMemo } from "react";

export default function Home() {

  const [open, setOpen] = useCreateWokspaceModel();

  const { data, isLoading } = useGetWorkspaces();

  const workspaceId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if(isLoading) return;

    if (workspaceId){
      console.log("Redirect to workspace");
    }else if(!open){
      setOpen(true);
    }

  },[workspaceId, isLoading, open, setOpen]);

  return (
    <div>
      <UserButton/>
    </div>
  );
};
