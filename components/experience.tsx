"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from "lucide-react"

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-2">Experience</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Professional Journey</h2>
          <div className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            <p>My work experience and career path</p>
          </div>
        </motion.div>

        <div className="mx-auto max-w-4xl py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="overflow-hidden border-none shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader className="relative pb-0">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-purple-400"></div>
                <div className="pl-6">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <BriefcaseIcon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl">Web Developer Intern</CardTitle>
                  </div>
                  <CardDescription>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                        <span>6 months</span>
                      </div>
                      <div className="hidden sm:block text-muted-foreground">•</div>
                      <div className="flex items-center gap-1">
                        <MapPinIcon className="h-4 w-4 text-muted-foreground" />
                        <span>Al Farooq Group Of Companies</span>
                      </div>
                    </div>
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pl-12 pt-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    During my internship, I gained hands-on experience in web development, working on various projects
                    and enhancing my skills in Website Development.
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Developed responsive web pages using HTML, CSS, and JavaScript</li>
                      <li>Collaborated with senior developers on client projects</li>
                      <li>Participated in code reviews and team meetings</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">HTML</Badge>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">CSS</Badge>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">JavaScript</Badge>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Bootstrap</Badge>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">jQuery</Badge>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Sass</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
