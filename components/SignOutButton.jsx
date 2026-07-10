'use client';

import { signOut } from "@/lib/auth/auth-client";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";



export default function SignOutButton() {
    const router = useRouter();

    const handleSingOut = async () => {
        const res = await signOut();
        
        if (res.data) {
            router.push("/sign-in");
        } else {
            aler("Error signing out")
        }
    }
 

    return <DropdownMenuItem onClick={handleSingOut}>Log Out</DropdownMenuItem>;
}
