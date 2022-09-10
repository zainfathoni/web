import type { ComponentChildren } from 'preact'
import { classNames } from '../utils/class-names.tsx'

type ContainerProps = {
  className?: string
  children: ComponentChildren
}

function OuterContainer({ className = '', children, ...props }: ContainerProps) {
  return (
    <div class={classNames('sm:px-8', className)} {...props}>
      <div class="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  )
}

function InnerContainer({ className = '', children, ...props }: ContainerProps) {
  return (
    <div class={classNames('relative px-4 sm:px-8 lg:px-12', className)} {...props}>
      <div class="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  )
}

export function Container({ className = '', children, ...props }: ContainerProps) {
  return (
    <OuterContainer {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  )
}

Container.Outer = OuterContainer
Container.Inner = InnerContainer
