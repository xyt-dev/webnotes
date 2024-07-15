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

        <Title3>Text3</Title3>
        <Para>
            In spite of "endless talk of difference," American society is an amazing machine for homogenizing people. There is "the democratizing
          uniformity of dress and discourse, and the casualness and absence of difference" characteristic of popular culture. People are obsorbed
          into "a culture of consumption" launched by the 19th-century department stores that offered "vast arrays of goods in an elegent atmosphere.
          Instead of intimate stores catering to a knowledgeable elite," these were stores "anyone could enter, regardless of class or background.
          This turned shopping into a public and democratic act." The mass media, advertising and sports are other forces for homogenization.

        </Para>
      </TextBox>

    </div>
  )
}
