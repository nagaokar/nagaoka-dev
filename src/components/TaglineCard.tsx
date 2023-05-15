import React from "react";
import { TitleProps } from "./Title";
import { Text, textData } from "@/lib/TextDatabase";

export interface TaglineCardProps {
  titleProps: TitleProps;
}

const TaglineCard: React.FC<TaglineCardProps> = ({
  titleProps,
}) => {
  const sentences = textData.
  return (
    <div id="taglineContainer" className="mb-7 mt-3 flex max-w-[800px]">
      <div id={`${titleProps.title}profileContainer`}>
        <div className="font-bold">{titleProps.title}</div>
        <div id="sentenceContainer">
          {sentences.map((sentence, index) => (
            <React.Fragment key={index}>
              <p className="text-md">{sentence}</p>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaglineCard;
