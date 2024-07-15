import TextBox from "@/components/TextBox1"
import { Paragraph as Para, Title1, Title2, Title3 } from "@/components/TextBox1"
export default function EnglishPage() {
  return (
    <div className={`w-[320px] sm:w-[50%] mx-auto`}>
      
      <TextBox>
        <Title1><span className="text-pink-600 underline">阅读的逻辑</span></Title1>

        <Title2>句间逻辑</Title2>

        <Title3>Text1</Title3>
        <Para>
            In the weeks and months that followed Mr. Hrist's sale, spending of any sort became deeply unfashinable. In the art
          world that meant collectors stayed away from galleries and salerooms.
        </Para>

        <Title3>Text2</Title3>
        <Para>
            A deal is a deal--except, apparently, when Entergy is involved. The company, a major energy supplier in New England,
          provoked justified outrage in Vermont last week when it announced it was reneging on a longstanding committment to abide by the
          state's strict nuclear regulations.
        </Para>
        <Para>
            Instead, the company has done precisely what it had long promised it would not: challenge the constitutionality of Vermont's
          rules in the federal court, as part of an effort to keep its Vermont nuclear power plant running. It's a stunning move.
        </Para>
      </TextBox>

    </div>
  )
}
