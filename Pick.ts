type MyPick<T, K> = K extends keyof T ? { [k in K]: T[K] } : never
interface Todo {
  title: string,
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}

interface Person {
  name: string;
  age: number;
};


//extends 获取的其实是 string | string | number
//这里通过 keyof 获取所有类型 然后通过 in 重新映射类型
