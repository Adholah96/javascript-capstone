import { includeUI } from './displayComment.js';

describe('includeUI', () => {
  let mockCommentsContainer;
  let mockCommentsNumber;

  beforeEach(() => {
    mockCommentsContainer = document.createElement('div');
    mockCommentsNumber = document.createElement('span');
    mockCommentsNumber.className = 'number';
    mockCommentsContainer.appendChild(mockCommentsNumber);
    document.querySelector = jest.fn(() => mockCommentsContainer);
  });

  it('should increment the comment counter', () => {
    const initialCounter = mockCommentsNumber.textContent;
    includeUI('testUser', 'testComment');
    const updatedCounter = mockCommentsNumber.textContent;
    expect(parseInt(updatedCounter, 10)).toBe(parseInt(initialCounter, 10) + 1);
  });
});
