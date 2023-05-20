/**
 * https://react-redux.js.org/introduction/getting-started
 * https://redux-toolkit.js.org/tutorials/quick-start
 *
 * Twoim zadaniem w ramach praktyki jest ponowny setup reduxowego stora
 * żeby to zrobić najpierw musisz skopiować zawartość pliku index_without_store.js
 * i wkleić go do pliku index.js
 *
 * Żeby zasetupować store należy
 *
 * 1) stworzyć folder store a w nim plik store.js (możesz stworzyć tylko plik store.js natomiast dobrze jest sobie pogrupować to w folderze)
 * 2) w pliku store.js należy zaimportować funkcje configureStore z biblioteki @reduxjs/toolkit
 * 3) funkcje configureStore należy wywołać poniżej a jej rezultat przypisać do zmiennej o nazwie store
 * zmienną tą należy od razu wyeksportować
 * 4) funkcja configureStore jako argument przyjmuje obiekt (obiekt konfiguracyjny)
 * 5) obiekt ten posiada kilka kluczy/pól - dla nas najważniejsze pole o nazwie "reducer"
 * dla którego wartość to... też obiekt który zawiera tzw reducery - na razie wpisz tam jakiekolwiek słowo i jakąkolwiek wartość
 * np słowo "Test"
 * 6) wyeksporotwany obiekt store należy zaimportować do pliku index.js
 * 7) w pliku index.js należy również zaimportować komponent o nazwie <Provider></Provider>
 * z biblioteki react-redux
 * 8) komponentem tym należy "otoczyć" naszą aplikacje tj. komponent App
 * 9) komponent provider przyjmuje props o nazwie store wartością dla tego propsa będzie
 * zaimportowany store
 *
 * OTWÓRZ PRZELGĄDARKĘ Z APLIKACJĄ ORAZ REDUXOWE DEVTOOLSY
 *
 * 10) po otwarciu reduxowych devtoolsów w stanie powinna widnieć wartość którą określiłeś/aś w punkcie 5
 *
 */
