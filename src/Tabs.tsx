import React, { useState } from 'react'

export default function Tabs (props: any) {
  const {pages} = props;
  const [activeTab, setActiveTab] = useState(0)

  /*function handleClick (index: number) {
    setActiveTab(index);
  }*/// how to use it like this?

  const tabsHeaders = pages.map((item: any, index: any) => {
    const { title } = pages[index];
    return <li key={index} className={(activeTab === index)? "active" : ""} onClick={() => setActiveTab(index)}>{title}</li>
  })

  const tabsContents = pages.map((item: any, index: any) => {
    const { content } = pages[index];
    return <div key={index} hidden={activeTab !== index}>{content}</div>
  })

  return <React.Fragment>
    <ul className="TabsHeader">{tabsHeaders}</ul>
    <div className="TabsBody">
      {tabsContents}
    </div>
  </React.Fragment>
}