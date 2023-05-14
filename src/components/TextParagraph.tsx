import React from 'react'
import { Text } from '@/lib/TextDatabase'
import Title, { TitleProps } from './Title'

interface TextParagraphProps {
  titleProps: TitleProps
  jsonData: Text // JSON data input prop
}

const TextParagraph: React.FC<TextParagraphProps> = ({
  titleProps,
  jsonData,
}) => {
  const {
    title,
  } = titleProps

  const sentences = jsonData.sentences || [] // Access sentences from jsonData

  return (
    <>
      <div id={`${title}Container`} className="mb-12">
      <Title {...titleProps} />
      </div>
      <div id="sentenceContainer">
        {sentences.map((sentence, index) => (
          <React.Fragment key={index}>
            {sentence}
            <br />
          </React.Fragment>
        ))}
      </div>
    </>
  )
}

export default TextParagraph
