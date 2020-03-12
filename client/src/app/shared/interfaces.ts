export interface User {
  name: string
  email: string
  password: string
  category?: string
  _id?: string
  }

export interface Message {
  message: string
}

export interface Category {
  name: string
  imageSrc?: string
  user?: string
  _id?: string
}

export interface Position {
  name: string
  cost: number
  category: string
  user?: string
  _id?: string
}



