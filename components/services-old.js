import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Brain,
  Code,
  Database,
  Globe,
  Bot,
  BarChartIcon as ChartBar,
  Shield,
  Cloud,
  Cog,
  Users,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"

export default function Services() {
  const softwareServices = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Software Development",
      description:
        "We design and build tailor-made software solutions to meet your specific business requirements. From enterprise applications to workflow automation, we deliver scalable, secure, and high-performance software tailored to your needs.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web & Mobile App Development",
      description:
        "Create seamless digital experiences with responsive web applications and cross-platform mobile apps. Our solutions ensure smooth performance, intuitive UI/UX, and robust backend integration.",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud-Based Solutions & DevOps",
      description:
        "Leverage cloud computing for scalability, security, and cost-efficiency. We offer cloud migration, SaaS development, and DevOps services to optimize deployment, monitoring, and CI/CD pipelines.",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Enterprise Software Solutions",
      description:
        "Streamline business operations with ERP, CRM, and inventory management systems. Our custom enterprise software enhances productivity, data management, and decision-making.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "API Development & Integration",
      description:
        "Connect disparate systems with powerful APIs and seamless third-party integrations. We ensure smooth data flow between platforms for improved efficiency.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "UI/UX Design & Prototyping",
      description:
        "Enhance user engagement with intuitive and visually appealing interfaces. Our design team crafts wireframes, prototypes, and interactive designs for optimal user experience.",
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Maintenance & Support",
      description:
        "Ensure long-term reliability with continuous software updates, bug fixes, and technical support. We provide ongoing maintenance to keep your systems running smoothly.",
    },
  ]

  const aiServices = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Custom AI Development",
      description:
        "We build tailor-made AI models and algorithms that perfectly align with your unique business needs. From machine learning to deep learning, we deliver scalable and robust AI systems that solve complex problems.",
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Natural Language Processing (NLP)",
      description:
        "Leverage NLP to enhance your customer experience with chatbots, sentiment analysis, language translation, and automated content generation — making your interactions smarter and more efficient.",
    },
    {
      icon: <ChartBar className="h-8 w-8" />,
      title: "Computer Vision Solutions",
      description:
        "Utilize image and video recognition technologies to automate quality control, surveillance, medical imaging, and more. Our computer vision applications help you extract valuable insights from visual data.",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Predictive Analytics & Data Modeling",
      description:
        "Make data-driven decisions with advanced predictive analytics. We develop models that forecast trends, customer behaviors, and operational risks to give you a competitive edge.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "AI Integration & Consulting",
      description:
        "Already have AI tools but need expert guidance? Our consultants work closely with your team to optimize, integrate, and scale AI solutions seamlessly into your existing infrastructure.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive software development and AI solutions to help your business thrive in the digital
            age.
          </p>
        </div>

        {/* Software Development Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Software Development Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader>
                  <div className="text-blue-600 mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* AI Services */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader>
                  <div className="text-purple-600 mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
            >
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
