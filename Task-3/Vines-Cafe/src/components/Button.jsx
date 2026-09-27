const variants = {
  primary:
    'bg-[#c45a3c] text-[#fff9f2] shadow-[0_18px_30px_rgba(91,53,36,0.2)] hover:bg-[#b14d2f] focus-visible:outline-[#241914]',
  secondary:
    'border border-[#d6c7b5] bg-[#fffaf4]/80 text-[#241914] hover:bg-[#f1e7da] focus-visible:outline-[#241914]',
}

export default function Button({ children, href, variant = 'primary', className = '', ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-[0.02em] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
