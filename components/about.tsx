"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPinIcon, CalendarIcon, MailIcon, PhoneIcon } from "lucide-react"

export default function About() {
  const personalInfo = [
    { icon: <CalendarIcon className="h-4 w-4" />, label: "Date of Birth", value: "February 26, 2003" },
    { icon: <MapPinIcon className="h-4 w-4" />, label: "Location", value: "Kasaragod, Kerala, India" },
    { icon: <MailIcon className="h-4 w-4" />, label: "Email", value: "muhammadrafeequeph@gmail.com" },
    { icon: <PhoneIcon className="h-4 w-4" />, label: "Phone", value: "+91 9778552464" },
  ]

  return (
    <section id="about" className="py-20 md:py-28 section-pattern">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-2">About Me</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get to Know Me</h2>
          <div className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            <p>Learn more about my background and what drives me</p>
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-5xl items-start gap-8 py-8 lg:grid-cols-2 lg:gap-12 grid-cols-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="overflow-hidden border-none shadow-lg bg-card/50 backdrop-blur-sm">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                  Who I Am
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I am a fresh BCA graduate from Kannur University (2024) with a passion for web development. I have 6
                    months of internship experience as a web developer, where I honed my skills in building
                    responsive and user-friendly web applications.
                  </p>
                  <p>
                    I specialize in full-stack development with a focus on modern JavaScript frameworks like React and
                    Next.js. I am constantly learning and adapting to new technologies to stay current in the
                    ever-evolving field of web development.
                  </p>
                  <p>
                    My goal is to create elegant, efficient, and user-friendly web applications that solve real-world
                    problems.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="overflow-hidden border-none shadow-lg bg-card/50 backdrop-blur-sm">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                  Personal Information
                </h3>
                <div className="grid gap-4">
                  {personalInfo.map((item, index) => (
                    <motion.div
                    key={index}
                    className="flex items-center gap-1"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <div className="overflow-x-auto max-w-full whitespace-nowrap scrollbar-thin scrollbar-thumb-primary/50">
                        <p className="font-medium md:text-sm text-xs">{item.value}</p>
                      </div>
                    </div>
                  </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
