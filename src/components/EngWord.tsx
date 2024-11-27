import { useState, useRef, useEffect } from "react";

export default function EngWord({ children, word, wordInfo, highlight }: {children: React.ReactNode, word: string, wordInfo: {[key:string]:string[]}, highlight: string}) {
  const [isVisible, setIsVisible] = useState(false);

  const setVisibility = () => {
    setIsVisible(true);
  };

  const ref = useRef<HTMLDivElement>(null); // 创建一个 ref 来引用弹出内容
 // 处理点击外部区域关闭弹出内容
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };

    // 添加事件监听器
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // 清理事件监听器
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  const highlightWordClass = highlight.split(' ')[0]; // 词性
  const highlightIndex = parseInt(highlight.split(' ')[1]); // 词义位置

  return (
    <span className="relative" onClick={setVisibility}>
      <span className="cursor-pointer text-blue-500">{children}</span>
      {isVisible && (
        <div ref={ref} className="absolute top-full right-full translate-x-full translate-y-1 bg-base-100 border border-base-300 p-[0.6rem] pl-[1rem] rounded-md shadow z-10 whitespace-nowrap">
          <strong>{word}</strong> <br />
          {Object.entries(wordInfo).map(([wordClass, definitions]) => (
            <span key={wordClass} className="mb-2">
              <strong>{wordClass}. </strong>
              <span> 
                {definitions.map((definition, idx) => (
                  <span key={idx} className={idx === highlightIndex && wordClass === highlightWordClass ? 'text-rose-500' : ''}>
                    {definition};&nbsp;
                  </span>
                ))}
              </span><br />
            </span>
          ))}
        </div>
      )}
    </span>
  );
}