
class Student {
    constructor (fname, lname, grades) {
        this.firstName = fname;
        this.lastName = lname;
        this.grades = grades;
    }
}


class ListOfStudents {
    constructor (students) {
        this.students = students; 
    }
    getTableList(){
        let output = ''
        this.students.forEach(student => {
            output += `<tr><th>${student.firstName}</th><th>${student.lastName}</th>${[null, ...student.grades].reduce((acc, val) => {return acc+`<th>${val}</th>`})}</tr>`
        });
        return output;
    }; 
}

class StylesTableList extends ListOfStudents {
    constructor(students) {
        super();
        this.students = students; 
    }

    getAvg(student) {
        return Math.round(student.grades.reduce((partialSum, a) => partialSum + a, 0)/student.grades.length)
    }
    getTotalAvg() {
        let sum = 0
        this.students.forEach(student => {
            sum += this.getAvg(student)
        });
        return Math.round(sum/this.students.length)
    }
    getTotalAvgTable() {
        return `<tr><th> Total avg: ${this.getTotalAvg()}</tr></th>`
    }

    getTableList_2() {
        let output = "  "
        this.students.forEach(student => {
            output += `<tr>`
                + `<th>${student.firstName}</th>`
                + `<th>${student.lastName}</th>`
                + `${[null, ...student.grades].reduce((acc, val) => {return acc+`<th>${val}</th>`})}`
                + `${`<th>${this.getAvg(student)}</th>`}`
                + '</tr>'
        });
        return output
    }
}

$(document).ready(function() {
    console.log()
    let students = [new Student('fname', 'lname',   [3, 3, 3]),new Student('1fname', '1lname', [5, 3, 3]),new Student('2fname', 'l2name', [3, 4, 1]),new Student('3fname', 'ln3ame', [3, 2, 3]),]
    let styled = new StylesTableList(students)
    let listOfStudents = new ListOfStudents(students)
    $('button').click(function() {
        $('div').append(listOfStudents.getTableList())
        $('div').append(styled.getTableList_2())
        $('div').append(styled.getTotalAvgTable())
    });
});

