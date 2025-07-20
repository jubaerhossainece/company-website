import Hero from "@/components/hero"
import AboutUs from "@/components/about-us"
import Services from "@/components/services"
import TeamMembers from "@/components/team-members"
import ContactUs from "@/components/contact-us"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutUs />
      <Services />
      <TeamMembers />
      <ContactUs />
      <Footer />
    </div>
  )
}
