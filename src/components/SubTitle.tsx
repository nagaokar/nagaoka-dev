import React from "react";
import Image from "next/image";


interface SubTitleProps {
  title: string;
  underlineSrc: string;
  rotation:string;
}

const SubTitleComponent: React.FC<SubTitleProps> = ({ title, underlineSrc, rotation}) => {
  return (
    <div className="flex flex-col justify-center font-bold text-3xl mb-8">
      {/* TITLE TEXT */}
      <p>{title}</p>
      {/* TITLE UNDERLINE */}
      <Image
        className={`${rotation} mt-1`}
        src={underlineSrc}
        width={200}
        height={500}
        alt="A black underline of the title"
      />
    </div>
  );
};

export default SubTitleComponent;
