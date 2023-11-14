import { MissionUtils } from '@woowacourse/mission-utils';
const Console = MissionUtils.Console;
const MENUS = [
    '양송이수프',
    '타파스',
    '시저샐러드',
    '티본스테이크',
    '바비큐립',
    '해산물파스타',
    '크리스마스파스타',
    '초코케이크',
    '아이스크림',
    '제로콜라',
    '레드와인',
    '샴페인',
];

const APPETIZERS = ['양송이수프', '타파스', '시저샐러드'];
const MAINS = ['티본스테이크', '바비큐립', '해산물파스타', '크리스마스파스타'];
const DESSERTS = ['초코케이크', '아이스크림'];
const DRINKS = ['제로콜라', '레드와인', '샴페인'];

const InputView = {
    async readDate() {
        const input = await Console.readLineAsync(
            '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)'
        );
        if (this.dateValidate(input)) {
            return Number(input);
        }
    },

    dateValidate(date) {
        if (!/^\d+$/.test(date)) {
            throw new Error(
                '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.'
            );
        }

        if (Number(date) < 1 || Number(date) > 31) {
            throw new Error(
                '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.'
            );
        }

        return true;
    },

    async readMenu() {
        const input = await Console.readLineAsync(
            '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)'
        );
        if (this.menuValidate(input)) {
            return this.inputMenus(input);
        }
    },

    menuValidate(input) {
        const userMenus = {};
        let totalCount = 0;
        input.split(',').forEach((item) => {
            if (!/^[\w가-힣]+-\d+$/.test(item)) {
                throw new Error(
                    '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.'
                );
            }
            const [name, count] = item.split('-');
            totalCount += Number(count);
            if (!MENUS.includes(name) || userMenus[name] || totalCount > 20) {
                throw new Error(
                    '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.'
                );
            }
            userMenus[name] = Number(count);
        });
        return true;
    },

    inputMenus(input) {
        const orderedMenus = {};
        const categorieses = {
            에피타이저: 0,
            메인: 0,
            디저트: 0,
            음료: 0,
        };
        const menus = input.split(',');
        menus.forEach((item) => {
            const [name, count] = item.split('-');
            orderedMenus[name] = Number(count);
            categorieses[this.getCategory(name)] += Number(count);
        });
        return [orderedMenus, categorieses];
    },

    getCategory(name) {
        if (APPETIZERS.includes(name)) {
            return '에피타이저';
        }

        if (MAINS.includes(name)) {
            return '메인';
        }

        if (DESSERTS.includes(name)) {
            return '디저트';
        }

        if (DRINKS.includes(name)) {
            return '음료';
        }
    },
};

export default InputView;
