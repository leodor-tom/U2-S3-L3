fetch("https://striveschool-api.herokuapp.com/books")
  .then(data => data.json())
  .then(bookData => {
    const row = document.querySelector(".row");
    const ul = document.querySelector(".shoppingCart");
    const items = [];

    bookData.forEach(book => {
      const title = book.title;
      const category = book.category;
      const col = document.createElement("div");
      col.className = "col";

      col.innerHTML = `<div class="card" style="min-height: 550px">
        <img src="${book.img}" class="card-img-top" alt="..." style="height: 250px;">
        <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">category : ${category}</p>
        <p> price : ${book.price}</p> 
        <button class="btn btn-danger delete-btn">Delete</button>   
        <button class="btn btn-success add-btn ">compra ora</button>   
        </div>
        </div>`;

      const addButton = col.querySelector(".add-btn");
      addButton.addEventListener("click", () => {
        items.push(book);
        console.log(ul);
        aggiungi(book);
      });

      const deleteButton = col.querySelector(".delete-btn");
      deleteButton.addEventListener("click", () => {
        col.remove();
      });

      row.appendChild(col);
    });
    const aggiungi = book => {
      const li = document.createElement("li");
      console.log(book);
      li.className = "li";

      li.innerHTML = `
            <h4>${book.title}</h4>
            <p>${book.price}</p>
            `;
      return ul.appendChild(li);
    };
  })
  .catch(error => console.log(error));
