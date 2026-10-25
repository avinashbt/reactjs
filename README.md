# useCallback vs useMemo — beginner example

A tiny Vite + React app that shows the difference between the two hooks.

## Run it

```bash
npm install
npm run dev
```

Open the printed URL and **open the browser console** — the logs are the lesson.

## The rule in one line

| Hook | Caches | Use it when |
| --- | --- | --- |
| `useMemo(() => value, deps)` | a **value** (return of a calculation) | the computation is expensive, or the result is a new object/array you don't want recreated each render |
| `useCallback(fn, deps)` | a **function** (its reference) | you pass the callback to a `React.memo` child, or it's a dependency of `useEffect` |

Fun fact: `useCallback(fn, deps)` is literally `useMemo(() => fn, deps)`.

## What the demo shows

### 1. `useMemo` — caches a value
`UseMemoDemo` computes `fib(n)`. Click **"unrelated state"**: the component
re-renders but the calculation does **not** run again (no new console line).
Change `n` and it runs once more.

### 2. `useCallback` — caches a function
`UseCallbackDemo` passes two callbacks into memoized `<Child>` components:

- the "unmemoized" one is recreated every render → child re-renders every time
- the `useCallback` one keeps a stable reference → child only re-renders when you click it

## When NOT to use them

- Don't wrap everything "just because": both hooks add bookkeeping cost.
- Only reach for them when you have a **measurable** problem: an expensive
  calculation, or a memoized child re-rendering unnecessarily.
- Values used inside `useEffect` are the other classic case — a new array or
  object each render causes the effect to re-fire forever.
