# Клиентская часть приложения на React JS вывода геолокаций на Яндекс.Карты

В данном проекте использована готовая библиотека для работы с яндекс картами  [react-yandex-maps v4.5.0](https://react-yandex-maps.now.sh/).

## Available Scripts

Для запуска проекта на локальной машине в дирректории проекта 

### `npm start`

Откройте [http://localhost:3000](http://localhost:3000) для прос.
![](https://pandao.github.io/editor.md/examples/images/4.jpg)

## Сборка docker образа
Для сборки контейнера перейдите в дирректорию проекта
### `docker build -t CONTAINER_NAME ./`

## Запуск docker контейнера
(Порты возможно определить любыe, по умолчанию для npm 3000)
### `docker run -p 3000:3000 CONTAINER_NAME`

## Отправка в docker hub
### `docker tag CONTAINER_ID DOCKER_REPO_USER/REPO_CONTAINER_NAME`

## Получение из docker hub
### `docker pull DOCKER_REPO_USER/REPO_CONTAINER_NAME`

