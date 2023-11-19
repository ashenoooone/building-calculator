# 🏠 Domix — Калькулятор строительства дома для малоэтажных компаний

Данный репозиторий представляет собой фронтенд часть приложения Domix. <br>
Бэкенд: [Domix-back](https://github.com/wilidon/domix)


## Запуск в dev режиме

1. Склонировать данный репозиторий к себе на рабочий компьютер
2. Прописать команду ```npm install```
3. Запустить командой ```npm run dev```


## Генератор слоев

В проекте создана возможность автоматической генерации слоев по архитектуре FSD.

1. Поддерживается 4 вида слоев: pages, widgets, features, entities
2. Генерируется model, types, slice, ui, api и все необходимые для начала работы файлы
3. Автоматическая генерация содержимого файлов, публичного api

Для вызова генератора слоев надо ввести команду

`npm run generate:slice {pages|entities|widgets|features} {название_слайса}`

## Авторы

👨‍💻 **Роман**

* Telegram: [@ashenoooone](https://t.me/ashenoooone) 
* GitHub: [@ashenoooone](https://github.com/ashenoooone)
