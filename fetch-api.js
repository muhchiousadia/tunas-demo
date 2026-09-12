```javascript
async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const posts = await response.json();

    console.log(posts);
    console.log("First post title:", posts[0].title);
  } catch (error) {
    console.error("Error:", error);
  }
}

getPosts();

console.log("Fetching posts...");
```
