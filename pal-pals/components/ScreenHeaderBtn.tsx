import React from 'react';

interface ScreenHeaderBtnProps {
  title: string;
  onClick: () => void;
}

const ScreenHeaderBtn: React.FC<ScreenHeaderBtnProps> = ({ title, onClick }) => {
  return (
    <button onClick={onClick}>
      {title}
    </button>
  );
};

export default ScreenHeaderBtn;
