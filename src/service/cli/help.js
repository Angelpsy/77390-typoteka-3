'use strict';

const {log} = require(`../../utils/log`);

const HELP_TEXT = `Программа запускает http-сервер и формирует файл с данными для API.

    Гайд:
    server <command>

    Команды:
    --version:            выводит номер версии
    --help:               печатает этот текст
    --generate <count> [beautiful]   формирует файл mocks.json
    --server <port>       запуск http-сервера
`;

module.exports = {
  name: `--help`,
  run() {
    log(HELP_TEXT, {color: `grey`});
  }
};
