import Latex from "react-latex-next"
import 'katex/dist/katex.min.css'; // 导入 KaTeX 样式
import Space from "@/components/Space";

function Img({src, width, align}: { src: string, width?: number, align?: string }) {
  if (align !== "left") align = "mx-auto"
  return (
     <img className={`mt-1 mb-1 ${align}`} src={src} alt="image" width={width} />
  ) 
}

export default function Chapter2() {
  return (
    <div className="prose daisy-prose p-6 max-w-[1300px]">
      <h2 className="text-3xl">字符串</h2>
      <h3>KMP算法</h3>
        <span className="text-[#AF00DC] text-lg">算法原理: </span>(自己想的) 对于主串与模式串已匹配的部分, 存在其前缀匹配其后缀(没有匹配的前后缀则定义为匹配的前后缀长度=0). 
      如果先求出这些匹配的前缀和后缀子串, 之后匹配时只需要<strong>从长至短依次</strong>用主串中已匹配部分的后缀对齐其在模式串中的前缀,
      即可贪心地匹配下一个字符(在匹配下一个字符前匹配尽可能多的字符), 这些前后缀对齐位置包含了主串和模式串匹配该下一个字符的所有可能对齐位置. <br />
      <blockquote className="m-1">
        前缀: 不包含最后一个字符的任意子串; <br />
        后缀: 不包含第一个字符的任意子串. <br />
      </blockquote>
        主串与模式串已匹配的部分显然是模式串的前缀, 所以只需找到模式串所有长度(1 ~ m-1)的前缀子串其中的所有前后缀匹配情况. 于是用模式串 P2 从模式串 P1 的第二个字符开始尽可能长的匹配 P1, 这样即可获得 P1 中每个字符位置所能匹配的最长 P2 前缀子串. 
      又该前缀子串本身是更短的 P1 的前缀子串, 于是 P1 中该前缀子串末尾位置在 P2 中所能匹配的最长前缀子串已知, 同时这也是 P1 在之前位置所能匹配的第二长前缀子串, 以此类推, 只要知道 P1 在一个字符位置所能匹配的最长 P2 前缀, 所有长度的匹配前缀就均可得知.<br />
        记录 P1 各字符位置所匹配的最长 P2 前缀其末尾位置在的 P2 中的<strong>位序</strong> k (无匹配前缀则记k=0). 模式串与主串下一个字符不匹配时: <br />
        模式串右移位数 = 已匹配的字符数 - k, 即 j' = j - 模式串右移位数 = j - (j - k) = k. (j, j' 指向模式串中匹配的最后一个字符位置) [这也适用于 P1 匹配 P2 前缀的过程] <br />
        可以将各k值组成的数组右移一位(模式串最后一个位置匹配成功不需要记录k, 数组第一个位置补充k=-1), 此时 j, j' 指向模式串中尝试与主串下一个字符匹配的位置, k 为对应模式串字符与主串下一个字符不匹配时 j 应移动到的<strong>数组下标</strong>而非位序,
      k=-1 表示模式串的第一个字符与主串下一个字符不匹配时模式串要右移一位. (可以在此基础上再将各 k 值加 1 表示为位序) <br />
      <br />
      <span className="text-[#AF00DC] text-lg">算法实现: </span>
      {Img({src: "Images/408/DataStructure/kmp算法实现.png", width: 760, align: "left"})}
      <p>
        <strong>例题: </strong><br />
        计算串'ababaaababaa'的next数组和nextval数组.
        {Img({src: "Images/408/DataStructure/Exercises/4_7.png", width: 700, align: "left"})}
        也可以根据上述算法计算, 得到next数组为: 011234223456, nextval数组为: 010104210104.
      </p>
    </div>
  )
}