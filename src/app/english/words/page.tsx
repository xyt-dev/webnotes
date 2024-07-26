import Table from "@/components/DaisyTable"
export default function EnglishWords() {
  return (
    <div className="prose daisy-prose max-w-[1350px] leading-[35px] mx-auto pt-6">
      <h1 className="text-center">Accumulation</h1>
      <Table heads={["Word", "Explanation", "Phrase", "Sentence"]} indexed>
        <tr>
          <td>gallery</td>
          <td>     </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>     </td>
          <span>hahhaa</span>
          <td>a</td>
        </tr>
      </Table>
    </div>
  )
}