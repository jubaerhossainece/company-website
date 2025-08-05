import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
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

export default function ServicesPage() {
  const softwareServices = [
    {
      icon: <Code className="h-12 w-12" />,
      title: "Custom Software Development",
      description:
        "We design and build tailor-made software solutions to meet your specific business requirements. From enterprise applications to workflow automation, we deliver scalable, secure, and high-performance software tailored to your needs.",
      features: [
        "Enterprise Applications",
        "Workflow Automation",
        "Scalable Architecture",
        "Security Implementation",
        "Performance Optimization",
      ],
      price: "Starting from $8,000",
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Web & Mobile App Development",
      description:
        "Create seamless digital experiences with responsive web applications and cross-platform mobile apps. Our solutions ensure smooth performance, intuitive UI/UX, and robust backend integration.",
      features: [
        "Responsive Design",
        "Cross-platform Apps",
        "UI/UX Design",
        "Backend Integration",
        "Performance Testing",
      ],
      price: "Starting from $5,000",
    },
    {
      icon: <Cloud className="h-12 w-12" />,
      title: "Cloud-Based Solutions & DevOps",
      description:
        "Leverage cloud computing for scalability, security, and cost-efficiency. We offer cloud migration, SaaS development, and DevOps services to optimize deployment, monitoring, and CI/CD pipelines.",
      features: ["Cloud Migration", "SaaS Development", "CI/CD Pipelines", "Monitoring Setup", "Cost Optimization"],
      price: "Starting from $6,000",
    },
    {
      icon: <Database className="h-12 w-12" />,
      title: "Enterprise Software Solutions",
      description:
        "Streamline business operations with ERP, CRM, and inventory management systems. Our custom enterprise software enhances productivity, data management, and decision-making.",
      features: ["ERP Systems", "CRM Solutions", "Inventory Management", "Data Analytics", "Process Automation"],
      price: "Starting from $12,000",
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "API Development & Integration",
      description:
        "Connect disparate systems with powerful APIs and seamless third-party integrations. We ensure smooth data flow between platforms for improved efficiency.",
      features: [
        "RESTful APIs",
        "GraphQL",
        "Third-party Integration",
        "Data Synchronization",
        "Security Implementation",
      ],
      price: "Starting from $3,000",
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "UI/UX Design & Prototyping",
      description:
        "Enhance user engagement with intuitive and visually appealing interfaces. Our design team crafts wireframes, prototypes, and interactive designs for optimal user experience.",
      features: ["Wireframing", "Prototyping", "User Research", "Design Systems", "Usability Testing"],
      price: "Starting from $2,500",
    },
    {
      icon: <Cog className="h-12 w-12" />,
      title: "Maintenance & Support",
      description:
        "Ensure long-term reliability with continuous software updates, bug fixes, and technical support. We provide ongoing maintenance to keep your systems running smoothly.",
      features: ["24/7 Support", "Bug Fixes", "Security Updates", "Performance Monitoring", "Feature Updates"],
      price: "Starting from $1,500/month",
    },
  ]

  const aiServices = [
    {
      icon: <Brain className="h-12 w-12" />,
      title: "Custom AI Development",
      description:
        "We build tailor-made AI models and algorithms that perfectly align with your unique business needs. From machine learning to deep learning, we deliver scalable and robust AI systems that solve complex problems.",
      features: [
        "Machine Learning Models",
        "Deep Learning Solutions",
        "Custom Algorithms",
        "Model Training",
        "Performance Optimization",
      ],
      price: "Starting from $15,000",
    },
    {
      icon: <Bot className="h-12 w-12" />,
      title: "Natural Language Processing (NLP)",
      description:
        "Leverage NLP to enhance your customer experience with chatbots, sentiment analysis, language translation, and automated content generation — making your interactions smarter and more efficient.",
      features: [
        "Chatbot Development",
        "Sentiment Analysis",
        "Language Translation",
        "Content Generation",
        "Text Analytics",
      ],
      price: "Starting from $8,000",
    },
    {
      icon: <ChartBar className="h-12 w-12" />,
      title: "Computer Vision Solutions",
      description:
        "Utilize image and video recognition technologies to automate quality control, surveillance, medical imaging, and more. Our computer vision applications help you extract valuable insights from visual data.",
      features: ["Image Recognition", "Video Analytics", "Quality Control", "Medical Imaging", "Object Detection"],
      price: "Starting from $12,000",
    },
    {
      icon: <Database className="h-12 w-12" />,
      title: "Predictive Analytics & Data Modeling",
      description:
        "Make data-driven decisions with advanced predictive analytics. We develop models that forecast trends, customer behaviors, and operational risks to give you a competitive edge.",
      features: [
        "Trend Forecasting",
        "Customer Behavior Analysis",
        "Risk Assessment",
        "Data Visualization",
        "Real-time Analytics",
      ],
      price: "Starting from $10,000",
    },
    {
      icon: <Lightbulb className="h-12 w-12" />,
      title: "AI Integration & Consulting",
      description:
        "Already have AI tools but need expert guidance? Our consultants work closely with your team to optimize, integrate, and scale AI solutions seamlessly into your existing infrastructure.",
      features: [
        "AI Strategy Consulting",
        "System Integration",
        "Performance Optimization",
        "Team Training",
        "Scalability Planning",
      ],
      price: "Starting from $5,000",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-white hover:text-gray-200 mb-6">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            Comprehensive software development and AI solutions to transform your business and drive innovation.
          </p>
        </div>
      </div>

      {/* Software Development Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Software Development Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 h-full">
                <CardHeader>
                  <div className="text-blue-600 mb-4">{service.icon}</div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t pt-4">
                    <p className="text-lg font-semibold text-gray-900 mb-4">{service.price}</p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Quote</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">AI Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 h-full">
                <CardHeader>
                  <div className="text-purple-600 mb-4">{service.icon}</div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t pt-4">
                    <p className="text-lg font-semibold text-gray-900 mb-4">{service.price}</p>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Quote</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project requirements and create a custom solution that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                Contact Us
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
