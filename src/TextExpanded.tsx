import React, {  useState } from 'react'

export default function TextExpanded(props: { text: string, maxLength: number }) {
  const [isExpanded, setExpanded] = useState(false)

  if(props.text.length <= props.maxLength) {
    return <div>{props.text}</div>
  }

  let text = props.text
  let content

  const handleClick = () => {
    setExpanded(!isExpanded)
  }

  if(!isExpanded) {
    text = props.text.slice(0, props.maxLength)
    content = <p>
      {text}
      <span onClick={handleClick}>...</span>
    </p>
  } else {
    content = <p>
      {text}
      <span onClick={handleClick}>show less</span>
    </p>
  }



  return <div>{content}</div>
}