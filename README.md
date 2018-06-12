This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

https://developers.themoviedb.org/3/getting-started/introduction

https://www.googleapis.com/books

https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/


MOVIE SEARCH: https://api.themoviedb.org/3/search/multi?api_key=92b2df3080b91d92b31eacb015fc5497&query=Harry+Potter+and+the+Philosopher%27s+Stone

BOOK SEARCH: https://www.googleapis.com/books/v1/volumes?q=Harry+Potter+and+the+Philosopher%27s+Stone

ITUNES SEARCH API:
```javascript
fetch('https://itunes.apple.com/search?term=Harry+Potter&entity=movie,ebook')
.then(resp => resp.json())
.then(data => console.log(data.results))
```
