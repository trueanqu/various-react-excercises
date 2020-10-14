import React, { useState } from 'react'

/*interface TabsProps {
  pages: { title: string,
  content: string
  }[]
}*/

interface TabsProp {
  title: string,
  content: string | JSX.Element,
}

export default function Tabs (props: {pages: TabsProp[]}) {
  const {pages} = props;
  const [activeTab, setActiveTab] = useState(0)

  /*function handleClick (index: number) {
    setActiveTab(index);
  }*/// how to use it like this?

  const tabsHeaders = pages.map((item: TabsProp, index: number) => {
    const { title } = item;
    return <li key={index} className={(activeTab === index)? "active" : ""} onClick={() => setActiveTab(index)}>{title}</li>
  })

  const tabsContents = pages.map((item: TabsProp, index: number) => {
    const { content } = item;
    return <div key={index} hidden={activeTab !== index}>{content}</div>
  })

  return <React.Fragment>
    <ul className="TabsHeader">{tabsHeaders}</ul>
    <div className="TabsBody">
      {tabsContents}
    </div>
  </React.Fragment>
}