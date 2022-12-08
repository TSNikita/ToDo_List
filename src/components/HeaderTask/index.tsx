import React from 'react';

import style from './HeaderTask.module.scss';

type HeaderTaskPropsType = {
  totalCount: number;
};

const HeaderTask: React.FC<HeaderTaskPropsType> = ({ totalCount }) => {
  return (
    <div className={style.header}>
      <h1>Количество Task: {totalCount}</h1>
    </div>
  );
};

export default HeaderTask;
