```javascript
const heading = document.querySelector("#heading");
const text = document.querySelector("#text");

console.log(heading);
console.log(heading.innerHTML);
console.log(text);
console.log(text.textContent);
console.log(text.classList);

heading.innerHTML = "<h2>New Heading</h2>";
text.textContent = "<h2>Updated Text</h2>";
```
