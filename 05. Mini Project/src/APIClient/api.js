
class APIService {
  _baseUrl = "https://newsapi.org/v2/top-headlines?country=";
  _apiKey = "&apiKey=18f1c87e444741aca30db0a569bba999";

  async Request(country) {
    const res = await fetch(`${this._baseUrl}${country}${this._apiKey}`);
    //console.log("RES => ", res);

    if (!res.ok) {
      throw new Error(
        `Could not get data from ${this._baseUrl}  recived ${res.status}`
      );
    }
    
    return await res.json();
  }

  async getNews(country) {
    return await this.Request(country);
  }
}

export default APIService