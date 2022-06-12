Polecenia budujące poszczególne kontenery:
- client: docker build -t djkrnl/zad2:client ./client && docker push djkrnl/zad2:client
- nginx: docker build -t djkrnl/zad2:nginx ./nginx && docker push djkrnl/zad2:nginx
- server: docker build -t djkrnl/zad2:server ./server && docker push djkrnl/zad2:server
- worker: docker build -t djkrnl/zad2:worker ./worker && docker push djkrnl/zad2:worker

Polecenie uruchamiające usługę w trybie produkcyjnym za pomocą pliku docker-compose.dev:
docker compose up

Repozytorium zawierające zbudowane obrazy produkcyjnej wersji usługi:
https://hub.docker.com/repository/docker/djkrnl/zad2

Zdjęcie pokazujące działanie usługi: https://postimg.cc/7JVXSmGX