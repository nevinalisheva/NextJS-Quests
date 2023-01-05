import Link from "next/link";

const Navbar = () => {
    return (
      <header>
        <nav>
          <div>
            <Link href="/">Home</Link>
            <Link href="/information/about">About us</Link>
            <Link href="/information/terms-of-use">Terms of Use</Link>
          </div>
        </nav>
      </header>
    );
}
 
export default Navbar;