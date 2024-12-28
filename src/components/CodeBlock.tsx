'use client'
import React, { useEffect, useState } from 'react';
import hljs from 'highlight.js';
import '@catppuccin/highlightjs/css/catppuccin-mocha.css';

const CodeBlock = ({ children, inline, className, lang = 'javascript' }: { children: string, inline?:boolean, className?:string, lang?: string }) => {
  const [highlightedCode, setHighlightedCode] = useState<string>('');
  const language = lang;
  const display = !inline ? "block" : "inline";

  useEffect(() => {
    const result = hljs.highlight(children, {language: language});
    setHighlightedCode(result.value);
  }, [children, language]);


  if (display === "block") {
    // 将高亮后的代码按行分割
    const codeLines = highlightedCode.split('\n');
    return (
      <pre className={`p-2 m-0 bg-[#222436] text-[#CAD3F5] block ${className}`} style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
        {codeLines.map((line, index) => (
          <div key={index} className="flex">
            {/* 显示行号 */}
            <span className="text-[#8087A2] w-[2.6rem] pr-[1rem] text-right select-none">{index + 1}</span>
            {/* 渲染高亮后的代码 */}
            <code className={`leading-normal language-${language}`} style={{ background: '#222436' }} dangerouslySetInnerHTML={{ __html: line }} />
          </div>
        ))}
      </pre>
    );
  } else {
    return (
      <pre className={`p-[0.36rem] pl-2 pr-2 m-0 bg-[#222436] inline ${className}`} >
        <code className={`leading-normal text-base language-${language} bg-[#222436]`} 
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </pre>
    );
  }
};

export default CodeBlock;