import React from 'react';

interface ButtonProps {
  type: 'primary' | 'secondary' | 'outline';
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, onClick, children }) => {
  const className = `py-2 px-4 rounded font-medium text-white ${
    type === 'primary'
      ? 'bg-blue-500 hover:bg-blue-700'
      : type === 'secondary'
      ? 'bg-green-500 hover:bg-green-700'
      : type === 'outline'
      ? 'bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-100'
      : ''
  }`;

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;