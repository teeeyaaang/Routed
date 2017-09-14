import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
shStudNo: number;
shFirstName: string;
shLastName: string;
shProgram: string;
shYear: number;

shStudentCollection:Array<object>=[];
NameStudent: {number: number, FirstName: string, LastName: string, Program: string, Year: number}
addNewStudent(studNo: number, studFname: string, studLname:string, studProg:string, studYr:number){
  this.NameStudent={number: studNo, 
                FirstName: studFname, 
                LastName: studLname,
                Program: studProg,
                Year: studYr
              };
                this.shStudentCollection.push(this.NameStudent);
        }
getStudents():Array<object>{
  return this.shStudentCollection;
}


  constructor() { }

}
