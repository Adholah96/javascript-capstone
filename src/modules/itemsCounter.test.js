import movieCounter from './movieCounter.js';

describe('count all movies created on the DOM', () => {
  test('returns the correct number of movie items on the DOM', () => {
    document.body.innerHTML = `
      <div class="anime-holder"></div>
      <div class="anime-holder"></div>
      <div class="anime-holder"></div>
    `;
    expect(movieCounter()).toEqual(3);
  });
});
