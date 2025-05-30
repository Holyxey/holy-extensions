# Holy Extensions

[![npm version](https://img.shields.io/npm/v/holy-extensions.svg)](https://www.npmjs.com/package/holy-extensions)
[![npm downloads](https://img.shields.io/npm/dm/holy-extensions.svg)](https://www.npmjs.com/package/holy-extensions)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/holy-extensions)](https://bundlephobia.com/package/holy-extensions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Библиотека модулей для расширения функциональности веб-сайтов. [История изменений](CHANGELOG.md)

## Быстрый старт для конструкторов сайтов

Просто добавьте эти строки в HTML-код вашего сайта:

```html
<!-- Минимальный пример установки -->
<link rel="stylesheet" href="https://unpkg.com/holy-extensions/dist/holy-extensions.css" />
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
<script src="https://unpkg.com/holy-extensions/dist/holy-extensions.min.js"></script>
<script>
  window.holyxeyModal.set({
    title: 'Мы используем cookie',
    description: 'Продолжая пользоваться сайтом, вы соглашаетесь с Политикой конфиденциальности',
    backgroundColor: '#FFFFFF',
    textColor: '#555555',
    accentColor: '#d83d78',
    fontFamily: 'Arial',
  })
</script>
```

## Установка через NPM

```bash
npm install holy-extensions
# или
yarn add holy-extensions
# или
bun add holy-extensions
```

## Модули

### CookiesModal

Модуль для отображения уведомления о использовании cookies на сайте. Построен на Vue 3.

#### Использование

```javascript
// Как ES модуль
import { holyxeyModal } from 'holy-extensions'

holyxeyModal.set({
  title: 'Мы используем cookie',
  description: 'Продолжая пользоваться сайтом, вы соглашаетесь с Политикой конфиденциальности',
  backgroundColor: '#FFFFFF',
  textColor: '#555555',
  accentColor: '#d83d78',
  fontFamily: 'Jost',
  policyLink: '/policy',
  policyOpenText: 'Открыть документ',
  policyAcceptText: 'Принять',
})

// Или как глобальный объект
window.holyxeyModal.set({
  // конфигурация...
})
```

#### Опции

| Параметр         | Тип    | По умолчанию                       | Описание                              |
| ---------------- | ------ | ---------------------------------- | ------------------------------------- |
| title            | string | 'Мы используем cookie'             | Заголовок модального окна             |
| description      | string | 'Продолжая пользоваться сайтом...' | Описание в модальном окне             |
| backgroundColor  | string | '#FFFFFF'                          | Цвет фона                             |
| textColor        | string | '#555555'                          | Цвет текста                           |
| accentColor      | string | '#d83d78'                          | Цвет акцента                          |
| fontFamily       | string | 'Jost'                             | Шрифт                                 |
| policyLink       | string | '/policy'                          | Ссылка на политику конфиденциальности |
| policyOpenText   | string | 'Открыть документ'                 | Текст кнопки открытия политики        |
| policyAcceptText | string | 'Принять'                          | Текст кнопки принятия                 |

## Разработка

```bash
# Установка зависимостей
bun install

# Запуск dev сервера
bun dev

# Сборка библиотеки
bun run build
```

## CDN Использование

Библиотека также может быть подключена напрямую через CDN:

```html
<!-- Сначала подключите Vue -->
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<!-- Затем подключите holy-extensions -->
<script src="https://unpkg.com/holy-extensions"></script>

<script>
  window.holyxeyModal.set({
    // конфигурация...
  })
</script>
```
