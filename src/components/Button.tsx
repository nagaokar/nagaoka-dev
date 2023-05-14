import React from 'react';
import Image from 'next/image';

import CircledArrow from '../icons/undraw/undraw_circled-arrow.svg';
import ExpandIcon from '../icons/undraw/undraw_circled-plus.svg';

interface ButtonProps {
  className?: string;
  href?: string;
  type: 'circlePlus' | 'circleArrow';
  width: number;
  height: number;
}

const Button: React.FC<ButtonProps> = ({
  className,
  href,
  type,
  width,
  height,
}) => {
  const renderButton = () => {
    if (type === 'circlePlus') {
      return (
        <Image
          className={className}
          src={ExpandIcon}
          width={width}
          height={height}
          alt="A sketched line drawing of circle with an arrow pointing down inside."
        />
      );
    } else if (href && type === 'circleArrow') {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          <Image
            className="-rotate-90"
            src={CircledArrow}
            width={width}
            height={height}
            alt="A sketched line drawing of circle with an addition symbol inside."
          />
        </a>
      );
    }
    return null;
  };

  return <button>{renderButton()}</button>;
};

export default Button;
