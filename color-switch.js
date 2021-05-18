// Есть массив цветов в hex-формате и кнопки Start и Stop.
// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное
// значение из массива используя инлайн - стиль.При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз.
// Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

startBtnRef = document.querySelector("[data-action = start]");
stopBtnRef = document.querySelector("[data-action = stop]");

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomColor = (colors) => {
  let color = colors[randomIntegerFromInterval(0, colors.length - 1)];
  document.body.style.backgroundColor = color;
};

const toggleBtnAttribute = () => startBtnRef.toggleAttribute("disabled");

const onClickStartBtn = () => {
  toggleBtnAttribute();
  timerID = setInterval(() => {
    getRandomColor(colors);
  }, 1000);
};

const onClickStopBtn = () => {
  if (startBtnRef.hasAttribute("disabled")) {
    toggleBtnAttribute();
  }
  clearInterval(timerID);
};

const startStopSwitchColors = () => {
  if (!startBtnRef.hasAttribute("disabled")) {
    onClickStartBtn();
  } else {
    onClickStopBtn();
  }
};

startBtnRef.addEventListener("click", onClickStartBtn);
stopBtnRef.addEventListener("click", onClickStopBtn);
