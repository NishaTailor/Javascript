// Initialize the localStorage data
if (!localStorage.getItem('likeCount')) {
    localStorage.setItem('likeCount', '0');
}
if (!sessionStorage.getItem('comments')) {
    sessionStorage.setItem('comments', JSON.stringify([]));
}

// Load the initial data
document.getElementById('like-count').innerText = localStorage.getItem('likeCount');
updateCommentsList();

// Like Button
document.getElementById('like-btn').addEventListener('click', () => {
    let likeCount = parseInt(localStorage.getItem('likeCount'));
    likeCount++;
    localStorage.setItem('likeCount', likeCount);
    document.getElementById('like-count').innerText = likeCount;
});

// Comment Button
document.getElementById('post-comment-btn').addEventListener('click', () => {
    let commentInput = document.getElementById('comment-input').value;
    if (commentInput) {
        let comments = JSON.parse(localStorage.getItem('comments'));
        comments.push(commentInput);
        localStorage.setItem('comments', JSON.stringify(comments));
        updateCommentsList();
        document.getElementById('comment-input').value = ''; // Clear input field
    }
});

const updateCommentsList = () => {
    let comments = JSON.parse(localStorage.getItem('comments'));
    let commentsList = document.getElementById('comments-list');
    commentsList.innerHTML = ''; // Clear current list
    comments.forEach(comment => {
        let li = document.createElement('li');
        li.innerText = comment;
        commentsList.appendChild(li);
    });
}

// Follow Button
document.getElementById('follow-btn').addEventListener('click', () => {
    let followBtn = document.getElementById('follow-btn');
    if (followBtn.innerText === 'Follow') {
        followBtn.innerText = 'Unfollow';
        // Store follow status in localStorage
        localStorage.setItem('followStatus', 'Unfollow');
    } else {
        followBtn.innerText = 'Follow';
        localStorage.setItem('followStatus', 'Follow');
    }
});

// Initialize follow button status
document.getElementById('follow-btn').innerText = localStorage.getItem('followStatus') || 'Follow';

// Share Button (for demonstration, it just alerts)
document.getElementById('share-btn').addEventListener('click', () => {
    alert('Post Shared!');
});
