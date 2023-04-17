let course = {
  name: `advanced JS`,
  studentLimit: 30,
  studentCount: 0,
  checkAvalability: function (courseSize) {
    let leftCount = this.studentLimit - this.studentCount;
    return courseSize <= leftCount;
  },
};
let status = course.checkAvalability(20);

console.log(status);
