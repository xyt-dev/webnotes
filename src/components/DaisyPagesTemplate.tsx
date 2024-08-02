"use client"
import DaisySidebar, { DaisySidebarLeaf, DaisySidebarNode as Node } from "@/components/DaisySidebar";
import React, { useState } from "react";

export default function DaisyPages() {
  const [pageRenderingName, setPageRenderingName] = useState("$");
  const pages: { [key: string]: React.ReactNode } = {
    "$": "$",
  }
  function Leaf({ children, pageName }: { children: string, pageName: string }) {
    return (
      <DaisySidebarLeaf setPageRendering={() => { setPageRenderingName(pageName) }} isSelected={pageRenderingName === pageName}>{children}</DaisySidebarLeaf>
    )
  }
  return (
    <DaisySidebar page={pages[pageRenderingName]}>
      <Node summary="$">
        <Leaf pageName="$">$</Leaf>
      </Node>
    </DaisySidebar>
  )
}