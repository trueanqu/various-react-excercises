import React, { useState } from 'react'

/*interface TabsProps {
  pages: { title: string,
  content: string
  }[]
}*/

interface TabsPage {
  title: string,
  content: string | JSX.Element,
}

interface TabsProp {
  pages: TabsPage[],
}

export default function Tabs (props: TabsProp) {
  const {pages} = props;
  const [activeTab, setActiveTab] = useState(0)

  /*function handleClick (index: number) {
    setActiveTab(index);
  }*/// how to use it like this?

  const tabsHeaders = pages.map((item, index) => {
    const { title } = item;
    return <li key={index} className={(activeTab === index)? "active" : ""} onClick={() => setActiveTab(index)}>{title}</li>
  })

  const tabsContents = pages.map((item, index) => {
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