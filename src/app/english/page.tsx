"use client"
import DaisySidebar, { DaisySidebarLeaf, DaisySidebarNode as Node } from "@/components/DaisySidebar";
import React, { useState } from "react";
import EnglishAccumulation from "./pages/accumulation";
import ReadingLogic from "./pages/readingLogic";

export default function DaisyPages() {
  const [pageRenderingName, setPageRenderingName] = useState("readingLogic");
  const pages:{[key: string]: React.ReactNode} = {
    "readingLogic": ReadingLogic(),
    "accumulation": EnglishAccumulation(),
  }
  function Leaf({ children, pageName }: { children: string, pageName: string }) {
    return (
      <DaisySidebarLeaf setPageRendering={() => { setPageRenderingName(pageName) }} isSelected={pageRenderingName === pageName}>{children}</DaisySidebarLeaf>
    )
  }
  return (
    <DaisySidebar page={pages[pageRenderingName]}>
      <Node summary="English">
        <Leaf pageName="readingLogic">Reading Logic</Leaf>
        <Leaf pageName="accumulation">Accumulation</Leaf>
      </Node>
    </DaisySidebar>
  )
}