import React from "react"

const SummaryDetailPreview = ({ resumeInfo }) => {
  return (
    <div className="text-sm">
      <p>{resumeInfo?.summary}</p>
    </div>
  )
}

export default SummaryDetailPreview
