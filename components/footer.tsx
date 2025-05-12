"use client"

import Link from "next/link"
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <motion.div
            className="flex flex-col items-center gap-2 md:items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400"
            >
              Muhammad Rafeeque PH
            </Link>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              Full Stack Developer specializing in modern web technologies
            </p>
          </motion.div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="https://github.com/mrafee71"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary hover:bg-primary/10 text-foreground hover:text-primary transition-colors"
            >
              <GithubIcon className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/muhammad-rafeeque-p-h-664b27224"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary hover:bg-primary/10 text-foreground hover:text-primary transition-colors"
            >
              <LinkedinIcon className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://x.com/muhammadrafee71"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary hover:bg-primary/10 text-foreground hover:text-primary transition-colors"
            >
              <TwitterIcon className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="mailto:muhammadrafeequeph@gmail.com"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary hover:bg-primary/10 text-foreground hover:text-primary transition-colors"
            >
              <MailIcon className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 border-t pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-xs text-muted-foreground">© {currentYear} Muhammad Rafeeque PH. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
