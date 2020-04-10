import {cleanConsole, createAll} from './data';
const companies = createAll();
const nuwUser = {
  firstName: 'Juan',
  lastName: 'Delgado',
  age: 35,
  car: true,
};

cleanConsole(7, companies);
console.log('---- EXAMPLE 7 part 1 --- ', searchCompany(companies, 5));
console.log('---- EXAMPLE 7 part 2 --- ', deleteOneCompany(companies, 7));
console.log('---- EXAMPLE 7 part 3 --- ', 'Put here your function');
console.log('---- EXAMPLE 7 part 4 --- ', addUser(companies, 2, nuwUser));
console.log('---- EXAMPLE 7 part 5 --- ', 'Put here your function');
console.log('---- EXAMPLE 7 part 6 --- ', deleteOneUser(companies, 4, 7));
console.log('---- EXAMPLE 7 part 7 --- ', 'Put here your function');
console.log('---- EXAMPLE 7 part 8 --- ', 'Put here your function');
console.log('---- EXAMPLE 7 part 9 --- ', transferUser(companies, 2, 3, 5));
// point 1
function searchCompany(companies, id) {
  const company = companies.find((data) => data.id == id);
  return company ? company.name : 'company not found';
}
// point 2
function deleteOneCompany(companies, id) {
  return companies.filter((data) => data.id != id);
}
// point 4
function addUser(companies, id, user) {
  const company = companies.find((data) => data.id == id);
  if (company) {
    user.id = company.users.length;
    company.users.push(user);
    company.usersLength ++;
    return company;
  }
  return 'company not found';
}
// point 6
function deleteOneUser(companies, idCompany, idUser) {
  const company = companies.find((data) => data.id == idCompany);
  const company0 = company;
  if (company) {
    const indexUser = company.users.findIndex((data) => data.id == idUser);
    if (indexUser == -1) {
      return 'user not found';
    }
    company.users.splice(indexUser, 1);
    company.usersLength --;
  } else {
    return 'company1 or company2 not found';
  }
  return {
    'companay after': company,
    'companay before': company0,
  };
}
// point 9
function transferUser(companies, idCom1, idCom2, idUser) {
  const company1 = companies.find((data) => data.id == idCom1);
  const company2 = companies.find((data) => data.id == idCom2);
  const company = company1;
  if (company1 && company2) {
    const indexUser = company1.users.findIndex((data) => data.id == idUser);
    if (indexUser == -1) {
      return 'user not found';
    }
    const userDeleted = company1.users.splice(indexUser, 1);
    company2.users.push(userDeleted[0]);
    company1.usersLength --;
    company2.usersLength ++;
  } else {
    return 'company1 or company2 not found';
  }
  return {
    'companay1 after': company,
    'companay1 before': company1,
    'companay2': company2,
  };
}
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Parte 1: Crear una función tomando como parámetro un "id" de "company" y
// devolviendo el nombre de esta "company".

// Parte 2: Crear una función tomando como parámetro un "id" de "company" y
// quitando la "company" de la lista.

// Parte 3: Crear una función tomando como parámetro un "id" de "company" y
// permitiendo hacer un PATCH (como con una llamada HTTP) en todos los
// atributos de esta "company" excepto en el atributo "users".

// Parte 4: Crear una función tomando como parámetro un "id" de "company" y un
// nuevo "user" cuyo el apelido es "Delgado", el nombre "Juan", de 35 años y
// dueño de un carro. El nuevo "user" debe agregarse a la lista de "users" de este
// "company" y tener un "id" generado automáticamente. La función también debe modificar
// el atributo "usersLength" de "company".

// Parte 5: Crear una función tomando como parámetro un "id" de "company" y
// permitiendo hacer un PUT (como con una llamada HTTP) en esta "company" excepto
// en el atributo "users".

// Parte 6: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user". La función debe quitar este "user" de la lista de "users"
// de "company" y cambiar el atributo "usersLength" de "company".

// Parte 7: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PATCH (como con una llamada HTTP) en este
// "user".

// Parte 8: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PUT (como con una llamada HTTP) en este
// "user".

// Parte 9: Crear una función tomando como parámetro dos "id" de "company" y
// un "id" de "user". La función debe permitir que el user sea transferido de la
// primera "company" a la segunda "company". El atributo "usersLength" de cada
// "company" debe actualizarse.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Part 1: Create a function taking as parameter an "id" of "company" and
// returning the name of this "company".

// Part 2: Create a function taking as parameter an "id" of "company" and
// removing the "company" from the list.

// Part 3: Create a function taking as a parameter an "id" of "company" and
// allowing to make a PATCH (as with an HTTP call) on all
// attributes of this "company" except on the "users" attribute.

// Part 4: Create a function taking as parameter an "id" of "company" and a
// new "user" whose name is "Delgado", the first name "Juan", aged 35 and
// a car. The new "user" must be added to the "users" list of this
// "company" and have an automatically generated "id". The function must also modify
// the "usersLength" attribute of "company".

// Part 5: Create a function taking as parameter an "id" of "company" and
// allowing to make a PUT (as with an HTTP call) on this "company" except
// on the "users" attribute.

// Part 6: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user". The function must remove this "user" from the list of "users"
// from "company" and change the attribute "usersLength" from "company".

// Part 7: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user" allowing to make a PATCH (as with an HTTP call) on this
// "user".

// Part 8: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user" allowing to make a PUT (as with an HTTP call) on this
// "user".

// Part 9: Create a function taking as parameter two "id" of "company" and
// an "id" of "user". The function must allow the user to be transferred as a parameter
// from the 1st "company" to the 2nd "company". The "usersLength" attribute of each
// "company" must be updated.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Partie 1 : Créer une fonction prenant en paramètre un "id" de "company" et
// retournant le nom de cette "company".

// Partie 2 : Créer une fonction prenant en paramètre un "id" de "company" et
// supprimant la "company" de la liste.

// Partie 3 : Créer une fonction prenant en paramètre un "id" de "company" et
// permettant de faire un PATCH (comme avec un appel HTTP) sur tous les
// attributs de cette "company" sauf sur l'attribut "users".

// Partie 4 : Créer une fonction prenant en paramètre un "id" de "company" et un
// nouvel "user" dont le nom est "Delgado", le prénom "Juan", ayant 35 ans et
// une voiture. Le nouvel "user" doit être ajouté à la liste des "users" de cette
// "company" et avoir un "id" généré automatiquement. La fonction doit aussi modifier
// l'attribut "usersLength" de "company".

// Partie 5 : Créer une fonction prenant en paramètre un "id" de "company" et
// permettant de faire un PUT (comme avec un appel HTTP) sur cette "company" sauf
// sur l'attribut "users".

// Partie 6 : Créer une fonction prenant en paramètre un "id" de "company" et un
// "id" de "user". La fonction doit supprimer cet "user" de la liste des "users"
// de la "company" et modifier l'attribut "usersLength" de "company".

// Partie 7 : Créer une fonction prenant en paramètre un "id" de "company" et un
// "id" de "user" permettant de faire un PATCH (comme avec un appel HTTP) sur cet
// "user".

// Partie 8 : Créer une fonction prenant en paramètre un "id" de "company" et un
// "id" de "user" permettant de faire un PUT (comme avec un appel HTTP) sur cet
// "user".

// Partie 9 : Créer une fonction prenant en paramètre deux "id" de "company" et
// un "id" de "user". La fonction doit permettre de transférer l'user en paramètre
// de la 1re "company" à la 2e "company". L'attribut "usersLength" de chaque
// "company" doit être mis à jour.
