import { Teacher } from '../teacher/teacher-schema';

export class Course {
    id: number;
    name: string;
    city: string;
    period: number;
    teacher: Teacher[]=[];
  }