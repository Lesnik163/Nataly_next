'use client'
import React from "react";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";
import { usePathname } from "next/navigation";

type CustomNavLinkProps = {
  children: React.ReactNode;
  to: string;
};
const CustomNavLink = ({ children, to }: CustomNavLinkProps) => {
  const match = usePathname() === `${to}`;

  return (
    <Link
      style={{ color: match ? "yellow" : "white" }}
      href={to}
    >
      <MuiLink component="button" sx={{ color: "inherit", textDecoration: match ? "underline" : "" }}>
        {children}
      </MuiLink>
    </Link>
  );
};

export default CustomNavLink;
