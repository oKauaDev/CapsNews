export interface NewMessage {
  user: string;
  content: string;
  time: number;
  timeToRead: number;
}

export interface New {
  email: string;
  title: string;
  content: NewMessage[];
  type: string;
  id: number;
  views: number;
  link: string;
  time: string;
}
