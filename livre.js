let books = [
  { id: 1, titre: "Atomic habits", auteur: "James Clear", prix: 30 },
  { id: 2, titre: "Power of habits", auteur: "Jeff Olsen", prix: 25 },
];

const showBooks = () => {
  const tbody = document.querySelector("#tab1 tbody");
  let newHTML = "";
  books.forEach((book) => {
    newHTML += "<tr>";
    newHTML += "<td>" + book.id + "</td>";

    newHTML += `<td class="editable" id="titre-${book.id}">${book.titre}</td>`;
    newHTML += `<td class="editable" id="auteur-${book.id}">${book.auteur}</td>`;
    newHTML += `<td class="editable" id="prix-${book.id}">${book.prix}</td>`;

    newHTML += `<td><button id="edit-${book.id}" class='btn btn-primary' onclick='edit(${book.id})'>Editer</button></td>`;
    newHTML += `<td><button id="del-${book.id}" class='btn btn-danger' onclick='remove(${book.id})'>Supprimer</button></td>`;
    newHTML += "</tr>";
  });
  tbody.innerHTML = newHTML;
};
const edit = (bookId) => {
  const editableElements = document.querySelectorAll(`.editable`);
  editableElements.forEach((element) => {
    element.contentEditable = false;
  });

  const titre = document.getElementById(`titre-${bookId}`);
  titre.contentEditable = true;

  const auteur = document.getElementById(`auteur-${bookId}`);
  auteur.contentEditable = true;

  const prix = document.getElementById(`prix-${bookId}`);
  prix.contentEditable = true;
};
const save = (bookId) => {
  const titre = document.getElementById(`titre-${bookId}`).textContent;
  const auteur = document.getElementById(`auteur-${bookId}`).textContent;
  const prix = document.getElementById(`prix-${bookId}`).textContent;

  const book = books.find((book) => book.id === bookId);
  if (book) {
    book.titre = titre;
    book.auteur = auteur;
    book.prix = prix;
  }
  showBooks();
};

const showAddForm = () => {
  document.getElementById("formAjout").classList.remove("hide");
};

const addBook = (e) => {
  e.preventDefault();
  const newBook = {
    id: books.length > 0 ? books[books.length - 1].id + 1 : 1,
    titre: document.getElementById("titre").value,
    auteur: document.getElementById("auteur").value,
    prix: document.getElementById("prix").value,
  };
  books.push(newBook);
  showBooks();
};

const init = () => {
  showBooks();
  document.getElementById("btnAjout").addEventListener("click", showAddForm);
  document.getElementById("addForm").addEventListener("submit", addBook);
};

window.addEventListener("load", init);

const remove = (bookId) => {
  books = books.filter((book) => book.id !== bookId);
  showBooks();
};
