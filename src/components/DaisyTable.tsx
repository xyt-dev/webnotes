import React from "react"

export default function Table({ children, heads, indexed }: { children?: React.ReactNode, heads?: string[], indexed?: boolean }) {
  const headers = heads?.map(head => <th className="text-base" key={head}>{head}</th>)
  const processedChildren = React.Children.map(children, (trChild, index) => {
    if (React.isValidElement(trChild) && trChild.type === 'tr') {
      const rowChildren = React.Children.toArray(trChild.props.children)
      while (rowChildren.length < (heads?.length || 0)) {
        rowChildren.push(<td key={`empty-${rowChildren.length}`}>~</td>);  // fill with <td>~</td>
      }
      const _processedRowChildren = rowChildren.map((tdChild: React.ReactNode) => {
        if (React.isValidElement(tdChild) && tdChild.type === 'td') {
          const content = tdChild.props.children;
          if (!content || (typeof content === 'string' && content.trim() === ''))
            return React.cloneElement(tdChild, {}, '~')
        }
        return tdChild;
      })
      indexed = indexed || false
      const processedRowChildren = indexed
        ? [<th key="index" className="w-16">{index + 1}</th>, ...React.Children.toArray(_processedRowChildren)]
        : React.Children.toArray(_processedRowChildren)
      return React.cloneElement(trChild, {}, processedRowChildren);
    }
    return trChild;
  })

  return (
    <div className="overflow-x-auto">
      <table className="daisy-table">
        <thead className="bg-base-200">
          <tr>
            <th>\</th>
            {headers}
          </tr>
        </thead>
        <tbody>
          {processedChildren}
        </tbody>
      </table>
    </div>
  )
}