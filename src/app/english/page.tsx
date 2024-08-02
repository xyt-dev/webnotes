"use client"
import DaisySidebar, { DaisySidebarLeaf, DaisySidebarNode as Node } from "@/components/DaisySidebar";
import React, { useState } from "react";
import EnglishAccumulation from "./pages/accumulation";
import ReadingLogic from "./pages/readingLogic";

export default function DaisyPages() {
  const [pageRenderingName, setPageRenderingName] = useState(() => {
    const lastPage = localStorage.getItem("lastPage");
    return lastPage ? lastPage : "readingLogic";
  });
  function Leaf({ children, pageName }: { children: string, pageName: string }) {
    return (
      <DaisySidebarLeaf setPageRendering={() => { setPageRenderingName(pageName); localStorage.setItem("lastPage", pageName) }} isSelected={pageRenderingName === pageName}>{children}</DaisySidebarLeaf>
    )
  }
  const pages:{[key: string]: React.ReactNode} = {
    "readingLogic": ReadingLogic(),
    "accumulation": EnglishAccumulation(),
  }
  return (
    <DaisySidebar page={pages[pageRenderingName]}>
      <Leaf pageName="readingLogic">Reading Logic</Leaf>
      <Leaf pageName="accumulation">Accumulation</Leaf>
    </DaisySidebar>
  )
}