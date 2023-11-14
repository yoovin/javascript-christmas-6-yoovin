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
};

export default InputView;
