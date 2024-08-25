import DaisyProsePage from "@/components/DaisyProsePage"
function Img({ src, width }: { src: string, width?: number }) {
  return (
    <img className="m-1 mx-auto" src={src} alt="" width={width} />
  )
}

export default function LatexSymbols() {
  return (
    <DaisyProsePage>
      <h1 className="text-center font-semibold ">Latex Symbols</h1>
      <h3>1. 操作符</h3>
      <Img src="Images/Math/latexsymbols/1.png" />
      <h3>2. 关系符</h3>
      <Img src="Images/Math/latexsymbols/2_1.png" />
      <p>只要将not放在符号前面或者在 \ 和单词之间插入一个 n ，就可以构成许多关系符的否定形式。</p>
      <p>以部分关系符的否定形式为例: </p>
      <Img src="Images/Math/latexsymbols/2_2.png" />
      <h3>3. 希腊字母</h3>
      <Img src="Images/Math/latexsymbols/3_1.png" />
      <Img src="Images/Math/latexsymbols/3_2.png" />
      <h3>4. 箭头</h3>
      <Img src="Images/Math/latexsymbols/4.png" />
      <h3>5. 点</h3>
      <Img src="Images/Math/latexsymbols/5.png" />
      <h3>6. 上标</h3>
      <Img src="Images/Math/latexsymbols/6.png" />
      <h3>7. 其他</h3>
      <Img src="Images/Math/latexsymbols/7.png" />
      <h3>8. 命令符</h3>
      <Img src="Images/Math/latexsymbols/8.png" />
      <h3>9. 跨行跨列符号</h3>
      <Img src="Images/Math/latexsymbols/9_1.png" />
      <Img src="Images/Math/latexsymbols/9_2.png" />
      <Img src="Images/Math/latexsymbols/9_3.png" />
      <Img src="Images/Math/latexsymbols/quad.png" />
      <div className="mb-12"></div>
    </DaisyProsePage>
  )
}