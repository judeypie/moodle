"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const NAV_STORAGE_KEY = "activeNavTab";

export function useActiveNav() {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname);

  useEffect(() => {
    const lastPath = localStorage.getItem(NAV_STORAGE_KEY);
    if (lastPath) {
      setActivePath(lastPath);
    }
  }, []);

  useEffect(() => {
    setActivePath(pathname);
    localStorage.setItem(NAV_STORAGE_KEY, pathname);
  }, [pathname]); // This runs whenever the 'pathname' variable changes.

  return activePath;
}
