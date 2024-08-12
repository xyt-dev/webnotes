'use client'
import React, { ReactNode, useEffect } from "react";
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; // 使用 GitHub 风格的样式

export default function DaisyCode({children}: {children?: ReactNode}) {
  useEffect(() => {
    // document.querySelectorAll('pre code').forEach((block) => {
    //   if (block instanceof HTMLElement)
    //     hljs.highlightElement(block);
    // });
  });
  const wrappedChildren = React.Children.map(children, (child, index) => (
    <pre key={index} data-prefix={index + 1} className="bg-[#fbf1c769] text-zinc-900 p-0 m-0">
      <code className="leading-normal" style={{ background: 'inherit', display: 'inline', padding: 0 }}>
        {child}
      </code>
    </pre>
  ));
  return (
    <div className="daisy-mockup-code bg-[#fbf1c769]">
      {wrappedChildren}     
    </div>
  )
}