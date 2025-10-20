"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { links } from "@/components/sections/navbar/links";

function NavLinks() {
  return (
    <div>
      {links.map((link) => (
        <Link key={link.href} href={link.href} className={buttonVariants({ variant: "ghost" })}>
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export default NavLinks;
