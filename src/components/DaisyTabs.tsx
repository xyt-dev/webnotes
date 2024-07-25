export default function ShiftedTabs() {
  return (
    <div className="daisy-tabs daisy-tabs-lifted daisy-tabs-bordered ">
      <input type="radio" name="my_tabs_1" role="tab" className="daisy-tab [--tab-bg:oklch(var(--b3))] !border-b-transparent" aria-label="Tab 1" />
      <div role="tabpanel" className="daisy-tab-content border-base-300 rounded-box bg-base-300 p-10">Tab content 1</div>

      <input type="radio" name="my_tabs_1" role="tab" className="daisy-tab [--tab-bg:oklch(var(--b3))] !border-b-transparent" aria-label="Tab 2" defaultChecked />
      <div role="tabpanel" className="daisy-tab-content border-base-300 bg-base-300 rounded-box p-10">Tab content 2</div>

      <input type="radio" name="my_tabs_1" role="tab" className="daisy-tab [--tab-bg:oklch(var(--b3))] !border-b-transparent " aria-label="Tab 3" />
      <div role="tabpanel" className="daisy-tab-content border-base-300 bg-base-300 rounded-box p-10">Tab content 3</div>
    </div>
  )
}