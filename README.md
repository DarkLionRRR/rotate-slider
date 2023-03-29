# rotate-slider

Проект собран с помощью Webpack 5

## Развертывание проекта
1. Скачать проект с репозитория
2. Выполнить команду
   ```
   npm install
   ```
3. Для запуска в режиме разработки
   ```
   npm run serve
   ```
3. Для запуска в режиме продакшена
   ```
   npm run build
   ```
   
## Стек
- PUG
- SASS (SCSS)
- POSTCSS
- Babel
- ES6+ syntax

## Файлы /src
- `scss/plugins/rotate-slider` - папка со стилями слайдера
- `js/plugins/rotate-slider.js` - главный js-файл слайдера
- `js/plugins/classes/RotateSliderError.js` - класс ошибок для слайдера
- остальные файлы служат для демонстрации, но можно использовать в проекте

## Верстка
```
<div class="rotate-slider">
      <div class="rotate-slider-wrapper">
        <div class="rotate-slider-item">Slide 1</div>
        <div class="rotate-slider-item">Slide 2</div>
        <div class="rotate-slider-item">Slide 3</div>
        ...
      </div>
    </div>
```
## JS
```
const slider = new RotateSlider('#rotateSlide', {
    startSlide: 2,
    direction: 'horizontal',
    effect: 'fade',
    thumb: slider2,
    scroll: false,
    drag: true
})
```

# RotateSlider API
## RotateSlider(selector, [options] object)
- `selector` - CSS-селектор слайдера (элемент с классом "rotate-slider")
#### options
- `startSlide (integer|null)` - индекс, с которого начать показ слайда
- `effect ('fade'|null)` - для переключения плавного пролистывания
- `direction ('horizontal'|'vertical'|null)` - вращение по вертикали/горизонтале
- `thumb (RotateSlider object | null)` - синхронизация с другим слайдером
- `scroll (bool | null)` - режим скролла
- `drag (bool | null)` - режим перетаскивания

#### thumb
Принцип работы следующий: передается ТОЛЬКО один экземпляр RotateSlider (экземпляр ДОЛЖЕН быть уже объявлен и инициализирован). Далее, при инициализации текущего экземпляра формируется 2-сторонняя связь между слайдерами. При срабатывании триггера одного из слайдеров, отрабатывают оба.

#### пример thumb
```
// слайдер с дефолтными параметрами
const slider1 = new RotateSlider('#rotateSlide1');

// слайдер, который нужно соединить с slider1
const slider2 = new RotateSlider('#rotateSlide2', {
    thumb: slider1
});
```

На примере с Roadmap. Существуют три слайдера (даты, кружки, контент). Они соединены следующим образом даты -> кружки -> контент
```
// плашки с текстом
const slider = new RotateSlider('#rotateSlide', {
    startSlide: 2,
});

// кружки
const circleSlider = new RotateSlider('#rotateCircle', {
    startSlide: 2,
    thumb: slider, // соединяем с текстом
});

// даты
const dateSlider = new RotateSlider('#rotateDate', {
    startSlide: 2,
    thumb: circleSlider, // соединяем с кружками
});
```