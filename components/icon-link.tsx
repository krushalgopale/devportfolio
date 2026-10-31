import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type IconLinkProps = {
  href: string
  icon: ReactNode
  children: ReactNode
  external?: boolean
  hoverColor?: string
  className?: string
}

export function IconLink({
  href,
  icon,
  children,
  external = true,
  hoverColor,
  className,
}: IconLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      style={hoverColor ? ({ '--hover': hoverColor } as React.CSSProperties) : undefined}
      className={cn(
        'group inline-flex items-center gap-1.5 rounded-sm py-1 text-foreground/90 transition-colors hover:text-foreground',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
        className,
      )}
    >
      <span
        className={cn(
          'flex size-4 items-center justify-center text-muted-foreground transition-colors duration-200 [&>svg]:size-4',
          hoverColor ? 'group-hover:text-(--hover)' : 'group-hover:text-foreground',
        )}
      >
        {icon}
      </span>
      <span className="underline decoration-border decoration-1 underline-offset-4 transition-colors group-hover:decoration-foreground/60">
        {children}
      </span>
      {external && (
        <ArrowUpRight
          aria-hidden="true"
          className="size-3.5 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
        />
      )}
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  )
}
