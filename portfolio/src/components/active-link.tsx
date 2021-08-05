import {
  Children,
  cloneElement,
  HTMLProps,
  PropsWithChildren,
  ReactElement,
} from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import clsx from "clsx"

interface ActiveLink extends HTMLProps<HTMLAnchorElement> {
  activeClass?: string
}

export function ActiveLink({
  children,
  activeClass = "active",
  href,
  as,
  ...props
}: PropsWithChildren<ActiveLink>) {
  const router = useRouter()
  const child = Children.only(children) as ReactElement
  const active = router.asPath === href || router.asPath === as
  return (
    <Link href={href} as={as} {...props}>
      {cloneElement(child, {
        className: clsx(child.props.className, { [activeClass]: active }),
      })}
    </Link>
  )
}
