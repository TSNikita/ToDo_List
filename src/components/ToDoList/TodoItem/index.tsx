import React from 'react';

import Button from '../../Button';
import { todoType } from '../../../typeProps';

import style from './TodoItem.module.scss';

interface TodoItemProps {
  todo: todoType;
  checkedTodo: (id: todoType['id']) => void;
  deleteTask: (id: todoType['id']) => void;
  selectTodoIdForEdit: (id: todoType['id']) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  checkedTodo,
  deleteTask,
  selectTodoIdForEdit,
}) => {
  return (
    <div className={style.task_container}>
      <div className={style.task}>
        <div className={style.task_position}>
          <div className={style.task_key}>
            <div>{todo.key}</div>
          </div>

          <div className={style.task_title} onClick={() => checkedTodo(todo.id)}>
            <div
              style={{
                opacity: todo.checked ? 0.5 : 1,
                textDecoration: todo.checked ? 'line-through' : 'none',
              }}>
              {todo.name}
            </div>
          </div>

          <div className={style.task_date}>
            <div>{todo.date.toLocaleString()}</div>
          </div>

          <div className={style.task_time}>
            <div>{todo.date.toLocaleString()}</div>
          </div>

          <div className={style.task_time}>
            <div>{todo.date.toLocaleString()}</div>
          </div>

          <div className={style.task_priority}>
            <div>{todo.name}</div>
          </div>

          <div className={style.task_status}>
            <div>{todo.name}</div>
          </div>
        </div>

        <div className={style.task_button_container}>
          <Button color="orange" onClick={() => selectTodoIdForEdit(todo.id)}>
            Редактировать
          </Button>

          <Button color="red" onClick={() => deleteTask(todo.id)}>
            Удалить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
