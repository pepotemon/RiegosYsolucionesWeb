import Link from "next/link"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:     "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]",
        secondary:   "bg-transparent border-2 border-white text-white hover:bg-white/10",
        outline:     "bg-transparent border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white",
        ghost:       "bg-transparent hover:bg-white/10 text-white",
        link:        "text-[var(--primary)] underline-offset-4 hover:underline p-0 h-auto font-normal",
        destructive: "bg-red-600 text-white hover:bg-red-700",
      },
      size: {
        default: "h-11 px-6 py-2",
        xs:      "h-6 px-2 text-xs",
        sm:      "h-8 px-3 text-xs",
        lg:      "h-14 px-8 text-base",
        icon:    "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    href?: string
    className?: string
    children?: React.ReactNode
  }

function Button({ href, variant, size, className, children, style, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, className }))

  if (href) {
    return (
      <Link href={href} className={classes} style={style}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} style={style} {...props}>
      {children}
    </button>
  )
}

export { Button, buttonVariants }
