import Footer from './Footer.jsx';
import Header from './Header.jsx';

function Layout({ children, sidebar }) {
  return (
    <div className="app">
      <Header />
      <div className="content-row">
        <main className="main">{children}</main>
        {sidebar && <aside className="sidebar">{sidebar}</aside>}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
