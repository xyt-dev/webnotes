'use client'
import React, { ReactNode, useEffect } from "react";
import hljs from 'highlight.js';
// import 'highlight.js/styles/github.css'; // 使用 GitHub 风格的样式
import '@catppuccin/highlightjs/css/catppuccin-macchiato.css';

export default function DaisyCode({children, lang="json"}: {children?: ReactNode, lang?: string}) {
  const language = lang;
  useEffect(() => {
      hljs.highlightAll();
  }, []);
  const wrappedChildren = React.Children.map(children, (child, index) => (
    <pre key={index} data-prefix={index + 1} className="p-0 m-0" style={{ background: '#222436' }}>
      <code className={`leading-normal language-${language}`} style={{ background: '#222436', display: 'inline', padding: 0 }}>
        {child}
      </code>
    </pre>
  ));
  return (
    <div className="daisy-mockup-code" style={{ background: '#222436' }}>
      {wrappedChildren}     
    </div>
  )
}