"use client"
import { UserButton } from "@/features/auth/component/user-button";
import { useAuthActions } from "@convex-dev/auth/react";

export default function Home() {

  const {signOut} = useAuthActions();
  return (
    <div>
      Login
      <UserButton/>
    </div>
  );
};
