export default function NetworkPage() {
  return (
    <div className="prose daisy-prose max-w-[1000px] leading-[35px] mx-auto pt-6">
      <h1>wow</h1>
      <p>如何使用 daisyUI 的主题? daisyUI 原生已经有很多精美制作的主题，你可以直接获取它们。 每一个主题都定义了一些全局的变量，这些变量会影响所有的 daisyUI 组件。 要使用一个主题，只需要在 tailwind.config.js 里添加主题名字，然后在 HTML 标签里添加 data-theme 属性即可：</p>
<div className="overflow-x-auto">
  <table className="daisy-table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="bg-base-200">
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
      <input type="checkbox" className="daisy-toggle" defaultChecked />
    </div >
  )
}