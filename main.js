// Simple in-browser message board for peace messages
const form = document.getElementById('peace-form');
const storiesList = document.getElementById('stories-list');

// Load stories from localStorage
function loadStories() {
  storiesList.innerHTML = '';
  const stories = JSON.parse(localStorage.getItem('peaceStories') || '[]');
  stories.reverse().forEach(story => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${story.name ? story.name : 'Anonymous'}:</strong> ${story.message}`;
    storiesList.appendChild(li);
  });
}

// Handle form submission
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = form.name.value.trim();
  const message = form.message.value.trim();
  if (!message) return;
  const stories = JSON.parse(localStorage.getItem('peaceStories') || '[]');
  stories.push({ name, message });
  localStorage.setItem('peaceStories', JSON.stringify(stories));
  form.reset();
  loadStories();
});

window.addEventListener('DOMContentLoaded', loadStories);
