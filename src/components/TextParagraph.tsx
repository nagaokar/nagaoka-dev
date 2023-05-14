import React from 'react';
import { Text } from '@/lib/TextDatabase';

interface TextParagraphProps {
  jsonData: Text; // JSON data input prop
}

const TextParagraph: React.FC<TextParagraphProps> = ({ jsonData }) => {
  const sentences = jsonData.sentences || []; // Access sentences from jsonData

  return (
    <>
      <div id="sentenceContainer">
        {sentences.map((sentence, index) => (
          <React.Fragment key={index}>
            {sentence}
            <br />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default TextParagraph;
