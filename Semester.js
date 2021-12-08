import { EnrolledSubject } from "./EnrolledSubject.js";
import { subjectList } from "./Subject.js";

export class Semester {
    constructor(semesterName) {
        this._semesterName = semesterName;
        this._subjectList = [];
    }
    get semesterName() {
        return this._semesterName;
    }
    get subjectList() {
        return this._subjectList;
    }

    getSubject(subjectID) {
        return this._subjectList.find(subjectFind =>
            subjectFind.subject.subjectId == subjectID
        );
    }

    addSubject(...subjectId) {
        subjectId.forEach((eachSubjectId) =>
            this._subjectList.push(new EnrolledSubject(subjectList.findSubjectById(eachSubjectId)))
        );
    }
    allDegree() {
        return this._subjectList.reduce((prev, cur) => prev + cur.subject.degree, 0);
    }

    calDegree() {
        return this._subjectList.filter(subj => subj.numGrade() != '-')
            .reduce((prev, cur) => prev + cur.subject.degree, 0);
    }

    totalScore() {
        return this._subjectList.filter((subj) => subj.numGrade() != '-')
            .reduce((prev, cur) => prev + cur.numGrade() * cur.subject.degree, 0);
    }

    getGPA() {
        return Math.round((this.totalScore() / this.calDegree()) * 100) / 100;
    }
    getDegree() {
        return this._subjectList.filter(subj => ['A', 'B+', 'B', 'C+', 'C', 'D+', 'D', 'S'].includes(subj.grade))
            .reduce((prev, cur) => prev + cur.subject.degree, 0);
    }


}