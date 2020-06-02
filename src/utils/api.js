//const BASE_API = 'https://yts.am/api/v1/';
const BASE_API =
  'https://c2304746-ccda-4a14-bbeb-1479bca9ebbc.mock.pstmn.io/api/v2/';

class Api {
  async getSuggestion(id) {
    debugger;
    try {
      const query = await fetch(
        `${BASE_API}movie_suggestions.json?movie_id=${id}`,
      );
      console.log(`${BASE_API}movie_suggestions.json?movie_id=${id}`);
      console.log(await query);
      const {data} = await query.json();
      return data.movies;
    } catch (e) {
      console.log(e);
    }
    return null;
  }

  async getMovies() {
    debugger;
    try {
      const query = await fetch(`${BASE_API}list_movies.json?`);
      console.log(`${BASE_API}list_movies.json?`);
      console.log(await query);
      const {data} = await query.json();

      return data.movies;
    } catch (e) {
      console.log(e);
    }

    return null;
  }
}

export default new Api();
