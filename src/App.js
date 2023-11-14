import InputView from './InputView.js';
import OutputView from './OutputView.js';

const MENU_PRICES = {
    양송이수프: 6000,
    타파스: 5500,
    시저샐러드: 8000,
    티본스테이크: 55000,
    바비큐립: 54000,
    해산물파스타: 35000,
    크리스마스파스타: 25000,
    초코케이크: 15000,
    아이스크림: 5000,
    제로콜라: 3000,
    레드와인: 60000,
    샴페인: 25000,
};
const WEEKEND = [1, 2, 8, 9, 15, 16, 22, 23, 29, 30];
const STAR = [3, 10, 17, 24, 25, 31];

class App {
    async run() {}

    calculateTotalPrice(menus) {
        let totalPrice = 0;
        for (const menu in menus) {
            totalPrice += MENU_PRICES[menu] * menus[menu];
        }
        return totalPrice;
    }

    calculateDiscountPrice(totalPrice, date, category) {
        if (totalPrice < 10000) {
            return 0;
        }

        let discountPrice =
            this.calculateDdayDiscount(date) +
            this.calculateWeekdayDiscount(date, category) +
            this.calculateStarDiscount(date);
        return totalPrice - discountPrice;
    }

    calculateDdayDiscount(date) {
        if (date <= 25) {
            return 900 + date * 100;
        }
        return 0;
    }

    calculateWeekdayDiscount(date, category) {
        if (WEEKEND.includes(date)) {
            return category['메인'] * 2023;
        } else {
            return category['디저트'] * 2023;
        }
    }

    calculateStarDiscount(date) {
        if (STAR.includes(date)) {
            return 1000;
        }
        return 0;
    }

    isChampagnePresent(totalPrice) {
        return totalPrice >= 120000;
    }

    getEventBadge(price) {
        if (price >= 20000) {
            return '산타';
        } else if (price >= 10000) {
            return '트리';
        } else if (price >= 5000) {
            return '별';
        } else {
            return '없음';
        }
    }
}

export default App;
