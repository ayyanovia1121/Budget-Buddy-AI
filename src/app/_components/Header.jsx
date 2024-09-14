'use client'

import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from 'react'

const Header = () => {
  const {user, isSignedIn} = useUser();
  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <div className="flex flex-row items-center">
        {/* <Image src='/logo.png' width={40} height={25} alt='logo' /> */}
        <span className="text-primary font-bold text-xl">BudgetBuddy.ai</span>
      </div>

      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex gap-3 items-center">
          <Link href="/dashboard">
            <Button variant="outline" className="rounded-full">Dashboard</Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="default" className="rounded-full">Get Started</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header