'use client';

import { useState } from 'react';
import { Menu, X, Moon, Sun, User, Settings, LogOut } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'My Learning', href: '/my-learning' },
    { name: 'Catalog', href: '/catalog' },
    { name: 'Roadmap', href: '/roadmap' },
    { name: 'Plans', href: '/plans' },
  ];

  // TODO: Replace with actual user data from auth store
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Backend Developer',
    avatar: null,
  };

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 shadow-sm fixed w-full top-0 z-50 transition-all duration-300">
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
                    className="text-gray-700 dark:text-gray-200 hover:text-sectionText px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-2">
              {/* Theme Toggle (selalu terlihat di desktop & mobile) */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>

              {/* User Dropdown hanya tampil di desktop */}
              <div className="hidden md:flex">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar || ''} alt={user.name} />
                        <AvatarFallback className="bg-blue-600 text-white">
                          {user.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="flex flex-col space-y-1 leading-none">
                        <p className="font-medium">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.role}</p>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-700 dark:text-gray-200 hover:text-sectionText p-2 transition-colors duration-200"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          isOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`sidebar-overlay fixed inset-0 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header Sidebar */}
            <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
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
                className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav Items */}
            <div className="flex-1 py-6">
              <nav className="px-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-sectionText hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* User Section (Mobile Only) */}
            <div className="flex-shrink-0 border-t dark:border-gray-700 p-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar || ''} alt={user.name} />
                      <AvatarFallback className="bg-blue-600 text-white">
                        {user.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-medium">{user.name}</span>
                      <span className="text-xs text-muted-foreground">{user.role}</span>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start" forceMount>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
