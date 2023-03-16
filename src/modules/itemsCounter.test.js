describe('Total movie items on the DOM', () => {
  test('Display the total on the header section', () => {
    document.body.innerHTML = `
      <header>
        <span class="totality"></span>
      </header>
      <div class="anime-holder"></div>
      <div class="anime-holder"></div>
      <div class="anime-holder"></div> 
        `;

    const movies = document.querySelectorAll('.anime-holder');
    const allMovies = movies.length;
    const totalHolder = document.querySelector('.totality');
    totalHolder.innerHTML = allMovies;

    expect(totalHolder.innerHTML).toEqual('3');
  });
});
