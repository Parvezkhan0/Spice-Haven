export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Spice Haven</h3>
            <p className="text-primary-foreground/80">Authentic Indian cuisine crafted with passion and tradition.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Appetizers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Main Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Breads
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Desserts
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 text-primary-foreground/80">
              <a href="#" className="hover:text-primary-foreground transition">
                Facebook
              </a>
              <a href="#" className="hover:text-primary-foreground transition">
                Instagram
              </a>
              <a href="#" className="hover:text-primary-foreground transition">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2025 Spice Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
