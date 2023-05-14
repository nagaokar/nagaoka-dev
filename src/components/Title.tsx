import React from 'react';
import Image from 'next/image';

export interface TitleProps {
  title: string;
  titleType: 'imageUnder' | 'centered' | 'imageAbove' | 'none';
  titleCssProps: string;
  imageSrc?: string; // Make it optional
  imageCssProps?: string;
  width?: number;
  height?: number;
  alt?: string;
}


const Title: React.FC<TitleProps> = ({
  title,
  titleCssProps,
  imageSrc = '',
  imageCssProps,
  width,
  height,
  alt,
  titleType,
}) => {
  const renderTitle = () => {
    if (titleType === 'imageUnder') {
      return (
        <div className="flex justify-center">
          <p id={`${title}Text`} className={`${titleCssProps}`}>
            {title}
          </p>
        </div>
      );
    } else if (titleType === 'centered') {
      return (
        <div className='flex flex-col '>
          <div className="absolute">
            <Image className={imageCssProps} src={imageSrc} width={width} height={height} alt={`${alt}`} />
            <p className={`absolute inset-0 flex justify-center items-center ${titleCssProps}`}>
              {title}
            </p>
          </div>
        </div>

      );
    } else if (titleType === 'imageAbove') {
      return (
        <div className="flex flex-col items-center align-top">
          <Image className={imageCssProps} src={imageSrc} width={width} height={height} alt={`${alt}`} />
          <p className={`${titleCssProps}`}>{title}</p>
        </div>
      );
    } else {
      return (
        <>
          <p className={`${titleCssProps}`}>{title}</p>
        </>
      );
    }
  };

  return (
    <div id={`${title}TitleContainer`} className="font-bold">
      {renderTitle()}
    </div>
  );
};

export default Title;
