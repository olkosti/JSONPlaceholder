const posts = document.querySelector('.posts');
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function addPost (title, body) {
    const divPost = document.createElement('div');
    divPost.classList.add('post');
    posts.appendChild(divPost)

    const pTitle = document.createElement('p');
    pTitle.classList.add('post__title');
    pTitle.textContent = `Заголовок: ${title}`
    divPost.appendChild(pTitle);

    const pArticle = document.createElement('p');
    pArticle.classList.add('post__article');
    pArticle.textContent = `Статья: ${body}`
    divPost.appendChild(pArticle);
}

document.addEventListener("DOMContentLoaded", function() {
    fetch(API_URL)

    .then(resolve => resolve.json())
    .then((data) => {
        data.forEach(element => {
            addPost(element.title, element.body);
        });
    })

    .catch(err => console.log('Пpоизошла ошибка:', err))
});



//Другой вариант
// const posts = document.querySelector('.posts');

// function createPost(post) {
//     return `
//         <div class="post">
//         <p class='post__title'>Заголовок: ${post.title}</p>
//         <p class='post__article'>Статья: ${post.body}</p>
//         </div>
//     `;
// }

// function addPostToContainer(markup) {
//     posts.innerHTML += markup;
// }

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(resolve => resolve.json())
//     .then((posts) => {
//         posts.forEach(post => {
//             const markup = createPost(post);
//             addPostToContainer(markup)
//             });
//         })

//     .catch(err => console.log('Пpоизошла ошибка:', err))


