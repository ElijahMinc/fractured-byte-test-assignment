
# Fractured Byte Test Assignment
 Привіт, інтерв'ювере! 👋

***Цей додаток вирішив написати, використовуючи **FSD-архітектуру**. Нижче напишу короткий її опис.***

# FSD Архітектура

# Опис
FSD (Feature-Sliced Design) — це архітектурний підхід для організації коду в JavaScript/TypeScript проєктах, який націлений на покращення підтримки та масштабування великих додатків. FSD фокусується на розбитті проєкту на чітко визначені, функціонально незалежні частини.

# Основні Принципи
* **Модульність**: Додаток розбивається на автономні модулі, кожен з яких виконує певну функцію чи групу функцій.

* **Ієрархія Абстракцій** (**Layers**): Розподіл коду на різні рівні абстракції (шари), що дозволяє уникнути змішування логіки.

* **Розділення Відповідальностей** (**SOLID**): Кожен модуль відповідає лише за одну частину функціональності додатку.

* **Чистота Коду**: Використання чітких та зрозумілих принципів іменування та структурування коду.

# Структура Проєкту

## Головні Layers:

* **app**: Головний модуль додатку, який включає в себе глобальні налаштування, конфігурації та загальні компоненти.

* **pages**: Сторінки додатку, кожна з яких відповідає за певний розділ чи функціональність.

* **widgets**: Самостійні модулі, які не залежать один від одного. Можуть містити стейт

* **features**: Функціональні блоки, які можуть використовуватись на різних сторінках, містять специфічну бізнес-логіку. Видалення з корзини, поставити лайк, апдейтнути щось тощо.

* **entities**: Також функціональні блоки, які можуть використовуватись на різних сторінках, але більш абстрактні і містять бізнес-логіку. Наприклад, Card, Book, Cart, Canvas, File тощо.

* **shared**: Загальні компоненти, утиліти та стилі, які використовуються у всьому додатку. Наприклад, Button, Checkbox, Input, Spinner, тощо.

## Slices:


## Usage/Examples

```folder
src/
├── app/
│   ├── layouts/
│   ├── providers/
│   └── index.tsx
├── pages/
│   ├── HomePage/
│   └── ProfilePage/
├── features/
│   ├── Auth/
│   └── UserProfile/
├── entities/
│   ├── Auth/
│   └── Canvas/
│   └── File/
├── widgets/
│   └── CanvasPointDrawingW/
│   └── File/
├── shared/
│   ├── ui/
│   ├── constants/
│   └── lib/
│   └── types/

```
## Screenshots

![App Screenshot](https://feature-sliced.design/ru/assets/images/visual_schema-e826067f573946613dcdc76e3f585082.jpg)
![App Screenshot](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQETPRRT8PxQIwdgeDdW76C7fp6HjitTOqyhQ&s)

## Run Locally

Clone the project

```bash
  https://github.com/ElijahMinc/fractured-byte-test-assignment.git
```

Go to the project directory

```bash
  cd fractured-byte-test-assignment
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Command for build

```bash
  npm run build
```


## Demo

https://fractured-test-assagniment.netlify.app


## FSD Documentation

[Feature Sliced Design Documentation Link](https://feature-sliced.design/docs)

