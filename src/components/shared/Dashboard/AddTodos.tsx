import React, { useCallback, KeyboardEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "@/server/TodoHandler";

const AddTodos: React.FC = () => {
  const [todo, setTodo] = React.useState<string>("");
  const queryClient = useQueryClient();

  const { mutate: addTodo } = useMutation({
    mutationKey: ["addTodo"],
    mutationFn: async (title: string) => await createTodo(title),

    onError: (error) => {
      console.error("Failed to add todo:", error);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleAddTodo = useCallback(() => {
    const trimmed = todo.trim();
    setTodo("");
    if (!trimmed) return;
    addTodo(trimmed);
  }, [todo, addTodo]);

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex gap-3 items-center mt-8">
      <Input
        type="text"
        aria-label="Add new todo"
        placeholder="What's on your mind? 🧠"
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={handleKeyPress}
        value={todo}
        className="flex-1 bg-zinc-800 text-white border border-zinc-700 placeholder:text-zinc-400 p-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <Button
        onClick={handleAddTodo}
        disabled={!todo.trim()}
        className="px-6 py-4 text-white font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Add
      </Button>
    </div>
  );
};

export default AddTodos;
