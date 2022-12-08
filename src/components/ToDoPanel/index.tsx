import React, { useState } from 'react';

import { todoType } from '../../typeProps';
import Button from '../Button';

import style from './ToDoPanel.module.scss';

interface AddToDoPanelProps {
  mode: 'add';
  addTodo: ({ name, description }: Omit<todoType, 'checked'>) => void;
}

interface EditToDoPanelProps {
  mode: 'edit';
  editTodo: Omit<todoType, 'checked' | 'date'>;
  changeTodo: ({ name, description, date, key, id }: Omit<todoType, 'checked'>) => void;
}

type ToDoPanelProps = AddToDoPanelProps | EditToDoPanelProps;

const DEFAULT_TODO = {
  name: '',
  description: '',
  date: Date(),
  key: 0,
  id: 0,
};

const ToDoPanel: React.FC<ToDoPanelProps> = (props) => {
  const isEdit = props.mode === 'edit';
  const [todo, setTodo] = useState(isEdit ? props.editTodo : DEFAULT_TODO);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  //создать задачу
  const handleAddDefault = () => {
    const todoItem = {
      name: todo.name,
      description: todo.description,
      date: new Date(),
      key: todo.key,
      id: todo.id,
    };

    if (isEdit) {
      return props.changeTodo(todoItem);
    }
    props.addTodo(todoItem);
    setTodo(DEFAULT_TODO);
  };

  return (
    <div className={style.todopanel}>
      <div className={style.formToDo}>
        <div>
          <label htmlFor="name">
            <div>Заголовок</div>
            <input type="text" id="name" value={todo.name} name="name" onChange={onChange} />
          </label>
        </div>

        <div>
          <label htmlFor="description">
            <div>Описание</div>
            <input
              type="text"
              id="description"
              value={todo.description}
              name="description"
              onChange={onChange}></input>
          </label>
        </div>

        <div className={style.button_container}>
          {!isEdit && (
            <Button color="blue" onClick={handleAddDefault}>
              Создать задачу
            </Button>
          )}

          {isEdit && (
            <Button color="orange" onClick={handleAddDefault}>
              Редактировать
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDoPanel;
