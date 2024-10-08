import React, { cloneElement, ReactElement } from "react";
// Template:
function ShiftedTabs() {
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

export function TabPage({ children, tabName, defaultChecked, name }: { children?: React.ReactNode, tabName?: string, defaultChecked?: boolean, name?: string }) {
  return (
    <>
    <input type="radio" name={name} role="tab" className="daisy-tab [--tab-bg:oklch(var(--b3))] !border-b-transparent text-base font-medium " aria-label={tabName} defaultChecked={defaultChecked} />
    <div role="tabpanel" className="daisy-tab-content border-base-300 rounded-box bg-base-300 p-5 pl-10 pr-10">
      {children}
    </div>
    </>
  )
}

export default function TabPages ({ children, className }: { children: React.ReactNode, className?: string }) {
  // children should be TabPage
  function getUuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  const id = getUuid();
  const childrenWithUniqueNames = React.Children.map(children, child => {
    if (React.isValidElement(child) && child.type === TabPage) {
      return cloneElement(child as ReactElement<{name: string}>, { name: id });
    }
    return child;
  });
  return (
    <div className={`daisy-tabs daisy-tabs-lifted daisy-tabs-bordered ${className}`}>
      {childrenWithUniqueNames}
    </div>
  )
}