"use client"

import { Button, Card, Row, Col, Typography, Tag, Avatar, Progress, Timeline } from "antd"
import {
  ArrowLeft,
  Award,
  Calendar,
  MapPin,
  Code,
  ExternalLink,
  TestTube,
  Shield,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { siteConfig } from "@/config/site";

const { Title, Paragraph, Text } = Typography

export default function TamannaPortfolioPage() {
  const member = {
    name: "Tamanna Molla Tanni",
    role: "Software Quality Assurance Engineer",
    image: "/images/team-members/tanni.jpeg?height=400&width=400",
    bio: "Dedicated and detail-oriented Software Quality Assurance Engineer with experience in manual and automated testing. Strong understanding of QA methodologies and a commitment to continuous learning and improvement.",
    location: "Dhaka, Bangladesh",
    experience: "3+ years",
    email: "tamannatanni91@gmail.com",
    phone: "+8801971517091",
    alternatePhone: "+8801521569004",
    linkedin: "Tamanna-Molla-Tanni",
    github: "TamannaTanni",
    objective:
      "Dedicated and detail-oriented Software Quality Assurance Engineer with experience in manual and automated testing. Strong understanding of QA methodologies and a commitment to continuous learning and improvement.",
    skills: [
      { name: "Manual Testing", level: 95 },
      { name: "Test Automation", level: 85 },
      { name: "Playwright", level: 88 },
      { name: "Appium", level: 82 },
      { name: "JIRA", level: 90 },
      { name: "Postman", level: 85 },
      { name: "JMeter", level: 80 },
      { name: "Burp Suite", level: 75 },
      { name: "SQL", level: 78 },
      { name: "Python", level: 80 },
      { name: "Git", level: 85 },
      { name: "Agile/Scrum", level: 88 },
    ],
    workHistory: [
      {
        title: "SQA Engineer",
        company: "Adventure Dhaka Limited (Subsidiary of Adventure Inc.)",
        period: "May 2025 - June 2025",
        location: "Dhaka, Bangladesh",
        achievements: [
          "Analyzed and validated business requirements, communicated across the board",
          "Prepared comprehensive test cases and logged bugs systematically",
          "Verified bug fixes and conducted investigations with the development team",
          "Collaborated effectively with cross-functional teams",
        ],
        technologies: ["Manual Testing", "Test Case Design", "Bug Tracking", "Requirements Analysis"],
      },
      {
        title: "SQA Engineer",
        company: "mPower Social Enterprises Ltd.",
        period: "January 2023 - May 2025",
        location: "Dhaka, Bangladesh",
        achievements: [
          "Conducted manual testing for web and mobile applications, ensuring functionality met specifications and standards",
          "Utilized JIRA for comprehensive bug tracking and project management",
          "Conducted performance and load testing using JMeter for optimal application performance",
          "Performed regression testing to ensure new changes did not adversely affect existing functionality",
          "Developed and executed automated test scripts using Playwright & Appium",
          "Utilized Burp Suite for security testing to identify vulnerabilities",
          "Maintained version control knowledge for collaborative development",
        ],
        technologies: [
          "Manual Testing",
          "JIRA",
          "JMeter",
          "Playwright",
          "Appium",
          "Burp Suite",
          "Regression Testing",
          "Performance Testing",
        ],
      },
      {
        title: "Instructor",
        company: "Cybernetics Robo Academy",
        period: "March 2022 - October 2022",
        location: "Sylhet, Bangladesh",
        achievements: [
          "Taught students basic coding concepts and programming fundamentals",
          "Introduced kids to Microsoft Office Suite (Excel, PowerPoint, and Word)",
          "Developed and delivered comprehensive lesson plans",
          "Mentored young learners in technology and computer literacy",
        ],
        technologies: ["Teaching", "Microsoft Office", "Curriculum Development", "Programming Basics"],
      },
    ],
    projects: [
      {
        title: "OTA Application - Black-box Testing",
        description:
          "Comprehensive testing of Online Travel Agency application focusing on requirement analysis and quality assurance across multiple modules.",
        url: "https://skyticket.com/",
        image: "/images/tanni/skyticket.png",
        category: "Travel & Tourism",
        testingTypes: ["Black-box Testing", "Regression Testing", "Release Testing"],
        technologies: ["Manual Testing", "Test Case Design", "Requirements Analysis"],
        features: [
          "Requirement analysis and module suggestions",
          "Black box testing implementation",
          "Regression testing for multiple modules",
          "Release testing and validation",
          "Cross-browser compatibility testing",
          "User acceptance testing",
        ],
        achievements: [
          "Successfully identified critical bugs before production release",
          "Improved application stability through comprehensive testing",
          "Reduced post-release issues by 40%",
        ],
        impact: "Ensured high-quality user experience for travel booking platform serving thousands of users",
      },
      {
        title: "Health Application Testing Suite",
        description:
          "Comprehensive testing of health management applications including web dashboard and Android app with focus on usability, functionality, and performance.",
        urls: [
          "https://play.google.com/store/apps/details?id=org.smartregister.unicef.mis",
          "https://vaxepi.gov.bd/",
          "https://play.google.com/store/apps/details?id=org.vaxepi.gov.bd&hl=en",
        ],
        image: "/images/tanni/health-app.png",
        category: "Healthcare",
        testingTypes: ["Manual Testing", "Regression Testing", "Load Testing", "API Testing"],
        technologies: ["JIRA", "Postman", "JMeter", "Playwright", "Database Testing"],
        features: [
          "Thorough usability and functional testing",
          "Web dashboard and Android app testing",
          "Load testing for performance evaluation",
          "Basic automation using Playwright",
          "API testing with Postman",
          "Database testing for data integrity",
          "Cross-platform compatibility testing",
        ],
        achievements: [
          "Implemented automated testing reducing manual effort by 60%",
          "Identified critical performance bottlenecks",
          "Ensured HIPAA compliance through security testing",
        ],
        impact: "Enhanced healthcare application reliability serving government health initiatives",
      },
      {
        title: "EdTech Project - Comprehensive Testing",
        description:
          "End-to-end testing of educational technology platform covering website and mobile applications (Android and iOS) with focus on user experience and functionality.",
        urls: [
          "https://play.google.com/store/apps/details?id=com.mpower.pandoo",
          "https://play.google.com/store/apps/details?id=com.mpower.product.app.octapp",
        ],
        image: "/images/tanni/edtech-project.png",
        category: "Education Technology",
        testingTypes: ["Manual Testing", "Retesting", "Regression Testing", "Automation Testing"],
        technologies: ["JIRA", "Playwright", "Appium", "Test Planning"],
        features: [
          "Usability testing across platforms",
          "Functional and regression testing",
          "Cross-platform mobile testing (Android & iOS)",
          "Bug identification and reporting in JIRA",
          "Requirements analysis and stakeholder communication",
          "Test plans and comprehensive reports",
          "Basic automation with Playwright & Appium",
        ],
        achievements: [
          "Reduced critical bugs in production by 50%",
          "Improved user satisfaction scores through usability testing",
          "Streamlined testing process with automation",
        ],
        impact: "Ensured seamless learning experience for educational platform users",
        githubRepo: "edtech-Automation-with-Playwright",
      },
      {
        title: "Agricultural App Testing Suite",
        description:
          "Comprehensive testing of agricultural management applications focusing on usability, functionality, and automated testing implementation.",
        urls: [
          "https://play.google.com/store/apps/details?id=com.mpower.android.app.lpin.crm",
          "https://play.google.com/store/apps/details?id=com.mpower.app.mdairy",
          "https://play.google.com/store/apps/details?id=com.mpower.flutter.app.agri.shufola",
        ],
        image: "/images/tanni/agri-app.png",
        category: "Agriculture Technology",
        testingTypes: ["Manual Testing", "Retesting", "Regression Testing", "Mobile Automation"],
        technologies: ["JIRA", "Appium", "JMeter", "Test Documentation"],
        features: [
          "Comprehensive test plan formulation",
          "Usability and functionality testing",
          "Mobile app testing across devices",
          "Performance testing with JMeter",
          "Basic automation with Playwright & Appium",
          "Detailed test case documentation",
          "Bug tracking and resolution",
        ],
        achievements: [
          "Automated repetitive testing tasks saving 40% time",
          "Identified critical usability issues before launch",
          "Improved app performance through load testing",
        ],
        impact: "Enhanced agricultural productivity tools for farmers and agricultural businesses",
        githubRepo: "Shudokkho-Automation",
      },
    ],
    education: [
      {
        degree: "B.Sc in Electrical and Electronics Engineering",
        institution: "Shahjalal University of Science & Technology, Sylhet",
        department: "Department of Electrical and Electronic Engineering",
        secondMajor: "Department of Computer Science and Engineering (2nd Major)",
        period: "2017 - 2021",
        location: "Sylhet, Bangladesh",
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Shaheed Bir Uttam Lt Anwar Girls' College",
        period: "2015 - 2017",
        location: "Dhaka, Bangladesh",
      },
      {
        degree: "Secondary School Certificate (SSC)",
        institution: "Monipur High School and College",
        period: "2013 - 2015",
        location: "Dhaka, Bangladesh",
      },
    ],
    thesis: [
      {
        title: "Prediction of Missing DNA Methylation from Whole Genome Bisulfite Data using KNN",
        description: "Research project focusing on bioinformatics and machine learning applications in genomics",
        technologies: ["Machine Learning", "KNN Algorithm", "Bioinformatics", "Data Analysis"],
      },
      {
        title: "Real Time Bangla Hand Gesture Recognition using Machine Learning",
        description: "Computer vision project for recognizing Bangla hand gestures in real-time applications",
        technologies: ["Computer Vision", "Machine Learning", "Python", "OpenCV", "Real-time Processing"],
      },
    ],
    achievements: [
      "3+ years of professional SQA experience across multiple domains",
      "Expert in both manual and automated testing methodologies",
      "Champion at Nutrition Hackathon 2021 on 'Food Security and Nutrition' - BIID, 2021",
      "Organizing member of SUST EEE Festival 2018",
      "Proficient in multiple testing tools and frameworks",
      "Strong background in both EEE and CSE disciplines",
      "Published research in bioinformatics and computer vision",
    ],
  }

  const [expandedFeatures, setExpandedFeatures] = useState({})

  const toggleFeatures = (projectIndex) => {
    setExpandedFeatures((prev) => ({
      ...prev,
      [projectIndex]: !prev[projectIndex],
    }))
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
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} md={8} className="text-center">
              <Avatar size={200} src={member.image} className="mb-4" />
            </Col>
            <Col xs={24} md={16}>
              <Title level={1} className="text-white text-4xl font-bold mb-2">
                {member.name}
              </Title>
              <Title level={3} className="text-green-200 text-2xl font-medium mb-4">
                {member.role}
              </Title>
              <Paragraph className="text-green-100 text-lg mb-6">{member.bio}</Paragraph>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-green-100">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {member.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {member.experience}
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
            QA Skills & Testing Expertise
          </Title>
          <Row gutter={[24, 24]}>
            {member.skills.map((skill, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <Card className="h-full">
                  <div className="flex justify-between items-center mb-2">
                    <Text strong>{skill.name}</Text>
                    <Text className="text-gray-500">{skill.level}%</Text>
                  </div>
                  <Progress percent={skill.level} strokeColor="#059669" />
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
              <Timeline.Item key={index} dot={<TestTube className="h-4 w-4 text-green-600" />} color="green">
                <Card className="ml-4 border-l-4 border-l-green-600">
                  <div className="mb-4">
                    <Title level={4} className="text-lg font-semibold text-gray-900 mb-1">
                      {job.title}
                    </Title>
                    <Text className="text-green-600 font-medium text-base">{job.company}</Text>
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
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <Text className="text-gray-600">{achievement}</Text>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <Text strong className="text-gray-900">
                      Technologies & Tools:
                    </Text>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {job.technologies.map((tech, techIndex) => (
                        <Tag key={techIndex} color="green">
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
            Featured Testing Projects
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
                      <div className="absolute bottom-4 left-4">
                        <Tag color="green" className="text-sm">
                          {project.category}
                        </Tag>
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
                          Testing Types:
                        </Text>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.testingTypes.map((type, typeIndex) => (
                            <Tag key={typeIndex} color="blue">
                              {type}
                            </Tag>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <Text strong className="text-gray-900">
                          Technologies & Tools:
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
                          Key Features Tested:
                        </Text>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {(expandedFeatures[index] ? project.features : project.features.slice(0, 4)).map(
                            (feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-start">
                                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                <Text className="text-gray-600 text-sm">{feature}</Text>
                              </div>
                            ),
                          )}
                        </div>
                        {project.features.length > 4 && (
                          <Button
                            type="link"
                            size="small"
                            onClick={() => toggleFeatures(index)}
                            className="text-green-600 p-0 h-auto mt-2"
                          >
                            {expandedFeatures[index] ? `Show Less` : `+${project.features.length - 4} more features`}
                          </Button>
                        )}
                      </div>

                      {project.achievements && (
                        <div className="mb-4">
                          <Text strong className="text-gray-900 block mb-2">
                            Testing Achievements:
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

                      {project.githubRepo && (
                        <div className="mb-4">
                          <Text strong className="text-gray-900">
                            GitHub Repository:{" "}
                          </Text>
                          <Text className="text-green-600">{project.githubRepo}</Text>
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

      {/* Education & Research Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Row gutter={[48, 48]}>
            <Col xs={24} lg={24}>
              <Title level={2} className="text-3xl font-bold text-gray-900 mb-8">
                Research & Thesis
              </Title>
              <div className="space-y-6">
                {member.thesis.map((research, index) => (
                  <Card key={index} className="border-l-4 border-l-purple-600">
                    <div className="flex items-start">
                      <Shield className="h-6 w-6 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <Title level={4} className="text-lg font-semibold text-gray-900 mb-2">
                          {research.title}
                        </Title>
                        <Paragraph className="text-gray-600 mb-3">{research.description}</Paragraph>
                        <div className="flex flex-wrap gap-2">
                          {research.technologies.map((tech, techIndex) => (
                            <Tag key={techIndex} color="purple">
                              {tech}
                            </Tag>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title level={2} className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Professional Achievements & Recognition
          </Title>
          <Row gutter={[24, 24]}>
            {member.achievements.map((achievement, index) => (
              <Col xs={24} sm={12} key={index}>
                <Card className="h-full border-l-4 border-l-yellow-500">
                  <div className="flex items-start">
                    <Award className="h-6 w-6 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                    <Text className="text-gray-700">{achievement}</Text>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </div>
  )
}
