"use client"
import DaisySidebar, { DaisySidebarLeaf as Leaf, DaisySidebarNode as Node } from "@/components/DaisySidebar";
import React, { useState } from "react";
import EnglishAccumulation from "./pages/accumulation";
import ReadingLogic from "./pages/readingLogic";

export default function DaisyPages() {
  const [pageRenderingName, setPageRenderingName] = useState("readingLogic");
  const pages:{[key: string]: React.ReactNode} = {
    "readingLogic": ReadingLogic(),
    "accumulation": EnglishAccumulation(),
  }
  return (
    <DaisySidebar page={pages[pageRenderingName]}>
      <Node summary="English">
        <Leaf setPageRendering={() => {setPageRenderingName("readingLogic")}}>Reading Logic</Leaf>
        <Leaf setPageRendering={() => {setPageRenderingName("accumulation")}}>Accumulation</Leaf>
      </Node>
    </DaisySidebar>
  )
}