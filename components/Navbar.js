import Link from "next/link";

const Navbar = () => {
    return (
      <header>
        <nav>
          <div className="nav">
            <Link href="/">Home</Link>
            <Link href="/campuses">Wild Code School Campuses</Link>
            <Link href="/information/about">About us</Link>
            <Link href="/information/terms-of-use">Terms of Use</Link>
          </div>
          <style jsx>{`
            .nav {
              padding-right: 50px;
            }
          `}</style>
        </nav>
      </header>
    );
}
 
export default Navbar;