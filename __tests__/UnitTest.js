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

    test('고객이 메뉴를 주문하는 경우', () => {
        const inputs = [
            '양송이수프-1,티본스테이크-1',
            '시저샐러드-1,해산물파스타-2,아이스크림-1',
        ];
        const menus = [
            {
                양송이수프: 1,
                티본스테이크: 2,
            },
            {
                시저샐러드: 1,
                해산물파스타: 2,
                아이스크림: 1,
            },
        ];

        for (let i = 0; i < inputs.length; i++) {
            expect(() => {
                inputView.menuValidate(inputs[i]).toEqual(menus[i]);
            }).not.toThrow(
                '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.'
            );
        }
    });
});
