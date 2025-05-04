import React from "react";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2, Loader2 } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, updateTodo } from "@/server/TodoHandler";
import { cn } from "@/lib/utils";

interface TodoCardProps {
  id: string;
  body: string;
  completed: boolean;
  isPending?: boolean;
}

const TodoCard: React.FC<TodoCardProps> = ({
  id,
  body,
  completed,
  isPending = false,
}) => {
  const queryClient = useQueryClient();

  const { mutate: updateTodoMutation, isPending: isUpdating } = useMutation({
    mutationKey: ["updateTodo", id],
    mutationFn: () => updateTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const { mutate: deleteTodoMutation, isPending: isDeleting } = useMutation({
    mutationKey: ["deleteTodo", id],
    mutationFn: () => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return (
    <div
      className={`flex items-center justify-between p-4 rounded-lg shadow-sm transition-colors
      ${
        completed
          ? "bg-green-300 hover:bg-green-400 dark:bg-green-700/20 dark:hover:bg-green-800/20"
          : "bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-600"
      }
      text-zinc-800 dark:text-zinc-100
      ${isPending ? "opacity-70 animate-pulse cursor-not-allowed" : ""}
    `}
    >
      <div className="flex items-center gap-4">
        <Checkbox
          checked={completed}
          disabled={isUpdating || isDeleting || isPending}
          onCheckedChange={() => updateTodoMutation()}
          className="relative inline-flex items-center justify-center w-6 h-6 border-2 rounded-full transition-all 
    ${completed ? 'bg-green-500 border-green-600' : 'bg-transparent border-zinc-400 dark:border-zinc-600'}
    ${isPending || isUpdating || isDeleting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-zinc-900 dark:hover:bg-zinc-600'}
    checked:bg-green-600 checked:border-green-700 checked:ring-2 checked:ring-green-500
  "
        >
          <span className="absolute w-3 h-3 bg-white rounded-full transition-all transform scale-0 checked:scale-100"></span>
        </Checkbox>
        <div className="flex flex-col">
          <p
            className={`text-sm md:text-base font-medium transition-colors duration-300 ease-in-out
      ${
        completed
          ? "line-through text-zinc-500 dark:text-zinc-400"
          : "text-zinc-800 dark:text-zinc-100"
      }
    `}
          >
            {body}
          </p>
          <Badge
            variant="outline"
            className={`w-fit mt-2 text-xs font-medium rounded-md px-2 py-1 transition-all duration-300 ease-in-out
    ${
      completed
        ? "border-green-500 text-green-700 bg-green-100 hover:bg-green-200 dark:text-green-300 dark:bg-green-900 dark:border-green-600"
        : "border-yellow-500 text-yellow-700 bg-yellow-100 hover:bg-yellow-200 dark:text-yellow-300 dark:bg-yellow-900 dark:border-yellow-600"
    }
  `}
          >
            {isPending ? "Saving..." : completed ? "Completed" : "Pending"}
          </Badge>
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        disabled={isDeleting || isUpdating || isPending}
        onClick={() => deleteTodoMutation()}
        className={cn(
          "text-red-600 dark:text-red-400 transition-colors duration-300",
          "hover:bg-red-100 dark:hover:bg-red-900",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        )}
      >
        {isDeleting || isPending ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Trash2 className="w-4 h-4" />
        )}
      </Button>
    </div>
  );
};

export default TodoCard;
