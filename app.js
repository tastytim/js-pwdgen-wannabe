


function alertDates() {
  let nome = prompt("Nome?");
  let cognome = prompt("Cognome?");
  let colore = prompt("Colore preferito?");

  if (
    nome === null ||
    cognome === null ||
    colore === null ||
    nome.length == 0 ||
    cognome.length == 0 ||
    colore.length == 0
  ) {
    alert("Hai inserito i dati sbagliati, riprova");
    alertDates();
  } else 
  {
    let result = `${nome}${cognome}${colore}${21}`;
    alert(result);
  }
}

alertDates();
