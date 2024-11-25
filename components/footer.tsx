import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
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
              <span className="text-lg font-semibold">CodeStart</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Making the world a better place through constructing elegant hierarchies.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Solutions</h3>
            <ul className="space-y-2">
              {["Marketing", "Analytics", "Commerce", "Insights"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Support</h3>
            <ul className="space-y-2">
              {["Pricing", "Documentation", "Guides", "API Status"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Subscribe to our newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">The latest news, articles, and resources, sent to your inbox weekly.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col-reverse sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; 2024 Your Company, Inc. All rights reserved.</p>
          <div className="flex space-x-6 mb-4 sm:mb-0">
            {[
              { icon: Facebook, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Github, href: "#" },
            ].map(({ icon: Icon, href }) => (
              <Link key={href} href={href} className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">{Icon.name}</span>
                <Icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}