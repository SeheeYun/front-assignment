'use server';

import { revalidatePath } from 'next/cache';
import { Todo } from './types/data';

export async function createTodo(formData: FormData) {
  const title = formData.get('title');
  const content = formData.get('content');

  await fetch('http://localhost:3001/todos', {
    method: 'POST',
    body: JSON.stringify({
      title,
      content,
      completed: false,
    }),
  });

  revalidatePath('/todos');
}

export async function updateTodo(todo: Todo, formData: FormData) {
  const id = formData.get('id');
  const title = formData.get('title');
  const content = formData.get('content');
  const params = {
    ...todo,
    title,
    content,
  };
  await fetch(`http://localhost:3001/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(params),
  });

  revalidatePath('/todos');
}

export async function toggleTodoCompleted(todo: Todo) {
  await fetch(`http://localhost:3001/todos/${todo.id}`, {
    method: 'PUT',
    body: JSON.stringify({ ...todo, completed: !todo.completed }),
  });

  revalidatePath('/todos');
}

export async function deleteTodo(formData: FormData) {
  const id = formData.get('id');
  await fetch(`http://localhost:3001/todos/${id}`, {
    method: 'DELETE',
  });

  revalidatePath('/todos');
}
