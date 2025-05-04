import { backendUrl } from "@/lib/constant";

interface Todo {
  _id: string;
  body: string;
  completed: boolean;
}

// Reusable fetch wrapper with try-catch inside each function for context-specific handling
const request = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    ...options,
  });

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message || "Request failed");
  }

  return res.json();
};

// Fetch all todos
export const getAllTodos = async (): Promise<{ data: Todo[] }> => {
  try {
    return await request<{ data: Todo[] }>(`${backendUrl}/todos`);
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw new Error("Failed to fetch todos");
  }
};

// Create a new todo
export const createTodo = async (body: string): Promise<Todo> => {
  try {
    return await request<Todo>(`${backendUrl}/todos`, {
      method: "POST",
      body: JSON.stringify({ body }),
    });
  } catch (error) {
    console.error("Error creating todo:", error);
    throw new Error("Failed to create todo");
  }
};

// Update a todo's completion status
export const updateTodo = async (id: string): Promise<Todo> => {
  try {
    return await request<Todo>(`${backendUrl}/todos/${id}`, {
      method: "PATCH",
    });
  } catch (error) {
    console.error("Error updating todo:", error);
    throw new Error("Failed to update todo");
  }
};

// Delete a todo
export const deleteTodo = async (id: string): Promise<{ message: string }> => {
  try {
    return await request<{ message: string }>(`${backendUrl}/todos/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw new Error("Failed to delete todo");
  }
};
