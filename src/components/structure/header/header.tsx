"use client";

import Image from "next/image";

import Logo from "@/assets/images/rickandmorty_logo.png";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-100 shadow">
      <div className="container mx-auto py-4 px-8">
        <nav className="flex items-center justify-between flex-wrap">
          <Link href="/" className="flex items-center flex-shrink-0 mr-6">
            <Image width={160} height={40} src={Logo} alt="Logomarca" />
          </Link>
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-800 hover:text-gray-700 hover:border-gray-700"
            >
              <svg
                className="fill-current h-4 w-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 5h20v2H0V8zm0 5h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`w-full ${
              isMenuOpen ? "block" : "hidden"
            } lg:flex lg:items-center lg:w-auto`}
          >
            <div className="text-sm lg:flex-grow">
              <Link
                href="/favorite-episodes"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-4"
              >
                Favoritos
              </Link>
              <Link
                href="/watched-episodes"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-4"
              >
                Assistidos
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
