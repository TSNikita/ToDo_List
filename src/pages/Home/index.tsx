import React from 'react';
import { NavLink } from 'react-router-dom';

import { data } from '../../helpers';
import ButtonProject from '../../components/ButtonProject';

import style from './Home.module.scss';

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.home_header}>
        <h1>Выбрать проект ООО</h1>
      </div>

      <div className={style.home_project}>
        {data.map((item) => (
          <NavLink to={item.id} key={item.id}>
            <ButtonProject key={item.id} name={item.nameTask} />
          </NavLink>
        ))}
      </div>

      <footer className={style.footer}></footer>
    </div>
  );
};

export default Home;
