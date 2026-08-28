export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export const tasks: Task[] = [
  {
    id: 1,
    title: "Review Route Handlers",
    completed: false,
  },
  {
    id: 2,
    title: "Complete Assignment 3",
    completed: false,
  },
];