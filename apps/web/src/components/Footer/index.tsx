export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__inner">
          <p>
            Copyright &copy; {year} <a href="https://tanstack.com">TanStack</a>.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
