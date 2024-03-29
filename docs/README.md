# 미션 - 크리스마스 프로모션

## 시나리오

-   유저에게서 예상 방문 날짜를 받는다.
-   주문할 메뉴와 개수를 입력받는다.
-   이벤트 혜택을 보여준다.

## 목표

-   중복된 할인과 증정을 허용해서, 고객들이 혜택을 많이 받는다는 것을 체감할 수 있게 하는 것
-   올해 12월에 지난 5년 중 최고의 판매 금액을 달성
-   12월 이벤트 참여 고객의 5%가 내년 1월 새해 이벤트에 재참여하는 것

## 이벤트

-   할인 이벤트 (12월 1일 ~ 12월 31일)

    -   크리스마스 디데이 할인
        -   이벤트 기간: 12월 1일 ~ 12월 25일
        -   1000원으로 시작해 크리스마스가 다가올수록 날마다 할인 금액 100원 증가
    -   평일 할인: 평일에는 디저트 메뉴를 메뉴 1개당 2,023원 할인
        -   주의사항: 평일은 일요일 ~ 목요일
    -   주말 할인: 주말에는 메인 메뉴를 메뉴 1개당 2,023원 할인
        -   주의사항: 주말은 금요일과 토요일
    -   특별 할인: 이벤트 달력에 별이 있으면 총주문 금액에서 1,000원 할인

-   증정 이벤트

    -   증정 이벤트: 할인 전 총주문 금액이 12만 원 이상일 때, 샴페인 1개 증정
    -   12월 이벤트 배지 부여
        -   5천 원 이상: 별
        -   1만 원 이상: 트리
        -   2만 원 이상: 산타

-   주의사항
    -   총주문 금액 10,000원 이상부터 이벤트 적용
    -   음료만 주문 시, 주문할 수 없다.
    -   메뉴는 한 번에 최대 20개까지만 주문할 수 있다.

## 개발 요청사항

-   입력

    -   방문할 날짜
    -   메뉴

-   보여주기

    -   주문 메뉴
    -   할인 전 총주문 금액
    -   증정 메뉴
    -   혜택 내역
    -   총혜택 금액
    -   할인 후 예상 결제 금액
    -   12월 이벤트 배지 내용

-   주문 메뉴의 출력 순서는 자유
-   총혜택 금액 = 할인 금액의 합계 + 증정 메뉴의 가격
-   총혜택 금액에 따라 이벤트 배지의 이름을 다르게 보여준다.
-   할인 후 예상 결제 금액 = 할인 전 총주문 금액 - 할인 금액
-   증정 이벤트에 해당하지 않는 경우, 증정 메뉴 "없음"
-   고객에게 적용된 이벤트 내역만 출력
-   적용된 이벤트가 없다면 혜택 내역 "없음"
-   혜택 내역에 여러 개의 이벤트가 적용된 경우, 출력순서는 자유
-   이벤트 배지가 부여되지 않는 경우, "없음"

## 구현할 기능 목록

-   유효한 날짜를 받아오는 함수
-   유효한 주문을 받아오는 함수
-   받은 메뉴로 총 금액을 반환하는 함수
-   할인 혜택을 확인하는 함수
-   샴페인 증정여부 확인 함수
-   뱃지 증정여부 확인 함수
-   주문 메뉴 출력 함수
-   할인 전 총 줌누 금액 출력 함수
-   증정 메뉴 출력 함수
-   혜택 내역 출력 함수
-   총 혜택 금액 출력 함수
-   할인 후 예상 결제 금액 출력 함수
-   12월 이벤트 배지 출력 함수

## 예외 케이스

    - 모든 에러 메시지는 "[ERROR]로 시작하도록 작성"
    - 총주문 금액 10,000원 이상부터 이벤트 적용
    - 음료만 주문 시, 주문할 수 없다.
    - 메뉴는 한 번에 최대 20개까지만 주문할 수 있다.
    - 식당 방문 날짜는 1 이상 31 이하의 숫자로만 입력받는다.
        - 1 이상 31 이하의 숫자가 아닌 경우 "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요." 에러 메시지 출력
    - 메뉴 주문
        - 고객이 메뉴판에 없는 메뉴를 입력하는 경우
        - 메뉴의 개수가 1이상이 아닌 경우
        - 메뉴 형식이 예시와 다른 경우
        - 중복 메뉴를 입력한 경우
        - "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요." 에러 메시지 출력
    -
