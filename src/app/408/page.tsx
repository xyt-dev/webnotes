"use client"
import DaisySidebar, { DaisySidebarLeaf, DaisySidebarNode as Node } from "@/components/DaisySidebar";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Chapter1 from "./DataStructure/Chapter1";
import Chapter2 from "./DataStructure/Chapter2";
import Chapter3 from "./DataStructure/Chapter3";
import Chapter4 from "./DataStructure/Chapter4";
import Chapter5 from "./DataStructure/Chapter5";
import Chapter6 from "./DataStructure/Chapter6";
import Chapter7 from "./DataStructure/Chapter7";
import Chapter8 from "./DataStructure/Chapter8";
import OSReview from "./OS/Review";

export default function DataStructurePage() {
  const pages: { [key: string]: React.ReactNode } = {
    "Chapter1": Chapter1(),
    "Chapter2": Chapter2(),
    "Chapter3": Chapter3(),
    "Chapter4": Chapter4(),
    "Chapter5": Chapter5(),
    "Chapter6": Chapter6(),
    "Chapter7": Chapter7(),
    "Chapter8": Chapter8(),
    "OSReview": OSReview()
  }
  const [pageRenderingName, setPageRenderingName] = useState("")
  useEffect(() => {
      const lastPage = localStorage.getItem("lastPage");
      lastPage && pages[lastPage] ? setPageRenderingName(lastPage) : setPageRenderingName("");
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
      <Node summary="数据结构">
        <Leaf pageName="Chapter1">绪论</Leaf>
        <Leaf pageName="Chapter2">线性表</Leaf>
        <Leaf pageName="Chapter3">栈、队列和数组</Leaf>
        <Leaf pageName="Chapter4">字符串</Leaf>
        <Leaf pageName="Chapter5">树</Leaf>
        <Leaf pageName="Chapter6">图</Leaf>
        <Leaf pageName="Chapter7">查找</Leaf>
        <Leaf pageName="Chapter8">排序</Leaf>
      </Node>
      <Leaf pageName="OSReview">操作系统</Leaf>
      <li><Link href='https://xy66.notion.site' legacyBehavior><a target="_blank" rel="noopener noreferrer">Notion笔记</a></Link></li>
    </DaisySidebar>
  )
}