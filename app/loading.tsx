export default function Loading() {
  return (
    <main className="grid min-h-dvh place-items-center" role="status" aria-label="Loading portfolio">
      <span className="pixel-loader" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </span>
      <span className="sr-only">Loading portfolio</span>
    </main>
  )
}
