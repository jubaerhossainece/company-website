"use client";

import { siteConfig } from "@/config/site";
import {
  Button,
  Card,
  Row,
  Col,
  Typography,
  Tag,
  Avatar,
  Progress,
} from "antd";
import {
  ArrowLeft,
  Mail,
  Award,
  Calendar,
  MapPin,
  Code,
  ExternalLink,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const { Title, Paragraph, Text } = Typography;

export default function AnamPortfolioPage() {
  const member = {
    name: "SM Asif Anam",
    role: "Full Stack Developer & AI Researcher",
    image: "/images/team-members/anam.jpg?height=400&width=400",
    bio: "SM Asif Anam is a versatile full-stack developer and AI researcher with expertise in building scalable web applications, mobile solutions, and cutting-edge AI-integrated systems. He specializes in BIM-based safety systems, travel technology platforms, and eCommerce solutions.",
    location: "Dhaka, Bangladesh",
    experience: "5+ years",
    email: "anam@techcorp.com",
    skills: [
      { name: "AI Research", level: 92 },
      { name: "Full Stack Development", level: 90 },
      { name: "BIM Integration", level: 88 },
      { name: "Mobile Development", level: 85 },
      { name: "Laravel/PHP", level: 90 },
      { name: "React/JavaScript", level: 88 },
      { name: "Flutter", level: 82 },
      { name: "WordPress", level: 85 },
      { name: "AI/ML", level: 87 },
      { name: "Research & Publication", level: 90 },
    ],
    achievements: [
      "Published research in Jordan Journal of Civil Engineering (2021)",
      "Developed AI-integrated BIM fire safety system",
      "Built complete travel booking platform serving thousands of users",
      "Expert in AI safety systems for smart cities",
      "Specialized in real-time IoT and sensor integration",
    ],
    projects: [
      {
        title: "Unified AI + BIM Safety Ecosystem",
        description:
          "Conceptual smart city safety framework combining AI and BIM for real-time monitoring of fire, structural safety, and site behavior.",
        image: "/images/anam/smart-city-ai.png",
        technologies: [
          "BIM",
          "AI/ML",
          "IoT",
          "Firebase",
          "TensorFlow",
          "OpenCV",
        ],
        features: [
          "AI predictive analytics",
          "BIM digital twin integration",
          "IoT sensor networks",
          "Unified monitoring dashboard",
          "Real-time anomaly detection",
          "Smart city applications",
        ],
        impact:
          "Framework for smart apartment complexes, industrial plants, and educational institutions",
      },
      {
        title: "AI-Integrated BIM Fire Alert System",
        description:
          "Research project developing automated, real-time fire alert system using Building Information Modeling (BIM) integrated with AI capabilities.",
        url: "https://www.researchgate.net/profile/Mizanoor-Rahman-3/publication/352933727_Development_of_Building_Information_Modeling_BIM-based_Real-time_Fire_Alert_System_to_Reduce_Fire_Impact_in_Bangladesh/links/60e01d7f299bf1ea9edb342b/Development-of-Building-Information-Modeling-BIM-based-Real-time-Fire-Alert-System-to-Reduce-Fire-Impact-in-Bangladesh.pdf",
        image: "/images/anam/bim-fire-system.png",
        technologies: [
          "BIM",
          "AI/ML",
          "IoT Sensors",
          "Android",
          "TensorFlow",
          "Autodesk Revit",
        ],
        features: [
          "Real-time fire detection using IoT sensors",
          "AI-enhanced analytics for early identification",
          "3D visual mapping on BIM model",
          "Automatic alert transmission",
          "Mobile app interface",
          "Cloud-based alert routing",
        ],
        impact:
          "Published in Jordan Journal of Civil Engineering, provides scalable solution for urban fire safety",
      },
      {
        title: "Tryotel - Travel Booking Platform",
        description:
          "Complete travel booking solution offering domestic and international flight tickets, curated tour packages, and mobile-first experience for users across Bangladesh.",
        url: "https://tryotel.com/",
        image: "/images/anam/travel-booking-platform.png",
        technologies: [
          "Laravel",
          "React",
          "Flutter",
          "MySQL",
          "AWS",
          "Payment Gateway",
        ],
        features: [
          "Flight Booking (Domestic & International)",
          "Curated Tour Package Listings",
          "Real-time Flight Schedule Integration",
          "Reward Points System",
          "Mobile Apps (Android & iOS)",
          "Admin Dashboard",
          "Multi-channel Support",
        ],
        impact:
          "Trusted by thousands of users, simplified travel for Bangladeshi customers through digital transformation",
      },
      {
        title: "Pride Limited - Women's eCommerce Platform",
        description:
          "Fully functional eCommerce website tailored for selling women's products across Bangladesh with secure shopping and local payment integration.",
        url: "https://www.pride-limited.com",
        image: "/images/anam/pride-ecommerce.png",
        technologies: [
          "WordPress",
          "WooCommerce",
          "PHP",
          "MySQL",
          "Payment Gateway",
        ],
        features: [
          "Product Catalog with Filters",
          "Cart & Checkout System",
          "Payment Gateway Integration",
          "Admin Panel for Inventory",
          "Mobile-Responsive Design",
          "SEO-Optimized Pages",
        ],
        impact:
          "Successfully launched eCommerce platform serving women's fashion market in Bangladesh",
      },
    ],
    publications: [
      {
        title:
          "Development of Building Information Modeling (BIM)-based Real-time Fire Alert System to Reduce Fire Impact in Bangladesh",
        journal: "Jordan Journal of Civil Engineering",
        year: "2021",
        volume: "15, Issue 3",
        authors: "Md Abu Safayet, Mizanoor Rahman, SM Asif Anam",
        url: "https://www.researchgate.net/profile/Mizanoor-Rahman-3/publication/352933727",
      },
    ],
  };

  const [expandedFeatures, setExpandedFeatures] = useState({});

  const toggleFeatures = (projectIndex) => {
    setExpandedFeatures((prev) => ({
      ...prev,
      [projectIndex]: !prev[projectIndex],
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Code className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                {siteConfig.company.name}
              </span>
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
              <Title
                level={3}
                className="text-blue-200 text-2xl font-medium mb-4"
              >
                {member.role}
              </Title>
              <Paragraph className="text-blue-100 text-lg mb-6">
                {member.bio}
              </Paragraph>
              <div className="flex flex-wrap gap-4 text-blue-100">
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
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title
            level={2}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Skills & Expertise
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

      {/* Featured Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title
            level={2}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Featured Projects
          </Title>
          <div className="space-y-12">
            {member.projects.map((project, index) => (
              <Card
                key={index}
                className="shadow-lg border-l-4 border-l-blue-600 overflow-hidden"
              >
                <Row gutter={[32, 32]} align="middle">
                  <Col xs={24} lg={10}>
                    <div className="relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-lg shadow-md"
                        onError={(e) => {
                          e.target.src =
                            "/placeholder.svg?height=256&width=400&text=" +
                            encodeURIComponent(project.title);
                        }}
                      />
                      <div className="absolute top-4 right-4">
                        {project.url && (
                          <Button
                            type="primary"
                            icon={<ExternalLink className="h-4 w-4" />}
                            href={project.url}
                            target="_blank"
                            className="bg-blue-600 hover:bg-blue-700"
                          >
                            View Live
                          </Button>
                        )}
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} lg={14}>
                    <div className="h-full flex flex-col">
                      <Title
                        level={3}
                        className="text-xl font-semibold text-gray-900 mb-3"
                      >
                        {project.title}
                      </Title>
                      <Paragraph className="text-gray-600 mb-4 text-base flex-grow">
                        {project.description}
                      </Paragraph>

                      <div className="mb-4">
                        <Text strong className="text-gray-900">
                          Technologies:
                        </Text>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Tag key={techIndex} color="blue">
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
                          {(expandedFeatures[index] ? project.features : project.features.slice(0, 4)).map(
                            (feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-start">
                                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
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
                            className="text-purple-600 p-0 h-auto mt-2"
                          >
                            {expandedFeatures[index]
                              ? `Show Less`
                              : `+${project.features.length - 4} more features`}
                          </Button>
                        )}
                      </div>

                      {project.impact && (
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <Text strong className="text-blue-800">
                            Impact:{" "}
                          </Text>
                          <Text className="text-blue-700">
                            {project.impact}
                          </Text>
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

      {/* Publications Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title
            level={2}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Research Publications
          </Title>
          <Row gutter={[24, 24]}>
            {member.publications.map((publication, index) => (
              <Col xs={24} key={index}>
                <Card className="border-l-4 border-l-green-600">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start">
                      <FileText className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <Title
                          level={4}
                          className="text-lg font-semibold text-gray-900 mb-2"
                        >
                          {publication.title}
                        </Title>
                        <div className="space-y-1 text-gray-600">
                          <div>
                            <Text strong>Journal:</Text> {publication.journal}
                          </div>
                          <div>
                            <Text strong>Year:</Text> {publication.year}
                          </div>
                          <div>
                            <Text strong>Volume:</Text> {publication.volume}
                          </div>
                          <div>
                            <Text strong>Authors:</Text> {publication.authors}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      type="link"
                      icon={<ExternalLink className="h-4 w-4" />}
                      href={publication.url}
                      target="_blank"
                      className="text-green-600"
                    >
                      View Paper
                    </Button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title
            level={2}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Achievements & Recognition
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

      {/* Contact Section */}
    </div>
  );
}
