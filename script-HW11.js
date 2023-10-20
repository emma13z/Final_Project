// Async/await method //

// const getData = async () => {
//     let response = await fetch ('https://jsonplaceholder.typicode.com/users/3');
//     let user = await response.json();
//     console.log(user);

//     let postsResponse = await fetch (`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
//     let posts = await postsResponse.json();
//     console.log(posts);

//     let postsComments = await fetch ('https://jsonplaceholder.typicode.com/posts/1/comments');
//     let comments = await postsComments.json();
//     console.log(comments);
// };

// getData();

// Promises method //

function getInfo () {
fetch(`https://jsonplaceholder.typicode.com/users/3`)
  .then(response => response.json())
  .then(userData => {
    console.log(userData);
    return fetch (`https://jsonplaceholder.typicode.com/posts?userId=${userData.id}`);
})
  .then(response => response.json())
  .then(postsData => {
    console.log(postsData);
    return fetch ('https://jsonplaceholder.typicode.com/posts/1/comments');
})
  .then(response => response.json())
  .then((commentsData) => {
  console.log(commentsData);
})
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error.message);
});
}

getInfo();
