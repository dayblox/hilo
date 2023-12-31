import { memoize, range } from "lodash"

export type Cards = { [key: number]: number }

export const totalCards = memoize(
  (cards: Cards, [from, to]) =>
    range(from, to).reduce((p, c) => p + cards[c], 0),
  (cards, ...args) => [Object.values(cards), ...args].join("_")
)
