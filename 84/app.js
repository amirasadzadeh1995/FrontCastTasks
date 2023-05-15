const getBtn = document.querySelector(`#get-btn`);
const postBtn = document.querySelector(`#post-btn`);

const getData = () => {
  axios.get("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
    console.log(res);
  });
};

const postData = () => {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      userId: 2,
      Id: 3,
      title: "Post Title",
      body: "Post Body",
    })
    .then((res) => {
      console.log(res);
    });
};
getBtn.addEventListener(`click`, getData);
postBtn.addEventListener(`click`, postData);
