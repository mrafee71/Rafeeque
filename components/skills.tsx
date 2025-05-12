"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  CodeIcon,
  ServerIcon,
  DatabaseIcon,
  GitBranchIcon,
  PaletteIcon,
  GlobeIcon,
  LanguagesIcon,
  WrenchIcon,
} from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <CodeIcon className="h-6 w-6" />,
      skills: ["React", "Next.js", "HTML5", "CSS3", "JavaScript", "TypeScript"],
    },
    {
      title: "Backend",
      icon: <ServerIcon className="h-6 w-6" />,
      skills: ["Node.js", "Express", "Python", "Django"],
    },
    {
      title: "Database",
      icon: <DatabaseIcon className="h-6 w-6" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      title: "DevOps",
      icon: <GitBranchIcon className="h-6 w-6" />,
      skills: ["Git", "GitHub", "Apache", "Nginx"],
    },
    {
      title: "Design",
      icon: <PaletteIcon className="h-6 w-6" />,
      skills: ["Figma", "Responsive Design", "UI/UX", "Tailwind CSS", "Bootstrap", "Material UI"],
    },
    {
      title: "Web",
      icon: <GlobeIcon className="h-6 w-6" />,
      skills: ["REST API", "JWT"],
    },
    {
      title: "Languages",
      icon: <LanguagesIcon className="h-6 w-6" />,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "PHP"],
    },
    {
      title: "Tools",
      icon: <WrenchIcon className="h-6 w-6" />,
      skills: ["VS Code", "Postman", "Chrome DevTools", "MS Office"],
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-2">My Skills</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Expertise</h2>
          <div className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            <p>Technologies and tools I work with</p>
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full overflow-hidden border-none shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-sm font-medium transition-colors hover:bg-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
