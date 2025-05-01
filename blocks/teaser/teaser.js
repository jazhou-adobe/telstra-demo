import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  // Add teaser-image class to first div and its first child div
  const imageDiv = block.firstElementChild;
  imageDiv.className = 'teaser-image';

  // Add teaser-content class to second div and its first child div 
  const contentDiv = block.children[1];
  contentDiv.className = 'teaser-content';

  // Add classes to content elements
  const h2 = contentDiv.querySelector('h2');
  if (h2) {
    h2.className = 'teaser-title';
  }

  const paragraphs = contentDiv.querySelectorAll('p');
  if (paragraphs.length > 0) {
    paragraphs[0].className = 'teaser-description';
    if (paragraphs[1]) {
      paragraphs[1].className = 'teaser-link';
    }
  }


  // Optimize images
  block.querySelectorAll('picture > img').forEach((img) => {
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);
  });
}
