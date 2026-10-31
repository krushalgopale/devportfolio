export function AnimatedMascot() {
  return (
    <span
      aria-label="Animated mascot sipping a warm drink"
      className="mascot inline-flex shrink-0 items-center self-center leading-none"
    >
      <svg
        viewBox="220 550 320 325"
        className="h-7 w-[1.7rem] shrink-0 sm:h-8 sm:w-8"
        fill="none"
        aria-hidden="true"
      >
        <g
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M240 870c3-115 12-198 55-257 25-34 51-47 80-46 48 2 100 25 133 57 18 18 23 30 17 38-6 8-24 13-53 13" />
          <path d="M472 661c7 57 16 145 30 209" />
          <path d="M331 666c43-8 94-10 141-5" />
          <path d="M292 770c-11 30-13 57-3 72 8 13 19 14 29 1 15-19 20-58 24-82 3-17 8-24 19-25" />
          <path d="M367 728h66v32c0 14-9 22-25 22h-28c-15 0-23-8-23-23v-24c0-5 3-7 10-7Z" fill="#285600" />
          <path d="M367 743h-6c-7 0-10 5-10 11s4 11 10 11h7" />
        </g>
        <g className="mascot-eyes" fill="currentColor">
          <circle cx="374" cy="635" r="8" />
          <circle cx="472" cy="628" r="8" />
        </g>
        <g
          className="mascot-steam"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        >
          <path d="M389 716c-10-10 9-14-1-24" />
          <path d="M406 714c-10-10 9-14-1-24" />
        </g>
      </svg>
    </span>
  )
}
