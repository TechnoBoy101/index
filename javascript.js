// Shuffle sort
let shuffleSort = () => (0.5 - Math.random());

// Get your textareas
get textAreas = Array.from(index.html(.container))

// Define a few grid areas
let styles = [".one", ".two", ".three", ".four"];

// Shuffle textareas and add the styles in order by index
textAreas.sort(shuffleSort).forEach((textarea, i) => {
  textarea.classList.add(styles[i])
})
