"use client"
import DaisySidebar, { DaisySidebarLeaf, DaisySidebarNode as Node } from "@/components/DaisySidebar";
import React, { useEffect, useState } from "react";
import EnglishAccumulation from "./pages/accumulation";
import ReadingLogic from "./pages/readingLogic";

export default function DaisyPages() {
  const pages:{[key: string]: React.ReactNode} = {
    "readingLogic": ReadingLogic(),
    "accumulation": EnglishAccumulation(),
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
    </DaisySidebar>
  )
}