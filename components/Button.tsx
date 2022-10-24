import { JSX } from 'preact'
import { IS_BROWSER } from '$fresh/runtime.ts'
import { classNames } from '../utils/class-names.tsx'

export type ButtonProps = JSX.HTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
  className?: string
}

export type ButtonLinkProps = JSX.HTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'secondary'
  className?: string
}

const variantStyles = {
  primary:
    'bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
  secondary:
    'bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70',
}

const baseClassName =
  'border(gray-100 2) hover:bg-gray-200 inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none'

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  className = classNames(baseClassName, variantStyles[variant], className ?? '')

  return <button {...props} disabled={!IS_BROWSER || props.disabled} className={className} />
}

export function ButtonLink({ variant = 'primary', className, href, ...props }: ButtonLinkProps) {
  className = classNames(baseClassName, variantStyles[variant], className ?? '')

  return <a {...props} href={href} disabled={!IS_BROWSER || props.disabled} className={className} />
}
