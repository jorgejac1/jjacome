export function Footer() {
  return (
    <footer className="border-t border-border py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-accent-dim text-xs">
        <span>&copy; {new Date().getFullYear()} Jorge Jacome</span>
        <div className="flex gap-4">
          <a
            href="https://github.com/jorgejac1"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/jorge-jacome"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:jorgejac97@gmail.com"
            className="link-hover hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
