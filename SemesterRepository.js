import { Semester } from "./semester.js";
import { studentStatus } from "./StudentStatus.js";



export class SemesterRepository {
    constructor() {
        this._semesterList = [];
    }
    get semester() {
        return this._semesterList;
    }

    getSemester(semesterName) {
        return this._semesterList.find((semester) => semester.semesterName == semesterName);
    }
    addSemester(semesterName) {
        this._semesterList.push(new Semester(semesterName));
    }
    allDegree() {
        return this._semesterList.reduce((prev, cur) => prev + cur.allDegree(), 0);
    }
    allCalDegree() {
        return this._semesterList.reduce((prev, cur) => prev + cur.calDegree(), 0);
    }
    allGetDegree() {
        return this._semesterList.reduce((prev, cur) => prev + cur.getDegree(), 0);
    }
    allTotalScore() {
        return this._semesterList.reduce((prev, cur) => prev + cur.totalScore(), 0);
    }

    getGPAX() {
        return Math.round((this._semesterList.reduce((prev, cur) => prev + cur.totalScore(), 0) /
            this._semesterList.reduce((prev, cur) => prev + cur.calDegree(), 0)) * 100) / 100;
    }
    functionA() {
        return studentStatus.NORMAL;
    }
    getStudentStatus() {
        let lightTiredCount = 0;
        let heavyTiredCount = 0;

        if (this._semesterList.length <= 1 && this._semesterList[0].subjectList.every((subj) => subj.grade == '-') || this.getGPAX >= 2) {
            return studentStatus.NORMAL;
        }
        if (this._semesterList.length <= 1 && this._semesterList[0].getGPA() < 1.5) {
            return studentStatus.RETIRED;
        }
        console.log('check1');
        this._semesterList.forEach((semester, index, semesterList) => {
            let GPAX =
                semesterList.slice(0, index + 1).reduce((prev, cur) => prev + cur.totalScore(), 0) /
                semesterList.slice(0, index + 1).reduce((prev, cur) => prev + cur.calDegree(), 0);

            if (GPAX < 1.75) {
                heavyTiredCount++;
            } else if (GPAX < 2) {
                lightTiredCount++;
            } else {
                lightTiredCount = 0;
                heavyTiredCount = 0;
                return;
            }
            if (heavyTiredCount >= 2) {
                return studentStatus.RETIRED;
            }
            if (lightTiredCount >= 4) {
                return studentStatus.RETIRED;
            }
        })
        if (this.getGPAX < 2) {
            return studentStatus.PROBATION;
        }
        return studentStatus.NORMAL;
    }
}