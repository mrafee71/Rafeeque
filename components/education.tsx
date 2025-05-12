"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCapIcon, CalendarIcon, MapPinIcon } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 section-pattern">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-2">Education</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Academic Background</h2>
          <div className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            <p>My educational qualifications and learning journey</p>
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
                      <GraduationCapIcon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl">Bachelor of Computer Applications (BCA)</CardTitle>
                  </div>
                  <CardDescription>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                        <span>2021 - 2024</span>
                      </div>
                      <div className="hidden sm:block text-muted-foreground">•</div>
                      <div className="flex items-center gap-1">
                        <MapPinIcon className="h-4 w-4 text-muted-foreground" />
                        <span>Kannur University, Kerala</span>
                      </div>
                    </div>
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pl-12 pt-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    I completed my Bachelor of Computer Applications degree with a focus on programming, database
                    management, and web development. The program provided me with a strong foundation in computer
                    science principles and practical skills.
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Subjects:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <motion.div
                        className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <span className="h-2 w-2 rounded-full bg-primary"></span>
                        <span>Data Structures and Algorithms</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <span className="h-2 w-2 rounded-full bg-primary"></span>
                        <span>Database Management Systems</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <span className="h-2 w-2 rounded-full bg-primary"></span>
                        <span>Web Technologies</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <span className="h-2 w-2 rounded-full bg-primary"></span>
                        <span>Object-Oriented Programming</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <span className="h-2 w-2 rounded-full bg-primary"></span>
                        <span>Software Engineering</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <span className="h-2 w-2 rounded-full bg-primary"></span>
                        <span>Computer Networks</span>
                      </motion.div>
                    </div>
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
