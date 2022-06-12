import React from 'react';
import { Container, Card } from 'react-bootstrap';
import arch from './arch.png';

export default () => {
  return (
    <Container>
        <Card className='mt-3 mb-3'>
          <Card.Header>Przykładowa architektura usługi</Card.Header>
          <Card.Body>
            <img src={arch} alt="arch" />
          </Card.Body>
        </Card>

        <Card className='mt-3 mb-3'>
          <Card.Header>Opis</Card.Header>
          <Card.Body>
            <Card.Title>Niniejszy projekt bazuje na przykładowym projekcie dołączonym do treści zadania 2. Główna funkcjonalność aplikacji nie uległa zmianie. Wprowadzony został jednak szereg zmian usprawniających jej wygląd i działanie.</Card.Title>
            <Card.Text>
              <br /><b>Kontener client:</b>
              <ul>
                <li>Zmodyfikowano wygląd aplikacji tak, by był on bardziej przejrzysty i intuicyjny. W tym celu do zależności aplikacji (plik package.json) dodano pakiet react-bootstrap, dodający komponenty pozwalający na intuicyjne tworzenie stron z wykorzystaniem frameworku Bootstrap. Poszczególne sekcje strony osadzono w tzw. kartach, a formularz do wpisywania współczynników k został zmodyfikowany tak, by używał komponentów react-bootstrap. Dodano również pasek nawigacyjny, umożliwiający szybkie przemieszczanie się między podstronami. Wymagane komponenty react-bootstrap zaimportowano w poszczególnych plikach komponentów strony</li>
                <li>Utworzono komponent Main, odpowiadający za wyświetlanie informacji o autorze zadanie na stronie projektu. Dodano trasę wyświetlającą ten komponent po wpisaniu adresu głównego serwera (localhost:3050)</li>
                <li>Zmodyfikowano obsługę tras w pliku App.js: dodano trasę dla komponentu Main oraz osadzono wszystkie trasy w komponencie Switch, odpowiadającym za wyświetlanie zawartości tylko pierwszego komponentu, którego trasa pasuje do aktualnego adresu</li>
                <li>Spolsczono cały tekst na stronie</li>
                <li>W funkcji handleSubmit komponentu Fib dodano metodę odświeżającą stronę, dzięki czemu użytkownik widzi wprowadzony współczynnik k w historii i wynik obliczenia (o ile zostało już wykonane) w sekcji Wyniki</li>
              </ul>

              <br /><b>Kontener api:</b>
              <ul>
                <li>Zmodyfikowano funkcję API pod adresem /values tak, by w razie, gdy wprowadzony współczynnik k nie jest liczbą strona zwracała kod 500 z informacją o błędzie</li>
                <li>Spolszczono teksty o błędach i obliczeniach</li>
              </ul>

              <br /><b>Pliki docker-compose:</b>
              <ul>
                <li>Utworzono plik docker-compose.yml, służący do uruchamiania produkcyjnej wersji usługi. W porównaniu do pliku docker-compose.dev.yml zamieniono opcje build, służące do budowania kontenerów tworzonych na podstawie plików Dockerfile.dev na opcje image, pobierające gotowe już obrazy, stworzone na podstawie produkcyjnych plików Dockerfile. Obrazy te zostały stworzone wcześniej za pomocą odpowiednich poleceń i wstawione na repozytorium na Docker Hubie</li>
                <li>Utworzono plik docker-swarm.yml, który jest zmodyfikowaną wersją pliku docker-compose.yml, tworzącą usługę jako tzw. stack, wykorzystywany przez klaster Docker Swarm. W kontenerach zastosowano opcje deploy, w których dla każdego kontenera skonfigurowane są ustawienia ich funkcjonowania w klastrze, takie jak liczba replik, zasady restartu oraz limity wykorzystywania zasobów</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
    </Container>
  );
};
