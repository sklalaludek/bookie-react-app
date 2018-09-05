This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

API DOCUMENTATION: https://developers.google.com/books/docs/v1/using
BOOK SEARCH: https://www.googleapis.com/books/v1/volumes?q=Harry+Potter+and+the+Philosopher%27s+Stone

```
fetch('https://www.googleapis.com/books/v1/volumes?q=1984').then(data=>data.json()).then(data => console.log(data.items.filter(e => e.volumeInfo.language === 'en').sort((a, b) => b.volumeInfo.publishedDate
- a.volumeInfo.publishedDate
)))
```
REVIEWS API: https://idreambooks.com/api/books/reviews.json?q=Harry+Potter&key=b21861bfcf56827ee73008019c030c5392d6f186

DRIBBBLE PROJECTS: 
* https://dribbble.com/shots/5008302-Books-Application
* https://dribbble.com/shots/3250481-Shot-Books
