/**
 * An array of post objects representing social media posts.
 * Each object contains information about a user's post, including their identity, location, and post details.
 *
 * @type {Array<Object>}
 * @property {string} name - The full name of the user who created the post.
 * @property {string} username - The username of the post's creator.
 * @property {string} location - The geographical location of the user at the time of posting.
 * @property {string} avatar - The file path to the user's avatar image.
 * @property {string} post - The file path to the content image of the post.
 * @property {string} comment - A comment or caption provided by the user for the post.
 * @property {number} likes - The number of likes the post has received.
 */
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

/**
 * Represents the DOM element with the ID "post-page".
 * This variable is used to access and manipulate the corresponding
 * HTML element within the document.
 *
 * The variable is typically used to perform operations such as
 * modifying content, applying styles, or attaching event listeners
 * to the specific element identified by the "post-page" ID.
 *
 * @type {HTMLElement | null}
 */
const postPage = document.getElementById("post-page")

for(let i = 0; i < posts.length; i++) {
    postPage.innerHTML += `
        <section>
                <div class="container">
                    <div class="post-content">
                        <img class="post-owner-avatar" src="${posts[i].avatar}" alt="post owner's profile picture">
                        <div class="post-owner-info">
                            <h1>${posts[i].name}</h1>
                            <p>${posts[i].location}</p>
                        </div>
                        
                    </div>
                    <div class="post-img">
                        <img src="${posts[i].post}" alt="van gogh's post">
                    </div>
                    <div class="icons">
                        <img src="images/icon-heart.png" alt="like icon">
                        <img src="images/icon-comment.png" alt="comment icon">
                        <img src="images/icon-dm.png" alt="dm icon">
                    </div>
                    <div class="likes">
                        <h1>${posts[i].likes} likes</h1>
                    </div>
                    <div class="user-comment">
                        <h1 class="user-name">${posts[i].username}</h1>
                        <p class="user-txt">${posts[i].comment}</p>
                    </div>
                </div>
            </section>`
}