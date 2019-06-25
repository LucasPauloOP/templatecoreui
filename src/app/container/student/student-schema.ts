import {Course} from '../course/course-schema';

export class Student {
    id: number;
    name: string;
    lastname: string;
    age: number;
    course: Course;
}