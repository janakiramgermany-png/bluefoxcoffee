import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-white
        border-b
        border-slate-200
      "
    >
      <nav
        className="
          max-w-7xl
          mx-auto
          flex
          items-center
          justify-between
          px-6
          h-20
        "
      >
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/blue-fox-coffee.png"
            alt="Blue Fox Coffee"
            width={48}
            height={48}
            priority
            className="object-contain"
          />
          <span className="text-lg font-semibold text-slate-900">
            Blue Fox Coffee
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8 text-sm font-medium text-slate-700">
          <li>
            <Link href="/" className="hover:text-blue-700 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/menu" className="hover:text-blue-700 transition">
              Menu
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-700 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-700 transition">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}