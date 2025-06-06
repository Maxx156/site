// Ваша конфигурация Firebase (замените на свою)
const firebaseConfig = {
  apiKey: "AIzaSyDX_R9qDThKR55DHNzDW3K_alhzWnracCg",
  authDomain: "rusavto-54e19.firebaseapp.com",
  projectId: "rusavto-54e19",
  storageBucket: "rusavto-54e19.firebasestorage.app",
  messagingSenderId: "265720526238",
  appId: "1:265720526238:web:1170bc8ba0aa7315f0d28f",
  measurementId: "G-T8LVZ9M5HC",
};

// Инициализация Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const counterEl = document.getElementById("counter");

// Получаем текущую дату в формате YYYY-MM-DD
function getTodayDate() {
  const now = new Date();
  return now.toISOString().split("T")[0];
}

const today = getTodayDate();

// Путь в базе для сегодняшнего счетчика
const counterRef = db.ref("counters/" + today);

// Функция обновления счетчика
function updateCounter() {
  counterRef.transaction(
    (current) => {
      if (current === null) {
        return 1;
      } else {
        return current + 1;
      }
    },
    (error, committed, snapshot) => {
      if (error) {
        counterEl.textContent = "Ошибка: " + error.message;
      } else if (!committed) {
        counterEl.textContent = "Не удалось обновить счетчик";
      } else {
        counterEl.textContent = snapshot.val();
      }
    }
  );
}

// Отобразить текущее значение счетчика и увеличить его
counterRef
  .once("value")
  .then((snapshot) => {
    if (snapshot.exists()) {
      counterEl.textContent = snapshot.val();
    } else {
      counterEl.textContent = "0";
    }
    updateCounter();
  })
  .catch((err) => {
    counterEl.textContent = "Ошибка: " + err.message;
  });
