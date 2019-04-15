import React from "react"

function QueueItem(props) {
  return (
    <div className="ItemBox AppListItem">
      <span className="DetailText">{props.person}</span>
      <hr/>
    </div>
  )
}

export default QueueItem