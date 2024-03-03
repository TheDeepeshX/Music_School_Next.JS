"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div  
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {/* Home */}
        <Link href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        {/* Cources */}
        <Link href="/">
          <MenuItem setActive={setActive} active={active} item="Cources">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/courses">All Cources</HoveredLink>
              <HoveredLink href="/">Basic Music Theory</HoveredLink>
              <HoveredLink href="/">Song Writing</HoveredLink>
              <HoveredLink href="/">Music Production</HoveredLink>
              <HoveredLink href="/">Advanced Composition</HoveredLink>
            </div>
          </MenuItem>
        </Link>

        {/* Contact US */}
        <Link href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact US"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
