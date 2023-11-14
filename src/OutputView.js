import { MissionUtils } from '@woowacourse/mission-utils';
const Console = MissionUtils.Console;

const OutputView = {
    printMenu(menus) {
        Console.print('<주문 메뉴>');
        for (let menu in menus) {
            Console.print(`${menu} ${menus[menu]}개`);
        }
        Console.print('');
    },

    printDate(date) {
        Console.print(
            `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`
        );
        Console.print('');
    },

    printTotalPrice(totalPrice) {
        Console.print('<할인 전 총주문 금액>');
        Console.print(`${totalPrice}원`);
        Console.print('');
    },

    printChampagne(isChampagnePresent) {
        Console.print('<증정 메뉴>');
        if (isChampagnePresent) {
            Console.print('샴페인 1개');
        } else {
            Console.print('없음');
        }
        Console.print('');
    },

    printDiscountPrice(discounts) {
        Console.print('<혜택 내역>');
        if (discounts.length === 0) {
            Console.print('없음');
            Console.print('');
            return;
        }
        for (let discount in discounts) {
            Console.print(`${discount}: -${discounts[discount]}원`);
        }
        Console.print('');
    },

    printTotalDiscountPrice(discounts) {
        Console.print('<총혜택 금액>');
        let discountPrice = 0;
        for (let discount in discounts) {
            discountPrice += discounts[discount];
        }
        Console.print(`-${discountPrice}원`);
        Console.print('');
    },

    printExpectResultPrice(totalPrice) {
        Console.print('<할인 후 예상 결제 금액>');
        Console.print(`${totalPrice}원`);
        Console.print('');
    },

    printEventBadge(eventBadge) {
        Console.print('<12월 이벤트 배지>');
        Console.print(eventBadge);
        Console.print('');
    },
};

export default OutputView;
