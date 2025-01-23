/**
 * Задание 2
Вы разрабатываете систему отзывов для вашего веб - сайта.Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

Создайте HTML - структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами.Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.
 */


let reviewId = 1; // счетчик для ID

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: reviewId++,
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: reviewId++,
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: reviewId++,
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: reviewId++,
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];


const productSelect = document.getElementById("product"); // выбор продукта
const reviewText = document.getElementById("reviewText"); // поле для написания отзыва
const submitReview = document.getElementById("submitReview"); // кнопка
const reviewsContainer = document.getElementById("reviews"); // контейнер с опубликованным отзывом
const errorMessage = document.getElementById("errorMessage"); // контейнер для ошибки если отзыв не корректный

// Инициализация отзывов
function loadInitialReviews() {
    reviewsContainer.innerHTML = "";
    initialData.forEach(({ product, reviews }) => {
        const productContainer = document.createElement("div");
        productContainer.innerHTML = `<h3>${product}</h3>`;
        reviews.forEach(({ text }) => {
            const reviewItem = document.createElement("div");
            reviewItem.className = "review-item";
            reviewItem.textContent = text;
            productContainer.appendChild(reviewItem);
        });
        reviewsContainer.appendChild(productContainer);
    });
}

// Добавление отзыва
function addReview(product, text) {
    if (text.length < 50 || text.length > 500) {
        throw new Error("Длина отзыва должна быть от 50 до 500 символов.");
    }

    // Найти продукт в начальных данных
    const productData = initialData.find((item) => item.product === product);
    if (productData) {

        // добавить новый отзыв
        productData.reviews.push({
            id: reviewId++,
            text,
        });
        console.log(productData.reviews);

        // Обновляем интерфейс
        loadInitialReviews();
    }
}

// Обработчик отправки отзыва
submitReview.addEventListener("click", () => {
    const selectedProduct = productSelect.value;
    const reviewContent = reviewText.value.trim();

    try {
        addReview(selectedProduct, reviewContent);
        errorMessage.textContent = ""; // Убираем сообщение об ошибке
        reviewText.value = ""; // Очищаем поле ввода
    } catch (error) {
        errorMessage.textContent = error.message; // Показываем сообщение об ошибке
    }
});

// Загрузка отзывов при старте
loadInitialReviews();