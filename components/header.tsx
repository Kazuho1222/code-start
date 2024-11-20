import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="sr-only">Your Company</span>
              <svg
                className="h-8 w-auto text-primary"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 5.74C16.4 2.3 22.72 3.88 22.72 9.22C22.72 14.56 14.36 19.96 12 21C9.64 19.96 1.28 14.56 1.28 9.22C1.28 3.88 7.6 2.3 12 5.74Z" />
              </svg>
            </Link>
            <nav className="hidden md:ml-6 md:flex md:space-x-8">
              <Link href="#" className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium">
                About
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium">
                Services
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium">
                Contact
              </Link>
            </nav>
          </div>
          <div className="hidden md:flex md:items-center">
            <Button>Get Started</Button>
          </div>
          <div className="flex md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="#">Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#">About</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#">Services</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#">Contact</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button className="w-full">Get Started</Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}