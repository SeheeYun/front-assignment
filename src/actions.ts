'use server';

import { revalidatePath } from 'next/cache';

export async function createTodo(data: FormData) {
  const title = data.get('title');
  const content = data.get('content');

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

export async function updateTodo(prev: any, data: FormData) {
  const id = data.get('id');
  const title = data.get('title');
  const content = data.get('content');
  const completed = data.get('completed') === 'true';
  const params = {
    ...prev,
    title,
    content,
    completed,
  };
  await fetch(`http://localhost:3001/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(params),
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
