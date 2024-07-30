import { useState } from "react"

export function Node({children}: {children: React.ReactNode}) {
  return (
    <details open>
      <summary>Math</summary>
      <ul>
        {children}
      </ul>
    </details>
  )
}

export default function DaisySidebar({children, page}: {children: React.ReactNode, page: React.ReactNode}) {
  const [pageName, setPageName] = useState('')
  return (
    <div className="daisy-drawer 2xl:daisy-drawer-open">
      <input id="drawer" type="checkbox" className="daisy-drawer-toggle" />
      <div className="daisy-drawer-content min-h-screen min-w-full">
        <nav className="daisy-navbar sticky top-0">
          <label htmlFor="drawer" className="daisy-btn daisy-drawer-button m-1 daisy-btn-ghost 2xl:hidden">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </nav>
        {/* Page content here */}
        {page}
      </div>
      <div className="daisy-drawer-side">
        <label htmlFor="drawer" aria-label="close sidebar" className="daisy-drawer-overlay"></label>
        {/* Sidebar content here */}
        <ul className="daisy-menu bg-base-100 text-base-content min-h-full w-80 p-4">
          {children}
        </ul>
      </div>
    </div>
  )
}