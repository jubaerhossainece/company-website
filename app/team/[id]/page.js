import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Github, Linkedin, Mail, MapPin, Calendar, Award, Users, Code } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

const teamMembers = {
  "ai-developer": {
    name: "Sarah Chen",
    role: "AI Developer",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Sarah is a passionate AI developer with over 6 years of experience in machine learning and deep learning. She specializes in developing cutting-edge AI solutions that solve real-world business problems.",
    location: "San Francisco, CA",
    joinDate: "January 2020",
    email: "sarah.chen@techcompany.com",
    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "NLP",
      "Computer Vision",
      "Deep Learning",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Jupyter",
    ],
    experience: [
      {
        title: "Senior AI Developer",
        company: "TechCompany",
        period: "2022 - Present",
        description: "Leading AI projects and mentoring junior developers in machine learning implementations.",
      },
      {
        title: "Machine Learning Engineer",
        company: "DataCorp",
        period: "2020 - 2022",
        description: "Developed predictive models and implemented ML pipelines for various client projects.",
      },
      {
        title: "Data Scientist",
        company: "Analytics Inc",
        period: "2018 - 2020",
        description: "Analyzed large datasets and created insights for business decision making.",
      },
    ],
    projects: [
      "AI-powered Customer Service Chatbot",
      "Predictive Analytics Dashboard",
      "Computer Vision Quality Control System",
      "Natural Language Processing API",
    ],
    achievements: [
      "Published 5 research papers in AI conferences",
      "Led team of 8 developers on major AI project",
      "Reduced client processing time by 70% with ML optimization",
      "Certified TensorFlow Developer",
    ],
  },
  "software-developer": {
    name: "Michael Rodriguez",
    role: "Software Developer",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Michael is a full-stack developer with expertise in modern web technologies. He has a passion for creating scalable, efficient applications and has been instrumental in delivering high-quality software solutions.",
    location: "Austin, TX",
    joinDate: "March 2019",
    email: "michael.rodriguez@techcompany.com",
    skills: [
      "React",
      "Node.js",
      "JavaScript",
      "AWS",
      "Docker",
      "PostgreSQL",
      "MongoDB",
      "GraphQL",
      "Next.js",
      "Express.js",
    ],
    experience: [
      {
        title: "Senior Software Developer",
        company: "TechCompany",
        period: "2021 - Present",
        description: "Architecting and developing complex web applications using modern technologies.",
      },
      {
        title: "Full Stack Developer",
        company: "WebSolutions",
        period: "2019 - 2021",
        description: "Built responsive web applications and RESTful APIs for various clients.",
      },
      {
        title: "Frontend Developer",
        company: "StartupXYZ",
        period: "2017 - 2019",
        description: "Developed user interfaces and improved user experience for web applications.",
      },
    ],
    projects: [
      "E-commerce Platform with 1M+ users",
      "Real-time Collaboration Tool",
      "Enterprise Resource Planning System",
      "Mobile-first Progressive Web App",
    ],
    achievements: [
      "Improved application performance by 60%",
      "Mentored 12 junior developers",
      "Led migration to microservices architecture",
      "AWS Certified Solutions Architect",
    ],
  },
  "project-manager": {
    name: "Emily Johnson",
    role: "Project Manager",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Emily is an experienced project manager with a proven track record of delivering complex software projects on time and within budget. She excels at coordinating cross-functional teams and ensuring client satisfaction.",
    location: "New York, NY",
    joinDate: "June 2018",
    email: "emily.johnson@techcompany.com",
    skills: [
      "Agile",
      "Scrum",
      "Risk Management",
      "Client Relations",
      "Team Leadership",
      "JIRA",
      "Confluence",
      "MS Project",
      "Slack",
      "Trello",
    ],
    experience: [
      {
        title: "Senior Project Manager",
        company: "TechCompany",
        period: "2020 - Present",
        description: "Managing multiple high-value projects and leading cross-functional teams of 15+ members.",
      },
      {
        title: "Project Manager",
        company: "ConsultingFirm",
        period: "2018 - 2020",
        description: "Coordinated software development projects for enterprise clients.",
      },
      {
        title: "Business Analyst",
        company: "FinanceCorpn",
        period: "2016 - 2018",
        description: "Analyzed business requirements and facilitated communication between stakeholders.",
      },
    ],
    projects: [
      "Enterprise CRM Implementation ($2M project)",
      "Digital Transformation Initiative",
      "Multi-platform Mobile App Launch",
      "Cloud Migration Project",
    ],
    achievements: [
      "Delivered 95% of projects on time and within budget",
      "Managed projects worth over $10M in total value",
      "Improved team productivity by 40%",
      "PMP Certified Professional",
    ],
  },
  "ui-ux-designer": {
    name: "David Kim",
    role: "UI/UX Designer",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "David is a creative UI/UX designer focused on creating exceptional user experiences. With an eye for detail and a deep understanding of user psychology, he creates designs that are both beautiful and functional.",
    location: "Los Angeles, CA",
    joinDate: "September 2019",
    email: "david.kim@techcompany.com",
    skills: [
      "Figma",
      "Adobe Creative Suite",
      "Prototyping",
      "User Research",
      "Design Systems",
      "Sketch",
      "InVision",
      "Principle",
      "Zeplin",
      "Miro",
    ],
    experience: [
      {
        title: "Senior UI/UX Designer",
        company: "TechCompany",
        period: "2021 - Present",
        description: "Leading design initiatives and establishing design systems across multiple products.",
      },
      {
        title: "Product Designer",
        company: "DesignStudio",
        period: "2019 - 2021",
        description: "Designed user interfaces for web and mobile applications across various industries.",
      },
      {
        title: "Visual Designer",
        company: "CreativeAgency",
        period: "2017 - 2019",
        description: "Created visual designs for digital marketing campaigns and brand identities.",
      },
    ],
    projects: [
      "Complete redesign of company's main product",
      "Design system for 10+ applications",
      "Mobile app with 4.8-star rating",
      "Accessibility-focused web platform",
    ],
    achievements: [
      "Increased user engagement by 85%",
      "Won 3 design awards for mobile app design",
      "Reduced user onboarding time by 50%",
      "Google UX Design Certificate",
    ],
  },
  "devops-engineer": {
    name: "Alex Thompson",
    role: "DevOps Engineer",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Alex is an infrastructure specialist with expertise in cloud technologies and automation. He ensures reliable, scalable, and secure deployments while optimizing development workflows and system performance.",
    location: "Seattle, WA",
    joinDate: "November 2019",
    email: "alex.thompson@techcompany.com",
    skills: [
      "AWS",
      "Kubernetes",
      "CI/CD",
      "Terraform",
      "Monitoring",
      "Docker",
      "Jenkins",
      "Ansible",
      "Prometheus",
      "Grafana",
    ],
    experience: [
      {
        title: "Senior DevOps Engineer",
        company: "TechCompany",
        period: "2021 - Present",
        description: "Architecting cloud infrastructure and implementing automated deployment pipelines.",
      },
      {
        title: "Cloud Engineer",
        company: "CloudServices",
        period: "2019 - 2021",
        description: "Managed cloud infrastructure and implemented monitoring solutions for enterprise clients.",
      },
      {
        title: "System Administrator",
        company: "TechStartup",
        period: "2017 - 2019",
        description: "Maintained servers and implemented backup and security protocols.",
      },
    ],
    projects: [
      "Multi-region AWS infrastructure setup",
      "Kubernetes cluster management for 50+ services",
      "CI/CD pipeline reducing deployment time by 80%",
      "Monitoring system with 99.9% uptime",
    ],
    achievements: [
      "Reduced infrastructure costs by 45%",
      "Achieved 99.9% system uptime",
      "Automated 90% of deployment processes",
      "AWS Certified DevOps Engineer",
    ],
  },
}

export default function TeamMemberPage({ params }) {
  const member = teamMembers[params.id]

  if (!member) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/#team" className="inline-flex items-center text-white hover:text-gray-200 mb-6">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Team
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={400}
                height={400}
                className="w-64 h-64 rounded-full mx-auto object-cover border-4 border-white/20"
              />
            </div>
            <div className="lg:col-span-2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{member.name}</h1>
              <p className="text-2xl text-gray-200 mb-4">{member.role}</p>
              <p className="text-lg text-gray-100 mb-6 leading-relaxed">{member.description}</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {member.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Joined {member.joinDate}
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  {member.email}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="h-5 w-5 mr-2" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Professional Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {member.experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-blue-200 pl-4">
                      <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                      <p className="text-gray-600">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card>
              <CardHeader>
                <CardTitle>Key Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {member.projects.map((project, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{project}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button className="w-full bg-transparent" variant="outline">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
                  <Button className="w-full bg-transparent" variant="outline">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button className="w-full bg-transparent" variant="outline">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {member.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Experience</span>
                    <span className="font-semibold">6+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Projects</span>
                    <span className="font-semibold">{member.projects.length}+ Major</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Skills</span>
                    <span className="font-semibold">{member.skills.length}+ Technologies</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
