import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './CallToAction.css';
import { ReactComponent as LogoSvg } from './logo.svg';

const CallClasses = (color) =>
  classNames({
    ' text-gray-900 bg-gray-200 ': !color || color === 'black',
    ' text-blue-800 bg-blue-200': color === 'blue',
    ' text-pink-800 bg-pink-200 ': color === 'red',
    ' text-purple-900  bg-purple-200 ': color === 'purple',
  });
const Border = (color) =>
  classNames({
    ' border-gray-900 ': !color || color === 'black',
    ' border-blue-800': color === 'blue',
    ' border-pink-800 ': color === 'red',
    ' border-purple-800 ': color === 'purple',
  });

const Spin = () => classNames({});

const Card = ({ color }) => {
  return (
    <div className="flex flex-col items-center justify-items-center ">
      {/* <p className={CallClasses(color)'text-3xl font-light text-white leading-4'}> */}
      <div
        className={`${CallClasses(color)} ${Border(
          color
        )}  border-4 rounded-2xl py-4 px-4 content-center flex flex-col items-center mt-8 `}
      >
        <div className="flex flex-row space-x-4 ">
          <LogoSvg
            className={` ${Border(
              color
            )}  rounded-full border-8  h-16 w-16 fill-current animate-spin-slow `}
          />
          <LogoSvg
            className={` ${Border(
              color
            )} rounded-full border-8 h-16 w-16 fill-current animate-spin-slow`}
          />
          <LogoSvg
            className={` ${Border(
              color
            )} rounded-full border-8 h-16 w-16 fill-current animate-spin-slow`}
          />
        </div>
        <div className=" text-2xl font-semibold ">
          <p>React with TailwindCss and Storybook!</p>
        </div>
      </div>
    </div>
  );
};

Card.protoTypes = {
  color: PropTypes.string,
};

export default Card;
