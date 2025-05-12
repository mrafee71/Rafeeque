"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AwardIcon, CalendarIcon, ExternalLinkIcon } from "lucide-react"
import Link from "next/link"

export default function Certifications() {
  const certifications = [
    {
      title: "UI Engineer Certification",
      issuer: "Steyp.com",
      date: "2024 Dec",
      certificateUrl: "https://drive.google.com/file/d/1bSDHSh4DZFCYC2x6rkfPfQXNCPvL2ll1/view?usp=sharing",
      skills: ["UI Design", "Frontend Development", "User Experience", "HTML/CSS", "JavaScript"],
      logo: "/images/steyp-logo.png",
    },
    {
      title: "Backend Developer – Python & Django",
      issuer: "Steyp.com",
      date: "2025 Apr",
      certificateUrl: "https://drive.google.com/file/d/12gVGR-VhUZmBn0FDSL5hj30f3jv5E-_z/view?usp=sharing",
      skills: ["Python", "Django", "Backend Development", "API Design", "Database Management"],
      logo: "/images/steyp-logo.png",
    },
    {
      title: "SEO Crash Course with Brian Dean",
      issuer: "Semrush Academy",
      date: "2025 Feb",
      certificateUrl: "#",
      skills: ["SEO", "Content Marketing", "Keyword Research", "Link Building", "Analytics"],
      logo: "/images/semrush-logo.png",
    },
  ]

  return (
    <section id="certifications" className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-2">
            Certifications
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Professional Credentials</h2>
          <div className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            <p>Courses and certifications I've completed to enhance my skills</p>
          </div>
        </motion.div>

        <div className="mx-auto max-w-4xl py-8 space-y-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-lg bg-card/50 backdrop-blur-sm">
                <CardHeader className="relative pb-0">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-purple-400"></div>
                  <div className="pl-6">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <AwardIcon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-xl md:text-2xl">{cert.title}</CardTitle>
                    </div>
                    <CardDescription>
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                        <div className="flex items-center gap-1">
                          <span className="font-medium">{cert.issuer}</span>
                        </div>
                        <div className="hidden sm:block text-muted-foreground">•</div>
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pl-12 pt-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} className="bg-primary/10 text-primary hover:bg-primary/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <Link
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    View Certificate
                    <ExternalLinkIcon className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
