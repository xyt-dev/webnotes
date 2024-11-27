import { useState, useRef, useEffect } from "react";

export default function EngWord({ children, word, wordInfo, highlight }: {children: React.ReactNode, word: string, wordInfo: {[key:string]:string[]}, highlight?: string}) {
  const [isVisible, setIsVisible] = useState(false);
  const [style, setStyle] = useState({});

  const ref = useRef<HTMLDivElement>(null); // 创建一个 ref 来引用弹出内容
  const parentRef = useRef<HTMLDivElement>(null); // 创建一个 ref 来引用弹出内容的父元素
  const updatePosition = () => {
    if (ref.current && parentRef.current) {
      const rect = ref.current.getBoundingClientRect(); // 获取元素的边界矩形
      const parentRect = parentRef.current.getBoundingClientRect(); // 获取父元素的边界矩形
      const viewportWidth = window.innerWidth; // 获取视口的宽度

      // 计算元素的右侧位置
      const elementWidth = rect.width
      const elementSupposedRight = parentRect.left +  elementWidth;

      // 计算新的 right 值
      let newRight = Math.min(viewportWidth - elementSupposedRight, 0); // 确保 right 不超过视口右侧
      let right = (newRight === 0 ? '100%' : `${elementWidth}px`); // 当前的 right 值
      setStyle({
        right: right,
      });
    }
  };

  const setVisibility = () => {
    setIsVisible(true);
    updatePosition();
  };

  useEffect(() => {
    updatePosition();

    // 处理点击外部区域关闭弹出内容
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };

    // 添加事件监听器
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', updatePosition); // 监听窗口大小变化

    return () => {
      // 清理事件监听器
      window.removeEventListener('resize', updatePosition); 
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  let highlightWordClass = ""
  let highlightIndex = -1;
  if (highlight !== undefined) {
    highlightWordClass = highlight.split(' ')[0]; // 词性
    highlightIndex = parseInt(highlight.split(' ')[1]); // 词义位置
  }

  return (
    <span className="relative" onClick={setVisibility}>
      <span className="cursor-pointer text-blue-500" ref={parentRef}>{children}</span>
      {isVisible && (
        <div ref={ref} className="absolute top-full right-full translate-x-full translate-y-1 bg-base-100 border border-base-300 p-[0.6rem] pl-[1rem] rounded-md shadow z-10 whitespace-nowrap" style={style}>
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