"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "My Learning", href: "#learning" },
    { name: "Catalog", href: "#catalog" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/assets/logo/apolloHeader.svg"
                  alt="Apollo Logo"
                  width={120}
                  height={40}
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-sectionText px-3 py-2 text-sm font-medium transition-colors duration-200">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex space-x-4">
              <Link
                href="/login"
                className="rounded-lg border border-sectionText text-sectionText hover:text-blue-800 px-4 py-2 text-sm font-medium transition-colors duration-200">
                Sign In
              </Link>
              <Link
                href="/register"
                className="bg-sectionText hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg">
                Sign Up
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-sectionText p-2 transition-colors duration-200">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          isOpen ? "visible" : "invisible"
        }`}>
        <div
          className={`sidebar-overlay fixed inset-0 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`fixed right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="relative w-[140px] h-[40px]">
                <Image
                  src="/assets/logo/apolloFooter.svg"
                  alt="Apollo header Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-700">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 py-6">
              <nav className="px-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 hover:text-sectionText hover:bg-blue-50 rounded-lg transition-all duration-200"
                    onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="p-4 space-y-3 border-t">
              <Link
                href="/login"
                className="block w-full text-center px-4 py-3 text-sectionText border border-sectionText rounded-lg hover:bg-blue-50 transition-all duration-200"
                onClick={() => setIsOpen(false)}>
                Sign In
              </Link>
              <Link
                href="/register"
                className="block w-full text-center px-4 py-3 bg-sectionText text-white rounded-lg hover:bg-blue-600 transition-all duration-200"
                onClick={() => setIsOpen(false)}>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
