/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react';

import TodoItem from './TodoItem';
import { todoType } from '../../typeProps';

import ToDoPanel from '../ToDoPanel';

import style from './TodoList.module.scss';

interface TodoList {
  todos: todoType[];
  todoIdForEdit: todoType['id'] | null;
  checkedTodo: (id: todoType['id']) => void;
  deleteTask: (id: todoType['id']) => void;
  selectTodoIdForEdit: (id: todoType['id']) => void;
  changeTodo: ({ name, description }: Omit<todoType, 'checked'>) => void;
}

const TodoList: React.FC<TodoList> = ({
  todos,
  checkedTodo,
  deleteTask,
  selectTodoIdForEdit,
  todoIdForEdit,
  changeTodo,
}) => {
  return (
    <div className={style.todoList_container}>
      <div>
        <div className={style.todoList_title_container}>
          <h3>
            Номер <br /> задачи
          </h3>
          <h3>Заголовок</h3>

          <h3>
            Дата <br /> создания
          </h3>

          <h3 className={style.time}>
            Время в <br /> работе
          </h3>

          <h3 className={style.time}>
            Дата <br /> окончания
          </h3>

          <h3 className={style.time}>Приоритет</h3>

          <h3 className={style.time}>
            Текущий <br /> статус
          </h3>
        </div>
      </div>
      {todos &&
        todos.map((todo) =>
          todo.id === todoIdForEdit ? (
            <ToDoPanel
              key={todo.id}
              mode="edit"
              changeTodo={changeTodo}
              editTodo={{
                name: todo.name,
                description: todo.description,
                id: todo.id,
                key: todo.key,
              }}
            />
          ) : (
            <TodoItem
              key={todo.key}
              todo={todo}
              checkedTodo={checkedTodo}
              deleteTask={deleteTask}
              selectTodoIdForEdit={selectTodoIdForEdit}
            />
          )
        )}
    </div>
  );
};

export default TodoList;
