let post1 = {
  id: 1,
  author: 'John',
  content: 'My first Post!',
  likes: 10,
  comments: ['Great post!', 'Nice photo!'],
  image: 'https://files.codingninjas.in/image2-28694.jpg'
};

const postsContainer = document.getElementById('posts');

const postDiv = document.createElement('div');
postDiv.classList.add('post');

// Author
const authorElement = document.createElement('h3');
authorElement.textContent = post1.author;
postDiv.appendChild(authorElement);

// Image
const imageElement = document.createElement('img');
imageElement.src = post1.image;
postDiv.appendChild(imageElement);

// Content
const contentElement = document.createElement('p');
contentElement.textContent = post1.content;
postDiv.appendChild(contentElement);

// Like Button
const likeButton = document.createElement('button');
likeButton.textContent = 'Like';
likeButton.classList.add('like-button'); // Add class for styling
postDiv.appendChild(likeButton);

// Comment Input
const commentInput = document.createElement('input');
commentInput.type = 'text';
commentInput.placeholder = 'Write a comment...';
postDiv.appendChild(commentInput);

// Comment Button
const commentButton = document.createElement('button');
commentButton.textContent = 'Comment';
postDiv.appendChild(commentButton);

// Post Footer
const postFooter = document.createElement('div');
postFooter.classList.add('post-footer');
postFooter.textContent = `Likes: ${post1.likes} Comments: ${post1.comments.length}`;
postDiv.appendChild(postFooter);

// Comments Container
const commentsContainer = document.createElement('div');
commentsContainer.classList.add('comments-container');
commentsContainer.style.display = 'none';

post1.comments.forEach(comment => {
  const commentElement = document.createElement('p');
  commentElement.textContent = comment;
  commentsContainer.appendChild(commentElement);
});

postDiv.appendChild(commentsContainer);

// Toggle Comments Display
postFooter.addEventListener('click', () => {
  commentsContainer.style.display = commentsContainer.style.display === 'none' ? 'block' : 'none';
});

// Event Listener for Like Button
likeButton.addEventListener('click', () => {
  if (!likeButton.classList.contains('liked')) { // Check if already liked
    post1.likes++;
    likeButton.classList.add('liked'); // Mark as liked
    likeButton.style.backgroundColor = 'red'; // Change background color
    updateFooter();
  }
});

// Event Listener for Comment Button
commentButton.addEventListener('click', () => {
  const commentText = commentInput.value.trim(); // Get the text entered in the input
  if (commentText) {
    post1.comments.push(commentText); // Add comment to the comments array
    const commentElement = document.createElement('p');
    commentElement.textContent = commentText;
    commentsContainer.appendChild(commentElement);

    updateFooter(); // Update the footer with new counts
    commentInput.value = ''; // Clear the input field after adding the comment
  }
});

// Function to Update Footer
function updateFooter() {
  postFooter.textContent = `Likes: ${post1.likes} Comments: ${post1.comments.length}`;
}

postsContainer.appendChild(postDiv);
