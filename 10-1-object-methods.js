let course = {
  name: `advanced JS`,
  studentLimit: 30,
  studentCount: 0,
  checkAvalability: function (courseSize) {
    console.log(courseSize);
  },
};
course.checkAvalability(20);
