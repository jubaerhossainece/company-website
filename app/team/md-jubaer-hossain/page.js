"use client"

import { siteConfig } from "@/config/site"
import { Button, Card, Row, Col, Typography, Tag, Avatar, Progress, Timeline } from "antd"
import {
  ArrowLeft,
  Mail,
  Linkedin,
  Award,
  Calendar,
  MapPin,
  Code,
  ExternalLink,
  Phone,
  User,
  Briefcase,
} from "lucide-react"
import Link from "next/link"

const { Title, Paragraph, Text } = Typography

export default function JubaerPortfolioPage() {
  const member = {
    name: "Md. Jubaer Hossain",
    role: "Backend-Focused Full-Stack Developer",
    image: "/images/team-members/jubaer-hossain-SE2.jpg?height=400&width=400",
    bio: "Backend-focused Software Developer with around 6 years of professional experience building scalable web applications using PHP, Laravel, and MySQL. Specialized in performance optimization, API development, and backend architecture for high-traffic systems. Proven ability to drive system efficiency improvements by up to 90%.",
    location: "Bangladesh",
    experience: "6+ years",
    email: "jubaer.kuet11@gmail.com",
    phone: "+8801754633041",
    education:
      "Bachelor of Science: Electronics And Communication Engineering (ECE) - Khulna University of Engineering And Technology",
    skills: [
      { name: "PHP", level: 95 },
      { name: "Laravel", level: 95 },
      { name: "MySQL", level: 90 },
      { name: "Performance Optimization", level: 92 },
      { name: "API Development", level: 90 },
      { name: "Redis", level: 85 },
      { name: "Docker", level: 80 },
      { name: "AWS/Azure", level: 82 },
      { name: "Shopify", level: 85 },
      { name: "React (Basic)", level: 70 },
      { name: "Vue.js (Basic)", level: 70 },
      { name: "Linux Administration", level: 88 },
    ],
    workHistory: [
      {
        title: "Software Engineer II",
        company: "Current Company",
        period: "Sep 2024 - Present (11 months)",
        location: "On-site",
        achievements: [
          "Developed backends for 4 Shopify apps, integrating scalable APIs and payment gateways",
          "Engineered a blockchain-based website for an Australian client, ensuring secure transactions and real-time updates",
          "Leading migration of legacy Akij Air system (OTA platform) from PHP to Laravel, improving code maintainability by 40%",
        ],
        technologies: ["Shopify", "Laravel", "Linux", "PHP", "MySQL", "AWS", "Azure", "AWS S3", "Redis", "gRPC"],
      },
      {
        title: "Programmer",
        company: "Fiber@Home Global Limited",
        period: "Feb 2024 - Aug 2024",
        location: "Gulshan Avenue, Gulshan - 1, Dhaka",
        achievements: [
          "Enhanced 2 HRIS modules, reducing critical page load times from 29s to <1s, boosting operational efficiency",
          "Oversaw customer support issue resolutions and spearheaded new feature rollouts for 500+ users",
        ],
        technologies: ["PHP", "Laravel", "MySQL", "Performance Optimization"],
      },
      {
        title: "Software Engineer",
        company: "MPower Social Enterprises Ltd.",
        period: "Sep 2023 - Jan 2024",
        location: "Road #11 Banani, Dhaka",
        achievements: [
          "Diagnosed and resolved software bugs in 'SHN eLearning,' 'Urban eLearning,' and 'Ninvac eLearning' applications",
          "Contributed to feature development in PHP open-source Learning Management System (LMS)",
          "Collaborated with cross-functional teams including product managers, designers, and QA engineers",
        ],
        technologies: ["PHP", "LMS", "Bug Fixing", "Feature Development"],
      },
      {
        title: "Software Engineer",
        company: "Riseup Labs",
        period: "Dec 2021 - Aug 2023",
        location: "Road#2, Sector#3, Uttara, Dhaka",
        achievements: [
          "Wrote server-side and client-side code using PHP, HTML, CSS, JavaScript with Laravel framework",
          "Collaborated with project managers on ambitious but realistic coding milestones",
          "Designed robust solutions meeting client requirements for functionality, scalability and performance",
        ],
        technologies: ["PHP", "Laravel", "JavaScript", "HTML", "CSS"],
      },
      {
        title: "Software Developer",
        company: "MIEN IT LTD",
        period: "Jun 2019 - Nov 2021",
        location: "Adabor, Dhaka",
        achievements: [
          "Developed server-side and client-side applications using Laravel framework",
          "Stayed updated with latest industry trends in web development",
          "Implemented client feature requests for content management and delivery systems",
        ],
        technologies: ["PHP", "Laravel", "JavaScript", "HTML", "CSS"],
      },
    ],
    projects: [
      {
        title: "Gameplan - Fantasy Sports Application",
        description:
          "A skill-testing platform where Bangladesh sports fans can enjoy their sports knowledge by creating virtual teams and competing for rewards based on real-life player performances.",
        image: "/images/gameplan-app.png",
        technologies: ["PHP", "Laravel", "MySQL", "API Development", "Performance Optimization"],
        features: [
          "Virtual team creation with real players",
          "Real-time scoring based on player performance",
          "Competition system with rewards",
          "External API integration for match data",
          "Event modality for special competitions",
          "Optimized database queries for performance",
        ],
        achievements: [
          "Rewrote controller methods to boost performance and reduce memory utilization",
          "Optimized API methods to speed up response times",
          "Developed new event modality with full feature integration",
        ],
      },
      {
        title: "Adolescent Nutrition Central MIS",
        description:
          "A digital platform for adolescents UNICEF with backend panel - an application for adolescents' nutrition services and interoperable online reporting platform.",
        url: "https://front.nutrition.rultest.com",
        image: "/images/nutrition-platform.png",
        technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript", "jQuery", "Ajax"],
        features: [
          "Nutrition services management",
          "Online reporting platform",
          "Backend administration panel",
          "Interoperable data systems",
          "User management system",
        ],
      },
      {
        title: "Inception Exam Application",
        description:
          "An interactive online exam management system for job seekers with daily live exams and archive modules, serving over 50,000 active users daily.",
        url: "https://www.inceptionexam.com",
        image: "/images/inception-exam.png",
        technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript", "jQuery", "Ajax"],
        features: [
          "Daily live exam system",
          "Archive exam modules",
          "Large-scale user management (50,000+ users)",
          "Interactive exam interface",
          "Performance tracking",
          "Scalable architecture",
        ],
        impact: "Serving 50,000+ active users daily with high-performance exam system",
      },
      {
        title: "NPS Calculator",
        description:
          "Net Promoter Score calculation tool to assess customer loyalty and satisfaction, classifying customers into promoters, passives, and detractors.",
        url: "https://npsdesk.com",
        image: "/images/nps-calculator.png",
        technologies: ["PHP", "Laravel", "MySQL", "Yajra Datatables", "Bootstrap", "JavaScript", "jQuery"],
        features: [
          "Customer satisfaction scoring",
          "Promoter/Passive/Detractor classification",
          "Data visualization and reporting",
          "Customer loyalty analytics",
          "Interactive dashboard",
        ],
      },
      {
        title: "CV/Resume Maker",
        description:
          "Professional CV and resume creation tool with templates and formatting options to help users create effective resumes.",
        url: "https://mycvgenerator.com",
        image: "/images/cv-maker.png",
        technologies: ["PHP", "Laravel", "MySQL", "Yajra Datatables", "Bootstrap", "JavaScript", "jQuery"],
        features: [
          "Professional CV templates",
          "Dynamic resume builder",
          "PDF generation",
          "Template customization",
          "User profile management",
        ],
      },
      {
        title: "ASDO Portal CMS",
        description:
          "Content management system developed for a social organization using Laravel and jQuery for efficient content management.",
        url: "https://www.asdo-bd.org",
        image: "/images/asdo-portal.png",
        technologies: ["PHP", "Laravel", "Bootstrap", "JavaScript", "jQuery", "Ajax", "MySQL"],
        features: [
          "Content management system",
          "Social organization portal",
          "Admin panel for content control",
          "Responsive design",
          "User-friendly interface",
        ],
      },
    ],
    achievements: [
      "6+ years of professional backend development experience",
      "Improved system performance by up to 90% through optimization",
      "Successfully migrated legacy systems improving maintainability by 40%",
      "Reduced page load times from 29s to <1s in HRIS modules",
      "Built scalable systems serving 50,000+ daily active users",
      "Expert in PHP, Laravel, and MySQL with proven track record",
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Code className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">{siteConfig.company.name}</span>
            </Link>
            <Link href="/">
              <Button type="text" icon={<ArrowLeft className="h-4 w-4" />}>
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Profile Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} md={8} className="text-center">
              <Avatar size={200} src={member.image} className="mb-4" />
            </Col>
            <Col xs={24} md={16}>
              <Title level={1} className="text-white text-4xl font-bold mb-2">
                {member.name}
              </Title>
              <Title level={3} className="text-blue-200 text-2xl font-medium mb-4">
                {member.role}
              </Title>
              <Paragraph className="text-blue-100 text-lg mb-6">{member.bio}</Paragraph>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-100">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {member.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {member.experience}
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  {member.email}
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  {member.phone}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title level={2} className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Technical Skills & Expertise
          </Title>
          <Row gutter={[24, 24]}>
            {member.skills.map((skill, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <Card className="h-full">
                  <div className="flex justify-between items-center mb-2">
                    <Text strong>{skill.name}</Text>
                    <Text className="text-gray-500">{skill.level}%</Text>
                  </div>
                  <Progress percent={skill.level} strokeColor="#3B82F6" />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Work History Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title level={2} className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Professional Experience
          </Title>
          <Timeline mode="left" className="mt-8">
            {member.workHistory.map((job, index) => (
              <Timeline.Item key={index} dot={<Briefcase className="h-4 w-4 text-blue-600" />} color="blue">
                <Card className="ml-4 border-l-4 border-l-blue-600">
                  <div className="mb-4">
                    <Title level={4} className="text-lg font-semibold text-gray-900 mb-1">
                      {job.title}
                    </Title>
                    <Text className="text-blue-600 font-medium text-base">{job.company}</Text>
                    <div className="flex flex-wrap gap-4 mt-2 text-gray-600">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {job.period}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <Text strong className="text-gray-900 block mb-2">
                      Key Achievements:
                    </Text>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <Text className="text-gray-600">{achievement}</Text>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <Text strong className="text-gray-900">
                      Technologies:
                    </Text>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {job.technologies.map((tech, techIndex) => (
                        <Tag key={techIndex} color="blue">
                          {tech}
                        </Tag>
                      ))}
                    </div>
                  </div>
                </Card>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title level={2} className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Projects
          </Title>
          <div className="space-y-8">
            {member.projects.map((project, index) => (
              <Card key={index} className="shadow-lg border-l-4 border-l-green-600 overflow-hidden">
                <Row gutter={[32, 32]} align="middle">
                  <Col xs={24} lg={10}>
                    <div className="relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-lg shadow-md"
                        onError={(e) => {
                          e.target.src =
                            "/placeholder.svg?height=256&width=400&text=" + encodeURIComponent(project.title)
                        }}
                      />
                      <div className="absolute top-4 right-4">
                        {project.url && (
                          <Button
                            type="primary"
                            icon={<ExternalLink className="h-4 w-4" />}
                            href={project.url}
                            target="_blank"
                            className="bg-green-600 hover:bg-green-700"
                          >
                            View Live
                          </Button>
                        )}
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} lg={14}>
                    <div className="h-full flex flex-col">
                      <Title level={3} className="text-xl font-semibold text-gray-900 mb-3">
                        {project.title}
                      </Title>
                      <Paragraph className="text-gray-600 mb-4 text-base flex-grow">{project.description}</Paragraph>

                      <div className="mb-4">
                        <Text strong className="text-gray-900">
                          Technologies:
                        </Text>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Tag key={techIndex} color="green">
                              {tech}
                            </Tag>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <Text strong className="text-gray-900 block mb-2">
                          Key Features:
                        </Text>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {project.features.slice(0, 4).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              <Text className="text-gray-600 text-sm">{feature}</Text>
                            </div>
                          ))}
                        </div>
                        {project.features.length > 4 && (
                          <Text className="text-green-600 text-sm mt-2">
                            +{project.features.length - 4} more features
                          </Text>
                        )}
                      </div>

                      {project.achievements && (
                        <div className="mb-4">
                          <Text strong className="text-gray-900 block mb-2">
                            Achievements:
                          </Text>
                          <ul className="space-y-1">
                            {project.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                <Text className="text-gray-600 text-sm">{achievement}</Text>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {project.impact && (
                        <div className="bg-green-50 p-4 rounded-lg">
                          <Text strong className="text-green-800">
                            Impact:{" "}
                          </Text>
                          <Text className="text-green-700">{project.impact}</Text>
                        </div>
                      )}
                    </div>
                  </Col>
                </Row>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Achievements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Row gutter={[48, 48]}>
            <Col xs={24} lg={12}>
              <Title level={2} className="text-3xl font-bold text-gray-900 mb-8">
                Education
              </Title>
              <Card className="border-l-4 border-l-purple-600">
                <div className="flex items-start">
                  <User className="h-6 w-6 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <Title level={4} className="text-lg font-semibold text-gray-900 mb-2">
                      Bachelor of Science
                    </Title>
                    <Text className="text-purple-600 font-medium">Electronics And Communication Engineering (ECE)</Text>
                    <div className="mt-2 text-gray-600">
                      <div>Khulna University of Engineering And Technology</div>
                      <div>2012 - 2016 | Khulna, Bangladesh</div>
                    </div>
                    <div className="mt-3">
                      <Text strong className="text-gray-900">
                        Key Courses:
                      </Text>
                      <Text className="text-gray-600 block mt-1">
                        Computer Programming, OOP, Data Structures, Web Development (HTML, CSS, JavaScript, PHP),
                        Database Programming, Computer Networks
                      </Text>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>

            <Col xs={24} lg={12}>
              <Title level={2} className="text-3xl font-bold text-gray-900 mb-8">
                Key Achievements
              </Title>
              <div className="space-y-4">
                {member.achievements.map((achievement, index) => (
                  <Card key={index} className="border-l-4 border-l-yellow-500">
                    <div className="flex items-start">
                      <Award className="h-6 w-6 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                      <Text className="text-gray-700">{achievement}</Text>
                    </div>
                  </Card>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Title level={2} className="text-white text-3xl font-bold mb-4">
            Get in Touch with Jubaer
          </Title>
          <Paragraph className="text-blue-100 text-lg mb-8">
            Looking for a backend specialist for your next project? Let&apos;s discuss how I can help build scalable
            solutions!
          </Paragraph>
          <div className="flex justify-center gap-4">
            <Button
              type="primary"
              size="large"
              icon={<Mail className="h-4 w-4" />}
              className="bg-white text-blue-600 border-white hover:bg-gray-100"
              href={`mailto:${member.email}`}
            >
              Send Email
            </Button>
            <Button
              size="large"
              icon={<Phone className="h-4 w-4" />}
              className="text-white border-white hover:bg-white hover:text-blue-600"
              href={`tel:${member.phone}`}
            >
              Call Now
            </Button>
            <Button
              size="large"
              icon={<Linkedin className="h-4 w-4" />}
              className="text-white border-white hover:bg-white hover:text-blue-600"
            >
              LinkedIn
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
