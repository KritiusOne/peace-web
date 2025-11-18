"use client"
import React from "react";
import ImageURL from "../../public/LOGO_Filled_orange.svg";
import Image from "next/image";
import { ButtonGroup } from "../ui/button-group";
import { Button } from "../ui/button";

export const Header: React.FC = () => {
  const navigationItems = [
    { name: "Create", href: "#" },
    { name: "Config", href: "#" },
  ];
  return (
    <header className="w-full fixed top-0 left-0 right-0 h-20 border-b border-neutral-700 flex items-center justify-between px-4 z-20 bg-neutral-1000">
      <div className="flex row items-center justify-center">
        <Image src={ImageURL} alt="Peace Logo" className="h-20 w-auto" />
      </div>
      <nav className="text-2xl font-bold">
        <ButtonGroup orientation="horizontal">
          {
            navigationItems.map((item) => (
              <Button
                key={item.name}
                onClick={()=> console.log(item.name)}
                className="px-4 py-2 hover:bg-neutral-800 rounded-md"
              > 
                {item.name}
              </Button>
            ))
          }
        </ButtonGroup>
      </nav>
    </header>
  )
}