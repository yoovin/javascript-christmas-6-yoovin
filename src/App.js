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
        let discountPrice = 0;
        if (date <= 25) {
            discountPrice += 900 + date * 100;
        }
        if (WEEKEND.includes(date)) {
            discountPrice += category['메인'] * 2023;
        } else {
            discountPrice += category['디저트'] * 2023;
        }
        if (STAR.includes(date)) {
            discountPrice += 1000;
        }
        return totalPrice - discountPrice;
    }

    isChampagnePresent(totalPrice) {
        return totalPrice >= 120000;
    }
}

export default App;
