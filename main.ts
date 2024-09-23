interface Card {
    value: number;
    suit: string;
}

const playerCards: Card[] = [];
const bankerCards: Card[] = [];

function dealCard(): Card {
    const suits = ['♠', '♣', '♦', '♥'];
    const value = Math.floor(Math.random() * 13) + 1; // 1-13のランダムな値
    const suit = suits[Math.floor(Math.random() * suits.length)];
    return { value, suit };
}

function calculateScore(cards: Card[]): number {
    let score = 0;
    cards.forEach(card => {
        score += card.value > 10 ? 10 : card.value; // 11以上は10としてカウント
    });
    return score % 10; // 最終的なスコアは10で割った余り
}

document.getElementById('deal-button')!.addEventListener('click', () => {
    playerCards.push(dealCard(), dealCard());
    bankerCards.push(dealCard(), dealCard());

    const playerScore = calculateScore(playerCards);
    const bankerScore = calculateScore(bankerCards);

    document.getElementById('player-cards')!.innerText = playerCards.map(card => `${card.value}${card.suit}`).join(', ');
    document.getElementById('banker-cards')!.innerText = bankerCards.map(card => `${card.value}${card.suit}`).join(', ');
    document.getElementById('player-score')!.innerText = playerScore.toString();
    document.getElementById('banker-score')!.innerText = bankerScore.toString();

    const resultMessage = playerScore > bankerScore ? 'プレイヤーの勝ち！' :
                         bankerScore > playerScore ? 'バンカーの勝ち！' :
                         '引き分け！';
    document.getElementById('result-message')!.innerText = resultMessage;
});
