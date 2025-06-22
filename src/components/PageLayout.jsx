import NavBar from './NavBar';
import Footer from './Footer';

function PageLayout({ children,  }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
export default PageLayout