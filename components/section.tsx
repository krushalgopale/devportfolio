import type { ReactNode } from 'react'

export function Section({
  id,
  title,
  children,
  bordered = false,
}: {
  id: string
  title: string
  children: ReactNode
  bordered?: boolean
}) {
  return (
    <section aria-labelledby={id} className={bordered ? 'rounded-xl border border-border/80 px-4 py-4 sm:px-5' : 'flex flex-col gap-2'}>
      {bordered ? (
        <div className="flex flex-col gap-2.5">
          <h2 id={id} className="border-b border-border/80 pb-2 text-base font-semibold tracking-tight">
            {title}
          </h2>
          {children}
        </div>
      ) : (
        <>
          <h2 id={id} className="text-base font-semibold tracking-tight">
            {title}
          </h2>
          {children}
        </>
      )}
    </section>
  )
}
