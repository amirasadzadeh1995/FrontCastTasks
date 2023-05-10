const getBtn = document.querySelector(`#get-btn`);
const postBtn = document.querySelector(`#post-btn`);
const sendHttpRequest = (method, url, data) => {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: data ? { "Content-Type": "application/json" } : {},
  }).then((res) => {
    return res.json();
  });
};

const getData = () => {
  sendHttpRequest("GET", "https://jsonplaceholder.typicode.com/posts/1").then(
    (responseData) => {
      console.log(responseData);
    }
  );
};

const postData = () => {
  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
    userId: 2,
    id: 2,
    title: "post title",
    body: "post body",
  }).then((responseData) => {
    console.log(responseData);
  });
};
getBtn.addEventListener(`click`, getData);
postBtn.addEventListener(`click`, postData);
