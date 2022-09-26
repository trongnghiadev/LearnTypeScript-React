// Partial<T>
export interface Todo {
  title: string;
  description: string;
  date: string;
}
// interface NewTodo {
//   title?: string;
//   description?: string;
//   date?: string;
// }
type NewTodo = Partial<Todo>;
function updateTodo(todo: Todo, newTodo: NewTodo) {
  return {
    ...todo,
    ...newTodo,
  };
}
console.log(
  updateTodo(
    {
      title: "Learn Javascript",
      description: "Learn javascript in 6 months",
      date: "25/08/2022",
    },
    {}
  )
);
// Required<T>
interface Props {
  isActive?: boolean;
  color?: string;
}

const compA: Props = {};
const compB: Required<Props> = {
  isActive: true,
  color: "red",
};
// Readonly<T>
interface Book {
  title: string;
}
const life: Book = {
  title: "The life of book",
};
const game: Readonly<Book> = {
  title: "The life of game",
};
// game.title = "No game no life";
life.title = "No game no life";
// Records<Keys, Types>
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";
// Key: Value
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
const newRecords: Record<number, string> = {
  1: "Number one",
  2: "Number two",
  3: "Number three",
};

cats.boris;
// Pick<Type, Keys>
interface TodoS {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<TodoS, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  // description: 'Can not use this property here'
};

todo;
// Omit<Type, Keys>
interface TodoOmit {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreviewOmit = Omit<TodoOmit, "description" | "title">;

const todoOmit: TodoPreviewOmit = {
  // title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};
// Exclude<UnionType, ExcludedMembers>
type T0 = Exclude<"a" | "b" | "c", "a">;
// Extract<Type, Union>
type T1 = Extract<"a" | "b" | "c", "a" | "f">;
type T2 = Extract<string | number | (() => void), Function>;
// NonNullable<Type>
type T3 = NonNullable<string[] | null | undefined>;
