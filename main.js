class sbj {
  constructor(courseName, credits, grade, score, gp, rank) {
    (this.courseName = courseName),
      (this.credits = credits),
      (this.grade = grade),
      (this.score = score),
      (this.gp = gp),
      (this.rank = rank)
  }
  calcRank() {
    if (this.score >= 3.5) {
      this.rank = "A";
    } else if (this.score < 3.5 && this.score >= 2.5) {
      this.rank = "B";
    } else if (this.score < 2.5 && this.score >= 1.5) {
      this.rank = "C";
    } else if (this.score < 1.5 && this.score >= 1) {
      this.rank = "D";
    } else if (this.score < 1) {
      this.rank = "F";
    }
  }
  calcSbjScore() {
    let sbjScore = (this.grade / 10 - 5).toFixed(2);
    this.score = sbjScore;
  }
  calcSbjGp() {
    let sbjGPA = sbj.credit * sbj.score;
    this.gp = sbjGPA;
  }
  all(){
    this.calcRank();
    this.calcSbjScore();
    this.calcSbjGp();
  }
}

//add & remove row
function remove(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("se-gpa-table").deleteRow(i);
}
function addRow() {
  var table = document.getElementById("se-gpa-table");
  table.insertRow(-1);
}
function add() {
  addRow();
  var table = document.getElementById("se-gpa-table");
  var lastRow = table.rows[table.rows.length - 1];
  var CourseCell = lastRow.insertCell(-1);
  CourseCell.innerHTML =
    '<input type="text" class="form-control" id="course-name" placeholder="Course Name"required>';
  var CreditCell = lastRow.insertCell(-1);
  CreditCell.innerHTML =
    '<input type="number" class="form-control" id="credits" placeholder="Credits"  required>';
  var GradeCell = lastRow.insertCell(-1);
  GradeCell.innerHTML =
    '<input type="number" class="form-control" id="grade" placeholder="Grade" required>';
  var ButtonCell = lastRow.insertCell(-1);
  ButtonCell.innerHTML =
    '<button  onclick="remove(this)" class="btn"><i class="bi bi-trash3-fill text-danger"></i></button>';
}

function getData() {
  let records = [];
  var table = document.getElementById("se-gpa-table");
  for (var i = 0, row; (row = table.rows[i]); i++) {
    records[i] = new sbj();
    for (var j = 0, col; (col = row.cells[j]), j < 3; j++) {
      if (j == 0) {
        records[i].courseName = col.childNodes[0].value;
      } else if (j == 1) {
        records[i].credits = col.childNodes[0].value;
      } else if (j == 2) {
        records[i].grade = col.childNodes[0].value;
      }
      records[i].all();
    }
    console.log(records); 
  
  }
  
}