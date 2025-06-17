import NavBar from '../home/NavBar';
import Footer from '../home/Footer';

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