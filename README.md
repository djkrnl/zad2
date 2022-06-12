Niniejszy projekt bazuje na przykładowym projekcie dołączonym do treści zadania 2. Główna funkcjonalność aplikacji nie uległa zmianie. Wprowadzony został jednak szereg zmian usprawniających jej wygląd i działanie.

Kontener client:
- Zmodyfikowano wygląd aplikacji tak, by był on bardziej przejrzysty i intuicyjny. W tym celu do zależności aplikacji (plik package.json) dodano pakiet react-bootstrap, dodający komponenty pozwalający na intuicyjne tworzenie stron z wykorzystaniem frameworku Bootstrap. Poszczególne sekcje strony osadzono w tzw. kartach, a formularz do wpisywania współczynników k został zmodyfikowany tak, by używał komponentów react-bootstrap. Dodano również pasek nawigacyjny, umożliwiający szybkie przemieszczanie się między podstronami. Wymagane komponenty react-bootstrap zaimportowano w poszczególnych plikach komponentów strony
- Utworzono komponent Main, odpowiadający za wyświetlanie informacji o autorze zadanie na stronie projektu. Dodano trasę wyświetlającą ten komponent po wpisaniu adresu głównego serwera (localhost:3050)
- Zmodyfikowano obsługę tras w pliku App.js: dodano trasę dla komponentu Main oraz osadzono wszystkie trasy w komponencie Switch, odpowiadającym za wyświetlanie zawartości tylko pierwszego komponentu, którego trasa pasuje do aktualnego adresu
- Spolsczono cały tekst na stronie
- W funkcji handleSubmit komponentu Fib dodano metodę odświeżającą stronę, dzięki czemu użytkownik widzi wprowadzony współczynnik k w historii i wynik obliczenia (o ile zostało już wykonane) w sekcji Wyniki

Kontener api:
- Zmodyfikowano funkcję API pod adresem /values tak, by w razie, gdy wprowadzony współczynnik k nie jest liczbą strona zwracała kod 500 z informacją o błędzie
- Spolszczono teksty o błędach i obliczeniach

Pliki docker-compose:
- Utworzono plik docker-compose.yml, służący do uruchamiania produkcyjnej wersji usługi. W porównaniu do pliku docker-compose.dev.yml zamieniono opcje build, służące do budowania kontenerów tworzonych na podstawie plików Dockerfile.dev na opcje image, pobierające gotowe już obrazy, stworzone na podstawie produkcyjnych plików Dockerfile. Obrazy te zostały stworzone wcześniej za pomocą odpowiednich poleceń i wstawione na repozytorium na Docker Hubie
- Utworzono plik docker-swarm.yml, który jest zmodyfikowaną wersją pliku docker-compose.yml, tworzącą usługę jako tzw. stack, wykorzystywany przez klaster Docker Swarm. W kontenerach zastosowano opcje deploy, w których dla każdego kontenera skonfigurowane są ustawienia ich funkcjonowania w klastrze, takie jak liczba replik, zasady restartu oraz limity wykorzystywania zasobów