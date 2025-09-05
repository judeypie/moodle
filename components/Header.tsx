// import React, { useState } from 'react'

import { STUDENT_NUMBER, WEBSITE_NAME } from "../lib/constants";
import HamburgerMenu from "./HamburgerMenu";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <header
      data-testid="header"
      // We can now use Tailwind's dark mode variant directly for the border.
      className="border-b border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Hide student number on very small screens to prevent layout issues. */}
        <span className="text-sm font-mono text-gray-500 dark:text-gray-400 hidden sm:block">
          {STUDENT_NUMBER}
        </span>

        <h1 className="text-xl font-bold sm:text-2xl text-center">
          {WEBSITE_NAME}
        </h1>
        
        {/* Group the controls together for better layout on small screens */}
        <div className="flex items-center space-x-2">
            <ThemeSwitcher />
            <HamburgerMenu />
        </div>
      </div>
    </header>
  );
}
