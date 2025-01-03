"use client"
import DaisySidebar, { DaisySidebarLeaf, DaisySidebarNode as Node } from "@/components/DaisySidebar";
import React, { useEffect, useState } from "react";
import Accumulation from "./pages/Accumulation";
import ReadingLogic from "./pages/readingLogic";
import Link from "next/link";

export default function DaisyPages() {
  const pages:{[key: string]: React.ReactNode} = {
    "readingLogic": ReadingLogic(),
    "accumulation": Accumulation(),
  }
  const [pageRenderingName, setPageRenderingName] = useState("")
  useEffect(() => {
    const lastPage = localStorage.getItem("lastPage");
    lastPage && pages[lastPage] ? setPageRenderingName(lastPage) : setPageRenderingName("readingLogic");
  });
  useEffect(() => {
    if (pageRenderingName !== "") {
      const savedPosition = localStorage.getItem("scrollPosition");
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition, 10));
      }
      const handleScroll = () => {
        localStorage.setItem("scrollPosition", window.scrollY.toString());
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  })
  function Leaf({ children, pageName }: { children: string, pageName: string }) {
    return (
      <DaisySidebarLeaf setPageRendering={() => { setPageRenderingName(pageName); localStorage.setItem("lastPage", pageName) }} isSelected={pageRenderingName === pageName}>{children}</DaisySidebarLeaf>
    )
  }
  return (
    <DaisySidebar page={pages[pageRenderingName]}>
      <Leaf pageName="readingLogic">Reading Logic</Leaf>
      <Leaf pageName="accumulation">Accumulation</Leaf>
      <li><Link href='https://drive.google.com/file/d/1dkkugYWYS-0wE0ZVgsiNcBcz_Mjzcq9D/view?usp=drive_link' legacyBehavior><a target="_blank" rel="noopener noreferrer">红宝书</a></Link></li>
    </DaisySidebar>
  )
}