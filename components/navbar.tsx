import Link from "next/link"
import ToggleThemeSwitcher from "./toggle.switcher"

const Navbar = () => {
  return (
    <header>
        <nav>
            <ul className="lowercase flex justify-between border border-white/20 p-2">
                <li className="text-3xl">
                    <Link href={"/"}>
                    Zahangir   
                    </Link>
                </li>
                <div>
                <li className="space-y-2">
                    <Link href={"/about"}>
                    about me
                    </Link>
                    </li>
                </div>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar