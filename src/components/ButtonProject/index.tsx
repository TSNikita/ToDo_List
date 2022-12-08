import React from 'react';

import style from './ButtonProject.module.scss';

type ButtonProjectPropsType = {
  name: string;
};

const ButtonProject: React.FC<ButtonProjectPropsType> = ({ name }) => {
  return (
    <div className={style.buttonProject}>
      <button>{name}</button>
    </div>
  );
};

export default ButtonProject;
