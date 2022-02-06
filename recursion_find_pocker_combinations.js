// Время на тест: 1 секунда.
// Известное казино хочет поправить свое пошатнувшееся финансовое положение, установив новую модель игровых автоматов "Покер" улучшенного дизайна. Игроку в покер необходимо собрать 5 карт таким образом, чтобы среди них было максимальное количество совпадающих (лучшая комбинация – все пять карт совпадает, а худшая – все различны). К сожалению, главный программист казино недавно неожиданно разбогател, уволился и уехал на Багамы. Без него казино не может решить, как по выпавшему набору карт определить размер выигрыша клиента. Помогите казино справиться с этой задачей.
// Формат входный данных: Программа получает на вход 5 целых положительных чисел x1, x2, x3, x4, x5, не превосходящих 109.

// Формат выходных данных: Программа должны вывести на экран одну из следующих строк:

// poker
//  если все 5 чисел равны 
// four of a kind
//  если ровно 4 числа равны между собой 
// full house
//  если три из пяти чисел равны между собой и два оставшихся числа равны 
// three of a kind
//  если ровно три числа равны 
// two pairs
//  если есть две пары равных чисел 
// one pair
//  если только два числа равны 
// all different
//  если все числа различны

// Пример

// Входные данные

//      7 3 7 7 3
// Выходные данные

//      full house
// Входные данные

//      1000 999 998 997 996

function check_cards(...cards){    

    let combination_result = [];

    function recursion_cards_map(cards, index){

        if (index == cards.length){

            if (cards[0] == cards[1] && cards[1] == cards[2] && cards[2] == cards[3] && cards[3] == cards[4])
                
                combination_result.push("pocker")

            if (cards[0] == cards[1] && cards[1] == cards[2] && cards[2] == cards[3])
                
                combination_result.push("four of a kind")

            if (cards[0] == cards[1] && cards[1] == cards[2] && cards[3] == cards[4])

                combination_result.push("full house")

            if (cards[0] == cards[1] && cards[1] == cards[2])

                combination_result.push("three of a kind")

            if (cards[0] == cards[1] && cards[2] == cards[3])

                combination_result.push("two pairs")

            if (cards[1] == cards[0])

                combination_result.push("one pair")

            if (cards[0] != cards[1] && cards[1] != cards[2] && cards[2] != cards[3] && cards[3] != cards[4])

                null

        }
        else{

            for (let i = index; i < cards.length; i++){

                let temp = cards[index]
                cards[index] = cards[i]
                cards[i] = temp

                recursion_cards_map(cards, index + 1)

                temp = cards[index]
                cards[index] = cards[i]
                cards[i] = temp 
            }
        }
    }

    recursion_cards_map(cards, 0)

    if (combination_result.find(res => res === "pocker"))
        return "POCKER"
    else if (combination_result.find(res => res === "four of a kind"))
        return "FOUR OF A KIND" 
    else if (combination_result.find(res => res === "full house"))
        return "FULL HOUSE"
    else if (combination_result.find(res => res === "three of a kind"))
        return "THREE OF A KIND"
    else if (combination_result.find(res => res === "two pairs"))
        return "TWO PAIRS"
    else if (combination_result.find(res => res === "one pair"))
        return "ONE PAIR"
    else 
        return "NOTHING"
}

const result = check_cards(6, 2, 7, 6, 7)

console.log("========= RESULT ===========")
console.log(result)