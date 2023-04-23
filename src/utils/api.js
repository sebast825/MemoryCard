const clientId = 'BTtUfQ1wl6hb1I3inmzidGfF0qFLvvN71JApPdcu1EQ';

export const apiRequest = (category,setImg) => {
   const randomNumber = Math.floor(Math.random() * 80) + 1;
   const endPoint = `https://api.unsplash.com/search/photos/?client_id=${clientId}&query=${category}&per_page=30&page=${randomNumber}`;

   fetch(endPoint)
     .then((response) => response.json())
     .then((jsonData) => {
       setImg({
         1: jsonData.results.slice(0, 3),
         2: jsonData.results.slice(3, 9),
         3: jsonData.results.slice(9, 18),
         4: jsonData.results.slice(18)
       });
     })
     .catch((error) => {
       console.log('error: ', error);
     });
 };

