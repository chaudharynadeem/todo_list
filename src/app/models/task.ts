// enum for status
export enum Status {
  open = "Open",
  in_progress = "In-progress",
  completed = "Completed"
}

// interface for task array
export interface Task {
  title:string,
  status:string,
  description:string,
  date: Date
}
