"use client";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import { useRouter } from "next/navigation";
import { Newfed } from "@/components/Newfed/Newfed";

export default function Page() {
  const router = useRouter();
  return (
    <ProtectedRoute router={router}>
      {" "}
      <>
        <div className="w-screen h-screen p-8 flex items-start justify-center">
          <Newfed />
        </div>
      </>
    </ProtectedRoute>
  );
}
