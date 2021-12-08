import { initial } from "./initialData.js";
import { Student } from "./Student.js";


let student = initial();


document.getElementById('stdID').textContent = `รหัสนักศึกษา : ${student.id}`;
document.getElementById('stdName').textContent = `ชื่อ ${student.name}`

const selectSemester = document.getElementById('selectSemester');

const subjectBody = document.getElementById('subjectTable');

student.semesterList.semester.forEach((eachSemester) => {
    const option = document.createElement('option');
    option.textContent = eachSemester.semesterName;
    option.value = eachSemester.semesterName;
    selectSemester.appendChild(option);

    const tbody = document.createElement('tbody');
    tbody.style.display = 'none';
    tbody.id = eachSemester.semesterName;

    eachSemester.subjectList.forEach((eachSubject, index) => {
        const tr = document.createElement('tr');

        const count = document.createElement('th');
        const subjectID = document.createElement('td');
        const degree = document.createElement('td');
        const grade = document.createElement('td');

        count.textContent = index + 1;
        subjectID.textContent = eachSubject.subject.subjectId;
        degree.textContent = eachSubject.subject.degree;
        grade.textContent = eachSubject.grade;

        tr.appendChild(count);
        tr.appendChild(subjectID);
        tr.appendChild(degree);
        tr.appendChild(grade);

        tbody.appendChild(tr);
    })
    subjectBody.appendChild(tbody);
})

selectSemester.addEventListener('change', selectedSemester);

function selectedSemester(event) {
    const alltbody = subjectBody.querySelectorAll('tbody');
    const summaryTableThisSemester = document.getElementById('summaryTable').querySelector('#thisSemester');
    const getSemester = student.semesterList.getSemester(event.target.value);

    if (event.target.value == "default") {
        alltbody.forEach((tbd) => tbd.style.display = 'none');
        summaryTableThisSemester.childNodes[1].textContent = '-';
        summaryTableThisSemester.childNodes[2].textContent = '-';
        summaryTableThisSemester.childNodes[3].textContent = '-';
        summaryTableThisSemester.childNodes[4].textContent = '-';
        summaryTableThisSemester.childNodes[5].textContent = '-';
        return;
    }

    alltbody.forEach((tbd) => {
        if (tbd.id == event.target.value) {
            tbd.style.display = ''
        } else {
            tbd.style.display = 'none'
        }
    });


    summaryTableThisSemester.childNodes[1].textContent = getSemester.allDegree();
    summaryTableThisSemester.childNodes[2].textContent = getSemester.calDegree();
    summaryTableThisSemester.childNodes[3].textContent = getSemester.totalScore();
    summaryTableThisSemester.childNodes[4].textContent = getSemester.getGPA();
    summaryTableThisSemester.childNodes[5].textContent = getSemester.getDegree();



}

const summaryTable = document.getElementById('summaryTable');

const tb = document.createElement('tbody');
const thisSemester = document.createElement('tr');
thisSemester.id = 'thisSemester';
const allSemester = document.createElement('tr');
allSemester.id = 'allSemester'

const thisSemesterHead = document.createElement('td');
thisSemesterHead.textContent = "ภาคการศึกษานี้";
const allSemesterHead = document.createElement('td');
allSemesterHead.textContent = "สะสมทั้งหมด";

thisSemester.appendChild(thisSemesterHead);
allSemester.appendChild(allSemesterHead);

for (let i = 0; i < 6; i++) {
    const data1 = document.createElement('td');
    const data2 = document.createElement('td');
    data1.textContent = '-';
    thisSemester.appendChild(data1);
    allSemester.appendChild(data2);
}

tb.appendChild(thisSemester);
tb.appendChild(allSemester);

summaryTable.appendChild(tb);

const summaryTableAllSemester = document.getElementById('summaryTable').querySelector('#allSemester');
console.log(summaryTableAllSemester);
console.log(summaryTableAllSemester.childNodes[1]);
console.log(student.semesterList.allDegree());
summaryTableAllSemester.childNodes[1].textContent = student.semesterList.allDegree();
summaryTableAllSemester.childNodes[2].textContent = student.semesterList.allCalDegree();
summaryTableAllSemester.childNodes[3].textContent = student.semesterList.allTotalScore();
summaryTableAllSemester.childNodes[4].textContent = student.semesterList.getGPAX();
summaryTableAllSemester.childNodes[5].textContent = student.semesterList.allGetDegree();
summaryTableAllSemester.childNodes[6].textContent = student.semesterList.getStudentStatus();