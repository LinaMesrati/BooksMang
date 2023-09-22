books = [
  { id: 1, titre: "Book 1", auteur: "Author 1", prix: 10.99 },
  { id: 2, titre: "Book 2", auteur: "Author 2", prix: 12.99 },
];
window.addEventListener("load", () => {
  let newHtml = "";
  const tbody = document.querySelector("tbody");
  books.forEach((e) => {
    newHtml += "<tr>";
    newHtml += `<td>${e.id}</td>`;
    newHtml += `<td>${e.titre}</td>`;
    newHtml += `<td>${e.auteur}</td>`;
    newHtml += `<td>${e.prix}</td>`;
    newHtml += `<td><button class='btn btn-primary'>Editer</button></td>`;
    newHtml += `<td><button class='btn btn-danger'>Supprimer</button></td>`;
    newHtml += "</tr>";
  });
  tbody.innerHTML = newHtml;
});
