import React from "react";
import NightDay from "./NightDay";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800">
      <h1 className="text-xl font-bold dark:text-white ml-20">Where in the world?</h1>
      <NightDay />
    </header>
  );
}