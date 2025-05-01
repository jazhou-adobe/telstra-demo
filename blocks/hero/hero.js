import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  // Add hero-content class to second div
  const contentDiv = block.children[1];
  contentDiv.className = 'hero-content';

  // Add hero-image class to first div
  const imageDiv = block.firstElementChild;
  imageDiv.className = 'hero-image';

  // Add classes to content elements
  const h2 = contentDiv.querySelector('h2');
  if (h2) {
    h2.className = 'hero-title';
  }

  const paragraphs = contentDiv.querySelectorAll('p');
  if (paragraphs.length > 0) {
    paragraphs[0].className = 'hero-description';
  }

  // Optimize images
  block.querySelectorAll('picture > img').forEach((img) => {
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);
  });
}
