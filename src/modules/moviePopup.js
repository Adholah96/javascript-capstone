const container = document.querySelector('.pop-content');
const moviePopup = async (id, image, name, summary) => {
  container.innerHTML = '';
  container.innerHTML += `
          <div class="movie-div show-${id}" >
            <p class="pop-header">${name}</p>
            <button class="btn-close">❌</button>
          </div>
          <img src=${image.medium} class="pop-img" alt="movie logo" />
          <p class="pop-header">${name}</p>
          <p class="descr">
            ${summary}
          </p>
          <table>
            <tbody>
              <tr>
                <td>Qwerty Hjgggg</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  quia beatae, totam commodi blanditiis
                </td>
              </tr>

              <tr>
                <td>Hkkbg Gtttddd</td>
                <td>
                  Quam, provident maxime similique aperiam cum, hic pariatur nam
                  modi a reiciendis corrupti necessitatibus illo illum!
                </td>
              </tr>
            </tbody>
          </table>
          <p>Comments (<span class="number">2</span>)</p>
          <form id="add-comment">
            <div class="error">Please fill in all fields!</div>
            <div class="div-form">
              <label for="name">
                <input type="text" id="name" placeholder="Your name" />
              </label>
              <label for="comment">
                <input type="text" id="comment" placeholder="Your comment" />
              </label>
              <div class="btn-comment">
                <button type="submit" id="sub-comment">Submit</button>
              </div>
            </div>
          </form>
    `;
};

export default moviePopup;
