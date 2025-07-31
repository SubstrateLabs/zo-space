import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Mail,
  MapPin,
  Calendar,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const BioPage = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <Avatar className="w-32 h-32 mx-auto mb-4">
            <AvatarFallback className="text-2xl">BZ</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl font-bold mb-2">Benjamin Zo</h1>
          <p className="text-xl text-muted-foreground mb-4">
            Full Stack Developer & Designer
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>Available for hire</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>About Me</CardTitle>
              <CardDescription>A brief introduction</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of
                experience building modern web applications. I love creating
                intuitive user experiences and robust backend systems that
                scale. When I'm not coding, you'll find me exploring new
                technologies, contributing to open source projects, or enjoying
                the great outdoors.
              </p>
              <p className="text-sm leading-relaxed">
                My journey in tech started with a fascination for how things
                work under the hood. Today, I specialize in React, TypeScript,
                Node.js, and Python, always staying current with the latest
                industry trends and best practices.
              </p>
              <Separator />
              <div>
                <h3 className="font-semibold mb-2">What I Do</h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>
                    • Build scalable web applications from concept to deployment
                  </li>
                  <li>• Design and implement RESTful APIs and microservices</li>
                  <li>• Create responsive, accessible user interfaces</li>
                  <li>
                    • Mentor junior developers and lead technical discussions
                  </li>
                  <li>• Optimize performance and user experience</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Skills & Contact Section */}
          <div className="space-y-6">
            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Next.js</Badge>
                      <Badge variant="secondary">Tailwind CSS</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">FastAPI</Badge>
                      <Badge variant="secondary">PostgreSQL</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Tools</h4>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="secondary">Docker</Badge>
                      <Badge variant="secondary">AWS</Badge>
                      <Badge variant="secondary">Git</Badge>
                      <Badge variant="secondary">Figma</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <a href="mailto:benjamin@zo.space">
                    <Mail className="w-4 h-4 mr-2" />
                    benjamin@zo.space
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <a
                    href="https://github.com/benjaminzo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <a
                    href="https://linkedin.com/in/benjaminzo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <a
                    href="https://twitter.com/benjaminzo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Experience Section */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Experience</CardTitle>
            <CardDescription>My professional journey</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">Senior Full Stack Developer</h3>
                  <p className="text-sm text-muted-foreground">TechCorp Inc.</p>
                </div>
                <Badge variant="outline">2021 - Present</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Lead development of customer-facing applications serving 100k+
                users. Architected microservices infrastructure and mentored a
                team of 5 developers.
              </p>
            </div>
            <Separator />
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">Frontend Developer</h3>
                  <p className="text-sm text-muted-foreground">StartupXYZ</p>
                </div>
                <Badge variant="outline">2019 - 2021</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Built responsive web applications using React and TypeScript.
                Collaborated with designers to implement pixel-perfect UIs.
              </p>
            </div>
            <Separator />
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">Junior Developer</h3>
                  <p className="text-sm text-muted-foreground">
                    WebSolutions LLC
                  </p>
                </div>
                <Badge variant="outline">2018 - 2019</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Developed and maintained client websites using modern web
                technologies. Gained experience in full-stack development and
                agile methodologies.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BioPage;
