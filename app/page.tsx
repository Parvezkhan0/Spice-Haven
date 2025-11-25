"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedDishes } from "@/components/featured-dishes"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Reservation } from "@/components/reservation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FeaturedDishes />
      <About />
      <Testimonials />
      <Reservation />
      <Footer />
    </main>
  )
}
