import App from '../src/App.js';
import InputView from '../src/InputView.js';

describe('기능 테스트', () => {
    const app = new App();
    const inputView = new InputView();

    test('식당 방문 날짜는 1 이상 31 이하의 숫자로만 입력받는다.', () => {
        expect(() => {
            inputView.dateValidate('0');
        }).toThrow('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');

        expect(() => {
            inputView.dateValidate('32');
        }).toThrow('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    });

    test('식당 방문 날짜는 숫자만 입력받는다.', () => {
        expect(() => {
            inputView.dateValidate('a');
        }).toThrow('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    });

    test('메뉴는 한 번에 최대 20개 까지만 주문할 수 있다.', () => {
        const inputs = ['티본스테이크-21', '양송이수프-1,티본스테이크-20'];

        inputs.forEach((input) => {
            expect(() => {
                inputView.menuValidate(input);
            }).toThrow('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
        });
    });

    test('메뉴 형식이 예시와 다른 경우', () => {
        const inputs = [
            '티본스테이크-1/양송이수프-1',
            '바베큐립--,제로콜라-1',
            '초코케이크1',
        ];
        expect(() => {
            inputView.menuValidate();
        }).toThrow('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    });

    test('고객이 메뉴판에 없는 메뉴를 입력하는 경우', () => {
        expect(() => {
            inputView.menuValidate('티본스테이크-1,유빈이특제라면-1');
        }).toThrow('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    });

    test('고객이 메뉴를 주문하지 않는 경우', () => {
        expect(() => {
            inputView.menuValidate('');
        }).toThrow('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    });

    test('고객이 음료만 주문하는 경우', () => {
        const inputs = ['제로콜라-1', '제로콜라-1,레드와인-2'];
        inputs.forEach((input) => {
            expect(() => {
                inputView.menuValidate(input);
            }).not.toThrow(
                '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.'
            );
        });
    });

    test('고객이 중복 메뉴를 입력한 경우', () => {
        expect(() => {
            inputView.menuValidate('티본스테이크-1,티본스테이크-1');
        }).toThrow('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    });

    test('고객이 메뉴를 정상적으로 주문하는 경우', () => {
        const inputs = [
            '양송이수프-1,티본스테이크-1',
            '시저샐러드-1,해산물파스타-2,아이스크림-1',
        ];
        for (let i = 0; i < inputs.length; i++) {
            expect(() => {
                inputView.menuValidate(inputs[i]);
            }).not.toThrow(
                '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.'
            );
        }
    });

    test('고객이 주문한 메뉴의 총 금액을 계산한다.', () => {
        const menus = {
            양송이수프: 1,
            티본스테이크: 2,
        };
        const result = inputView.calculateTotalPrice(menus);
        expect(result).toEqual(116000);
    });

    test('고객이 지불할 금액을 이벤트에 맞추어 할인한다.', () => {
        const totalPrices = [116000, 83000, 151000];
        const dates = [21, 26, 25];
        const categorieses = [
            {
                에피타이저: 1,
                메인: 2,
                디저트: 0,
                음료: 0,
            },
            {
                에피타이저: 1,
                메인: 2,
                디저트: 1,
                음료: 0,
            },
            {
                에피타이저: 2,
                메인: 2,
                디저트: 2,
                음료: 1,
            },
        ];
        const returns = [113000, 80977, 142554];
        for (let i = 0; i < totalPrices.length; i++) {
            expect(
                inputView.calculateDiscountPrice(
                    totalPrices[i],
                    dates[i],
                    categorieses[i]
                )
            ).toEqual(returns[i]);
        }
    });

    test('고객이 주문한 메뉴의 총금액이 12만원 이상일 때, 샴페인을 증정한다.', () => {
        const totalPrices = [116000, 83000, 151000];
        const returns = [false, false, true];
        for (let i = 0; i < totalPrices.length; i++) {
            expect(inputView.isChampagnePresent(totalPrices[i])).toEqual(
                returns[i]
            );
        }
    });

    test('고객이 받은 할인 금액에 따라 이벤트 배지를 부여한다.', () => {
        const totalPrices = [116000, 83000, 151000];
        const discountPrices = [110000, 72000, 120000];
        const returns = ['별', '트리', '산타'];
        for (let i = 0; i < discountPrices.length; i++) {
            expect(
                inputView.getEventBadge(totalPrices[i] - discountPrices[i])
            ).toEqual(returns[i]);
        }
    });
});
