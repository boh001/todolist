interface User {
  name: string
  id: number
}

const user: User = {
  name: 'kim',
  id: 0,
}

interface Backpack<T> {
  add: (obj: T) => void
  get: () => T
}

interface Point {
  x: number
  y: number
}

const p1: Point = { x: 10, y: 20 }
p1.x = 5

const ro: ReadonlyArray<number> = [1, 2, 3, 4]
let a = ro

a = ro as number[]
