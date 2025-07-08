"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLinkIcon, Code, FileTextIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import PortfolioWebImage from "@/public/images/rafeeque.jpg"
import MyStoreImage from "@/public/images/myStore.jpg"

export default function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js and Tailwind CSS to showcase my skills, projects, and experience.",
      image: PortfolioWebImage,
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/mrafee71/Rafeeque",
      liveUrl: "https://rafeeque.vercel.app/",
    },
    {
      title: "Hostel Management System",
      description:
        "A comprehensive web application for managing hostel operations including room allocation, student records, and fee management.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      certificateUrl: "https://drive.google.com/file/d/19lNKU8dyCK1Uuv4-hRTBLvS6zlyKb87s/view?usp=sharing",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "To-Do Application",
      description:
        "A task management application built with React.js and Redux that allows users to create, update, and track their daily tasks.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React.js", "Redux", "JavaScript", "CSS"],
      githubUrl: "https://github.com/mrafee71/Taskylo",
      liveUrl: "https://mrafee71.github.io/Taskylo/",
    },
    {
      title: "MyStore - E-commerce Platform",
      description:
        "An e-commerce platform UI built with  React.js, featuring product listings, user authentication, and a shopping cart.",
      image: MyStoreImage,
      tags: ["React.js", "HTML", "CSS", "Tailwind CSS", "JavaScript"],
      githubUrl: "https://github.com/mrafee71/mystore-ui",
      liveUrl: "https://mystore-ui-puce.vercel.app/",
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-28 section-pattern">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-2">My Work</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
          <div className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            <p>Showcasing my best work and contributions</p>
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-8 py-8 md:grid-cols-2 xl:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden border-none shadow-lg h-full bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105 z-0"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-secondary/50 hover:bg-secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 flex-wrap">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild className="rounded-full">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Code className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" asChild className="rounded-full">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLinkIcon className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                  {project.certificateUrl && (
                    <Button variant="outline" size="sm" asChild className="rounded-full">
                      <Link href={project.certificateUrl} target="_blank" rel="noopener noreferrer">
                        <FileTextIcon className="mr-2 h-4 w-4" />
                        Certificate
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
