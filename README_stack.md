Polecenia użyte do uruchomienia usługi w klastrze:
- docker swarm init
- docker stack deploy --compose-file docker-swarm.yml zad2

Zdjęcie pokazujące działanie usługi: https://postimg.cc/Kk3fjtyp

Uwagi:
- jako manager wybrany został kontener redis ze względu na kluczowe znaczenie dla działania usługi (jest to baza danych, w której przechowywane są dane dotyczące obliczeń)
- kontenery client i nginx mają 2 repliki, pozostałe kontenery mają jedną (redis i postgres to kontenery odpowiedzialne za bazę danych, a kontener api wykonuje na niej polecenia - ich powielenie mogłoby spowodować poważne problemy w działaniu usługi, z kolei powielenie kontenera worker może prowadzić do błędów w obliczeniach)
- limity i przydziały zasobów zostały rozdysponowane tak, by wszystkie kontenery podczas maksymalnego obciążenia wykorzystywały całą moc procesora i nie przekraczały jej, najwięcej mocy obliczeniowej przydzielono kontenerowi client ze względu na potrzeby Reacta, ponadto większą część mocy przydzielono kontenerom api i nginx, gdyż odpowiadają one za zdecydowaną większość instrukcji wykonywanych przez usługę poza kontenerem client, podobnie rozdysponowano limity i przydziały pamięci RAM
- wszystkie kontenery skonfigurowano tak, by restartowały się automatycznie w przypadku wystąpienia błędu
- skonfigurowano aktualizacje kontenerów w ten sposób, żeby opóźnienie między aktualizacjami wynosiło 10 sekund