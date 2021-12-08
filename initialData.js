import { Student } from "./Student.js";

export function initial() {
    let student = new Student("tus", '099');
    student.semesterList.addSemester('1/2563');
    student.semesterList.getSemester('1/2563').addSubject('GEN101', 'GEN121', 'INT100', 'INT101', 'INT102', 'INT114', 'LNG220');

    student.semesterList.getSemester('1/2563').getSubject('GEN101').grade = 'B+';
    student.semesterList.getSemester('1/2563').getSubject('GEN121').grade = 'A';
    student.semesterList.getSemester('1/2563').getSubject('INT100').grade = 'B';
    student.semesterList.getSemester('1/2563').getSubject('INT101').grade = 'A';
    student.semesterList.getSemester('1/2563').getSubject('INT102').grade = 'A';
    student.semesterList.getSemester('1/2563').getSubject('INT114').grade = 'B+';
    student.semesterList.getSemester('1/2563').getSubject('LNG220').grade = 'C+';

    student.semesterList.addSemester('2/2563');
    student.semesterList.getSemester('2/2563').addSubject('GEN111', 'INT103', 'INT104', 'INT105', 'INT107', 'INT200', 'LNG332');
    student.semesterList.getSemester('2/2563').getSubject('GEN111').grade = 'A';
    student.semesterList.getSemester('2/2563').getSubject('INT103').grade = 'A';
    student.semesterList.getSemester('2/2563').getSubject('INT104').grade = 'B+';
    student.semesterList.getSemester('2/2563').getSubject('INT105').grade = 'A';
    student.semesterList.getSemester('2/2563').getSubject('INT107').grade = 'A';
    student.semesterList.getSemester('2/2563').getSubject('INT200').grade = 'A';
    student.semesterList.getSemester('2/2563').getSubject('LNG332').grade = 'B+';

    student.semesterList.addSemester('1/2564');
    student.semesterList.getSemester('1/2564').addSubject('GEN231', 'INT201', 'INT202', 'INT205', 'INT207', 'INT214', 'LNG202');

    return student;
}