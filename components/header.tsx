import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-indigo-700 hover:text-indigo-600 transition-colors duration-300"
        >
          Ashutosh Choudhari
        </Link>
        <ul className="flex space-x-6">
          {["About", "Skills", "Projects", "Experience", "Education", "Tableau", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="relative px-3 py-2 text-gray-800 hover:text-indigo-600 transition-colors duration-300 group"
              >
                {item}
                <span className="absolute inset-0 bg-indigo-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

