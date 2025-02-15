"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Briefcase,
  GraduationCap,
  Heart,
  Menu,
  X,
  Star,
  Award,
  Book,
  Users,
  Stethoscope,
  AmbulanceIcon as FirstAid,
  Activity,
} from "lucide-react"
import ProfileImage from '/public/profile.jpeg'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <header className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Kamlesh Sen</h1>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
            <div
              className={`${isMenuOpen ? "block" : "hidden"} md:block absolute md:relative top-full left-0 right-0 bg-gradient-to-r from-blue-600 to-green-600 md:bg-none`}
            >
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
                <Link
                  href="#home"
                  className="hover:text-blue-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className="hover:text-blue-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#services"
                  className="hover:text-blue-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="#experience"
                  className="hover:text-blue-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Experience
                </Link>
                <Link
                  href="#skills"
                  className="hover:text-blue-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </Link>
                <Link
                  href="#testimonials"
                  className="hover:text-blue-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <Link
                  href="#contact"
                  className="hover:text-blue-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section id="home" className="py-20 bg-gradient-to-r from-blue-100 to-green-100">
          <div className="container mx-auto px-4 text-center">
            {/* /placeholder.svg?height=200&width=200 */}
            <Image
              src={ProfileImage}
              alt="Kamlesh Sen"
              width={250}
              className="rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
            />
            <h2 className="text-4xl font-bold mb-4 text-blue-800">Kamlesh Sen</h2>
            <p className="text-xl mb-8 text-green-700">
              Educational Consultant | Nursing Professional | Healthcare Services Provider
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white"
              >
                <Link href="#contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
                <Link href="#services">My Services</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">About Me</h2>
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
              <p className="mb-4 text-gray-700">
                With over 5 years of experience in nursing and a passion for education, I bring a unique blend of skills
                to both healthcare and educational consulting. As the owner of Balaji Education Bhilwara, I'm dedicated
                to guiding students towards their academic goals in the medical field.
              </p>
              <p className="mb-4 text-gray-700">
                My nursing background includes expertise in patient care, team leadership, and continuous quality
                improvement. I'm committed to providing compassionate care and fostering a positive healthcare
                environment.
              </p>
              <p className="text-gray-700">
                Through Shree Ram Health Care Bhilwara, I extend my commitment to health and well-being, offering
                comprehensive healthcare services to the community. My goal is to bridge the gap between quality
                education and healthcare services.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-gradient-to-r from-blue-100 to-green-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">My Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600">
                    <GraduationCap className="mr-2" />
                    Educational Consulting
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Owner of Balaji Education Bhilwara, providing expert guidance for students pursuing careers in
                    healthcare and nursing.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-600">
                    <Heart className="mr-2" />
                    Nursing Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Experienced and compassionate nursing care with a focus on patient well-being and advanced medical
                    procedures.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600">
                    <Briefcase className="mr-2" />
                    Healthcare Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Comprehensive healthcare solutions through Shree Ram Health Care Bhilwara, including home care and
                    medical consultations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="experience" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Experience & Education</h2>
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-green-700">Professional Experience</h3>
              <ul className="list-disc list-inside mb-6 text-gray-700">
                <li>5+ years of nursing experience in various healthcare settings</li>
                <li>Owner and Educational Consultant at Balaji Education Bhilwara</li>
                <li>Healthcare Services Provider at Shree Ram Health Care Bhilwara</li>
                <li>Expertise in medical-surgical nursing and patient care planning</li>
                <li>Leadership experience in coordinating patient admissions, discharges, and transfers</li>
              </ul>
              <h3 className="text-2xl font-semibold mb-4 text-green-700">Education & Certifications</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Bachelor of Science in Nursing, Rajasthan University Of Health and Science (Expected: April 30, 2025)
                </li>
                <li>Registered Nurse (RN), Rajasthan</li>
                <li>Basic Life Support (BLS) Certification</li>
                <li>Advanced Cardiovascular Life Support (ACLS) Certification</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 bg-gradient-to-r from-blue-100 to-green-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Skills & Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <Stethoscope size={48} className="text-blue-600 mb-2" />
                <p className="text-center text-gray-700">Patient Assessment</p>
              </div>
              <div className="flex flex-col items-center">
                <FirstAid size={48} className="text-green-600 mb-2" />
                <p className="text-center text-gray-700">Emergency Care</p>
              </div>
              <div className="flex flex-col items-center">
                <Activity size={48} className="text-blue-600 mb-2" />
                <p className="text-center text-gray-700">Vital Signs Monitoring</p>
              </div>
              <div className="flex flex-col items-center">
                <Users size={48} className="text-green-600 mb-2" />
                <p className="text-center text-gray-700">Patient Education</p>
              </div>
              <div className="flex flex-col items-center">
                <Book size={48} className="text-blue-600 mb-2" />
                <p className="text-center text-gray-700">Medical Knowledge</p>
              </div>
              <div className="flex flex-col items-center">
                <Award size={48} className="text-green-600 mb-2" />
                <p className="text-center text-gray-700">Leadership</p>
              </div>
              <div className="flex flex-col items-center">
                <GraduationCap size={48} className="text-blue-600 mb-2" />
                <p className="text-center text-gray-700">Educational Consulting</p>
              </div>
              <div className="flex flex-col items-center">
                <Heart size={48} className="text-green-600 mb-2" />
                <p className="text-center text-gray-700">Compassionate Care</p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-4">
                    "Kamlesh's guidance was invaluable in my nursing education journey. His expertise and support made
                    all the difference."
                  </p>
                  <div className="flex items-center">
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                  </div>
                  <p className="font-semibold mt-2">- Priya S., Nursing Student</p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-4">
                    "The care provided by Shree Ram Health Care was exceptional. Kamlesh's team is professional, caring,
                    and highly skilled."
                  </p>
                  <div className="flex items-center">
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                  </div>
                  <p className="font-semibold mt-2">- Rajesh P., Patient</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gradient-to-r from-blue-100 to-green-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-blue-800">Get in Touch</h2>
            <p className="mb-8 text-gray-700">
              Interested in my services or want to learn more? Don't hesitate to reach out!
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white"
              >
                <Link href="mailto:contact@kamleshsen.com">Email Me</Link>
              </Button>
              <Button asChild variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
                <Link href="tel:+911234567890">Call Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">&copy; 2025 Kamlesh Sen. All rights reserved.</p>
          <p className="text-sm">Balaji Education Bhilwara | Shree Ram Health Care Bhilwara</p>
        </div>
      </footer>
    </div>
  )
}

