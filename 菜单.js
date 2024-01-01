
document.addEventListener('DOMContentLoaded', function() {
  fetch('posts.json')
    .then(response => response.json())
    .then(posts => {
      const randomIndex = Math.floor(Math.random() * posts.length);
      const post = posts[randomIndex];

      const postElement = document.createElement('div');
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <a href="${post.link}">阅读更多</a>
      `;

      const randomPost = document.getElementById('random-post');
      randomPost.appendChild(postElement);
    })
    .catch(error => {
      console.error('加载博文数据失败:', error);
    });
});
