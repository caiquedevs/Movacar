import React from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';
import { TiWarningOutline } from 'react-icons/ti';
import { FiCheckCircle } from 'react-icons/fi';

export const Info = ({ text }) => {
  return (
    <div className="toastify">
      <RiErrorWarningLine size="20px" />
      {text}
    </div>
  );
};

export const Warning = ({ text }) => {
  return (
    <div className="toastify">
      <TiWarningOutline size="20px" />
      {text}
    </div>
  );
};

export const Error = ({ text }) => {
  return (
    <div className="toastify">
      <RiErrorWarningLine size="20px" />
      {text}
    </div>
  );
};

export const Success = ({ text }) => {
  return (
    <div className="toastify">
      <FiCheckCircle size="20px" />
      {text}
    </div>
  );
};
