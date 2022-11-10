import { Topic } from "./topic";

export interface Module {
  id: string;
  name: string;
  index: number;
  topic: Topic[];
}