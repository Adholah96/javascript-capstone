import countComments from './commentCounter.js';

describe('countComments in the modal', () => {
  test('returns the correct number of comments in the modal', () => {
    const comments = [
      { username: 'heldricks', comment: 'wow, lovely!' },
      { username: 'kevin', comment: 'Thanks for sharing this.' },
      { username: 'ochieng', comment: 'I love the design.' },
    ];
    const result = countComments(comments);
    expect(result).toEqual(3);
  });

  test('returns zero when there is no comment', () => {
    const comments = [];
    const result = countComments(comments);
    expect(result).toEqual(0);
  });
});
