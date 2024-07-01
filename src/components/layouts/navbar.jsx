import { CircleUser, Menu, Package2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Outlet, Link } from "react-router-dom";

function SharedLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link to="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
            <Package2 className="h-6 w-6" />
            <span className="sr-only">My Dev Portfolio</span>
          </Link>
          <Link to="/" className="text-muted-foreground transition-colors hover:text-foreground">
            Home
          </Link>
          <Link to="/about" className="text-muted-foreground transition-colors hover:text-foreground">
            About
          </Link>
          <Link to="/projects" className="text-muted-foreground transition-colors hover:text-foreground">
            Projects
          </Link>
          <Link to="/blog" className="text-muted-foreground transition-colors hover:text-foreground">
            Blog
          </Link>
          <Link to="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
                <Package2 className="h-6 w-6" />
                <span className="sr-only">My Dev Portfolio</span>
              </Link>
              <Link to="/" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link to="/projects" className="text-muted-foreground hover:text-foreground">
                Projects
              </Link>
              <Link to="/blog" className="text-muted-foreground hover:text-foreground">
                Blog
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-4 md:gap-2 lg:gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center p-4">
        <Outlet />
      </main>
      <footer className="flex items-center justify-center h-16 border-t bg-background">
        <p className="text-muted-foreground">© 2023 My Dev Portfolio</p>
      </footer>
    </div>
  );
}

export default SharedLayout;