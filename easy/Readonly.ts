type mReadonly<T> = {
  readonly [P in keyof T]: T[P]
}