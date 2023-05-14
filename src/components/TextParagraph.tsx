import React from 'react'
import { Text } from '@/lib/TextDatabase'

export interface TextParagraphProps {
  jsonData: Text // JSON data input prop
  className?: string
}

const TextParagraph: React.FC<TextParagraphProps> = ({
  jsonData,
  className,
}) => {
  const sentences = jsonData.sentences || [] // Access sentences from jsonData

  return (
    <div id="sentenceContainer">
      {sentences.map((sentence, index) => (
        <React.Fragment key={index}>
          <p className={className}>{sentence}</p>
        </React.Fragment>
      ))}
    </div>
  )
}

export default TextParagraph
