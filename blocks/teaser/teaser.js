/**
 * Decorates the teaser block
 * @param {Element} block The teaser block element
 */
export default function decorate(block) {
  // Create container
  const container = document.createElement('div');
  container.className = 'teaser-container';

  // Get content divs
  const [imageDiv, contentDiv] = block.children;
  
  // Handle image
  if (imageDiv) {
    const image = imageDiv.querySelector('img');
    if (image) {
      image.className = 'teaser-image';
      container.appendChild(image);
    }
  }

  // Create content wrapper
  const content = document.createElement('div');
  content.className = 'teaser-content';

  if (contentDiv) {
    // Get content elements
    const [title, description, link] = contentDiv.children;

    // Handle title
    if (title) {
      const titleEl = document.createElement('h3');
      titleEl.className = 'teaser-title';
      titleEl.textContent = title.textContent.trim();
      content.appendChild(titleEl);
    }

    // Handle description
    if (description) {
      const descEl = document.createElement('p');
      descEl.className = 'teaser-description';
      descEl.innerHTML = description.innerHTML.trim();
      content.appendChild(descEl);
    }

    // Handle link/button
    if (link) {
      const linkEl = link.querySelector('a');
      if (linkEl) {
        linkEl.className = 'teaser-button';
        content.appendChild(linkEl);
      }
    }
  }

  // Add content to container
  container.appendChild(content);

  // Replace block content with new structure
  block.textContent = '';
  block.appendChild(container);
} 