"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ text, href, language }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Link href={href} className={`flex-grow text-gray-600 bg-gray-50 rounded-lg p-2 text-center hover:bg-gray-100 text-sm ${pathname.includes(href) && pathname !== "/" ? "text-blue-500" : null}`}>
      {text[language]}
    </Link>
  );
};

export default MenuLink;
