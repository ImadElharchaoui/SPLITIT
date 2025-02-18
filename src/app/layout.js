

import "./globals.css"; // Tailwind setup

export const metadata = {
  title: "ProgCast",
  description:
    "ProgCast is a website where you can learn programming using sound and files manager, where you can browse code files and listen to your podcaster offline or live",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="min-h-screen font-Edu">
          <main className="">{children}</main>
      </body>
    </html>
  );
};

export default Layout;
