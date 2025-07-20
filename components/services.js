"use client"

import { Button, Card, Row, Col, Typography } from "antd"
import { ArrowRight, Code, Brain } from "lucide-react"
import Link from "next/link"
const { Title, Paragraph, Text } = Typography;

export default function Services() {
  const aiServices = [
    {
      title: "Custom AI Development",
      description:
        "We build tailor-made AI models and algorithms that perfectly align with your unique business needs. From machine learning to deep learning, we deliver scalable and robust AI systems that solve complex problems.",
    },
    {
      title: "Natural Language Processing (NLP)",
      description:
        "Leverage NLP to enhance your customer experience with chatbots, sentiment analysis, language translation, and automated content generation — making your interactions smarter and more efficient.",
    },
    {
      title: "Computer Vision Solutions",
      description:
        "Utilize image and video recognition technologies to automate quality control, surveillance, medical imaging, and more. Our computer vision applications help you extract valuable insights from visual data.",
    },
    {
      title: "Predictive Analytics & Data Modeling",
      description:
        "Make data-driven decisions with advanced predictive analytics. We develop models that forecast trends, customer behaviors, and operational risks to give you a competitive edge.",
    },
    {
      title: "AI Integration & Consulting",
      description:
        "Already have AI tools but need expert guidance? Our consultants work closely with your team to optimize, integrate, and scale AI solutions seamlessly into your existing infrastructure.",
    },
  ];

  const softwareServices = [
    {
      title: "Custom Software Development",
      description:
        "We design and build tailor-made software solutions to meet your specific business requirements. From enterprise applications to workflow automation, we deliver scalable, secure, and high-performance software tailored to your needs.",
    },
    {
      title: "Web & Mobile App Development",
      description:
        "Create seamless digital experiences with responsive web applications and cross-platform mobile apps. Our solutions ensure smooth performance, intuitive UI/UX, and robust backend integration.",
    },
    {
      title: "Cloud-Based Solutions & DevOps",
      description:
        "Leverage cloud computing for scalability, security, and cost-efficiency. We offer cloud migration, SaaS development, and DevOps services to optimize deployment, monitoring, and CI/CD pipelines.",
    },
    {
      title: "Enterprise Software Solutions",
      description:
        "Streamline business operations with ERP, CRM, and inventory management systems. Our custom enterprise software enhances productivity, data management, and decision-making.",
    },
    {
      title: "API Development & Integration",
      description:
        "Connect disparate systems with powerful APIs and seamless third-party integrations. We ensure smooth data flow between platforms for improved efficiency.",
    },
    {
      title: "UI/UX Design & Prototyping",
      description:
        "Enhance user engagement with intuitive and visually appealing interfaces. Our design team crafts wireframes, prototypes, and interactive designs for optimal user experience.",
    },
    {
      title: "Maintenance & Support",
      description:
        "Ensure long-term reliability with continuous software updates, bug fixes, and technical support. We provide ongoing maintenance to keep your systems running smoothly.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Title level={2} className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </Title>
          <Paragraph className="max-w-3xl mx-auto">
            We offer comprehensive AI and software development services to help
            your business stay ahead of the competition.
          </Paragraph>
        </div>

        {/* AI Services */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Brain className="h-8 w-8 text-purple-600 mr-3" />
            <Title level={3} className="text-3xl font-semibold text-gray-900">
              AI Services
            </Title>
          </div>
          <Row gutter={[24, 24]}>
            {aiServices.slice(0, 3).map((service, index) => (
              <Col xs={24} md={8} key={index}>
                <Card
                  hoverable
                  className="h-full border-l-4 border-l-purple-600"
                  bodyStyle={{ padding: "24px" }}
                >
                  <Title
                    level={4}
                    className="text-lg font-semibold text-gray-900 mb-3"
                  >
                    {service.title}
                  </Title>
                  <Paragraph>
                    {service.description}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Software Services */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <Code className="h-8 w-8 text-blue-600 mr-3" />
            <Title level={3} className="text-3xl font-semibold text-gray-900">
              Software Development Services
            </Title>
          </div>
          <Row gutter={[24, 24]}>
            {softwareServices.slice(0, 3).map((service, index) => (
              <Col xs={24} md={8} key={index}>
                <Card
                  hoverable
                  className="h-full border-l-4 border-l-blue-600"
                  bodyStyle={{ padding: "24px" }}
                >
                  <Title
                    level={4}
                    className="text-lg font-semibold text-gray-900 mb-3"
                  >
                    {service.title}
                  </Title>
                  <Paragraph>
                    {service.description}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button
              type="primary"
              size="large"
              className="bg-blue-600 hover:bg-blue-700"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
