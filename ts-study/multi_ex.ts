// 학점 정의
type Grade = 'A' | 'B' | 'C' | 'F';

// 과목 정의
interface Course{
  courseId: number,
  courseName: string,
  grade?: Grade;
};

//학생 정의
interface Student{
  id: number,
  name: string,
  subjects: Course[] //학생의 수강하는 과목 목록
}

// 학생 객체 생성
let student1: Student = {
  id: 1,
  name: "김선화",
  subjects: [
    {courseId: 101, courseName: "수학", grade: "A"},
    {courseId: 102, courseName: "영어", grade: "B"},
  ]
}

// 학생 정보 출력 
console.log(`학생명: ${student1.name}`);
student1.subjects.forEach(subject => {
  console.log(`과목명: ${subject.courseName}, 학점: ${subject.grade}`);
})
