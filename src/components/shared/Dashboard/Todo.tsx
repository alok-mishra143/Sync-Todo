/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllTodos } from "@/server/TodoHandler";
import { useMutationState, useQuery } from "@tanstack/react-query";
import TodoCard from "./TodoCard";
import AddTodos from "./AddTodos";

interface TodoItem {
  _id: string;
  completed: boolean;
  body: string;
}

const Todo = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getAllTodos,
    refetchIntervalInBackground: true,
  });

  const variables = useMutationState<TodoItem>({
    filters: { mutationKey: ["addTodo"], status: "pending" },
    select: (mutation) => mutation.state.variables as TodoItem,
  });

  return (
    <div className="flex flex-col items-center gap-6 px-4 py-8 w-full">
      {/* Header / Input Section */}
      <div className="w-full max-w-4xl">
        <AddTodos />
      </div>

      {/* Loading State */}
      {isLoading && (
        <p className="text-zinc-400 text-sm mt-4">Loading todos...</p>
      )}

      {/* Error State */}
      {error && (
        <p className="text-red-500 text-sm mt-4">
          Failed to load todos. Please try again later.
        </p>
      )}

      {/* Todo List */}
      <div className="w-full flex flex-col items-center overflow-y-auto max-h-[70vh]">
        {variables.length > 0 &&
          variables.map((todo: TodoItem, index: number) => (
            <div key={`pending-${index}`} className="w-full max-w-4xl p-2">
              <TodoCard
                id={todo._id || `pending-${index}`}
                body={todo as any}
                completed={false}
                isPending={true}
              />
            </div>
          ))}
        {data?.data && data.data.length > 0
          ? data.data.map((todo: TodoItem) => (
              <div key={todo._id} className="w-full max-w-4xl p-2">
                <TodoCard
                  id={todo._id}
                  body={todo.body}
                  completed={todo.completed}
                />
              </div>
            ))
          : !isLoading &&
            !error && (
              <p className="text-zinc-500 mt-6">
                No todos found. Add one above! 🚀
              </p>
            )}
      </div>
    </div>
  );
};

export default Todo;
