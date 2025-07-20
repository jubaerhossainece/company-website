"use client"

import { Row, Col, Typography } from "antd"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const { Title, Paragraph, Text } = Typography


export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Title level={2} className="text-4xl font-bold text-gray-900 mb-4">
            About TechCorp
          </Title>
          <Paragraph className="about-us-paragraph max-w-3xl mx-auto">
            We are a forward-thinking software company dedicated to delivering
            innovative AI and software solutions that empower businesses to
            thrive in the digital age.
          </Paragraph>
        </div>

        <Row gutter={[32, 32]} className="items-center">
          <Col xs={24} lg={12}>
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="About us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </Col>
          <Col xs={24} lg={12}>
            <Title
              level={3}
              className="text-2xl font-semibold text-gray-900 mb-4"
            >
              Our Mission
            </Title>
            <Paragraph className="text-gray-600 mb-6">
              To bridge the gap between complex technology and practical
              business solutions through innovative AI and software development
              services.
            </Paragraph>

            <Title
              level={3}
              className="text-2xl font-semibold text-gray-900 mb-4"
            >
              Why Choose Us?
            </Title>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center">
                <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                Expert team with years of experience
              </li>
              <li className="flex items-center">
                <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                Cutting-edge technology solutions
              </li>
              <li className="flex items-center">
                <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                24/7 support and maintenance
              </li>
              <li className="flex items-center">
                <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                Scalable and secure solutions
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </section>
  );
}
