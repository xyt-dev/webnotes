"use client"
import DaisySidebar, { DaisySidebarLeaf, DaisySidebarNode as Node } from "@/components/DaisySidebar";
import React, { useState } from "react";

export default function DaisyPages() {
  const [pageRenderingName, setPageRenderingName] = useState("$");
  function Leaf({ children, pageName }: { children: string, pageName: string }) {
    return (
      <DaisySidebarLeaf setPageRendering={() => { setPageRenderingName(pageName) }} isSelected={pageRenderingName === pageName}>{children}</DaisySidebarLeaf>
    )
  }
  const pages: { [key: string]: React.ReactNode } = {
    "$": "$",
  }
  return (
    <DaisySidebar page={pages[pageRenderingName]}>
      <Node summary="$">
        <Leaf pageName="$">$</Leaf>
      </Node>
    </DaisySidebar>
  )
}