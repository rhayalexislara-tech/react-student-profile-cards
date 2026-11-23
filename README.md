# Student Profile Cards (React)

A React app that displays three student profile cards using one reusable `StudentCard` component. Each card receives its data (name, course, section) through props.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually http://localhost:5173).

## Structure

- `src/StudentCard.jsx` - reusable card component (props: `name`, `course`, `section`)
- `src/App.jsx` - student data array and rendering of the cards with `.map()`
- `src/main.jsx` - entry point
