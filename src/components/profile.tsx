import React from 'react';
import { Text } from '@/lib/TextDatabase';
import Title, { TitleProps } from './Title';

interface TextParagraphProps {
  titleProps: TitleProps
  data: Text;
}

const TextParagraph: React.FC<TextParagraphProps> = ({ titleProps, data }) => {
  const { sentences } = data;

  return (
    <Title 
    
    
    />
    <p>
      {sentences.map((sentence, index) => (
        <React.Fragment key={index}>
          {sentence}
          <br />
        </React.Fragment>
      ))}
    </p>
  );
};

export default TextParagraph;
