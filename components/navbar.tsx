import Link from "next/link"

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
                <li className="">contact</li>
                <li className="group">about me</li>
                </div>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar