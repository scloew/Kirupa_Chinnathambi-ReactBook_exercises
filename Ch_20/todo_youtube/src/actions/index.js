export function increment(num) {
  return {
    type: 'INCREMENT',
    payload: num
  }
}

export function decrement() {
  return {
    type: 'DECREMENT'
  }
}