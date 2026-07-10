"use client";

import { Briefcase } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback } from './ui/avatar';
import SignOutButton from "../components/SignOutButton"
import { useSession } from "@/lib/auth/auth-client"


export default function NavBar() {
    const {data: session} = useSession();

    return (
        <nav className="border-b border-gray-200 bg-white ">
            <div className="container mx-auto flex h-16 items-center px-4 justify-between">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-semi-bold text-primary"
                >
                    <Briefcase />
                    Job Tracker
                </Link>
                <div className="flex items-center gap-6">
                    {session?.user ? (
                        <>
                            <Link href="/dashboard">
                                <Button
                                    variant="ghost"
                                    className="text-gray-700 hover:text-black text-lg"
                                >
                                    Dashboard
                                </Button>
                            </Link>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Button variant="ghost">
                                        <Avatar>
                                            <AvatarFallback className="bg-primary text-white">
                                                {session.user.name[0].toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56" align='end'>
                                    <DropdownMenuGroup>
                                        <DropdownMenuLabel className="font-normal">
                                            <div className='flex flex-col space-y-1'>
                                                <p className='text-sm font-medium leading-none'>{session.user.name}</p>
                                               <p className='text-xs text-muted-foreground leading-none'> {session.user.email}</p>
                                            </div>
                                        </DropdownMenuLabel>
                                       <SignOutButton/>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </>
                    ) : (
                        <>
                            <Link href="/sign-in">
                                <Button
                                    variant="ghost"
                                    className="text-gray-700 hover:text-black text-lg"
                                >
                                    Log In
                                </Button>
                            </Link>
                            <Link href="/sign-up">
                                <Button className="bg-primary hover:bg-primary/80 hover:text-black text-lg">
                                    Start for Free
                                </Button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
