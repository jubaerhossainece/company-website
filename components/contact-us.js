"use client"

import { Button, Card, Row, Col, Typography } from "antd"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

const { Title, Paragraph, Text } = Typography

export default function ContactUs() {
  return (
    <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Title level={2} className="text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </Title>
            <Paragraph className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your next project? Get in touch with us today.
            </Paragraph>
          </div>

          <Row gutter={[48, 48]}>
            <Col xs={24} lg={12}>
              <div className="space-y-8">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <Title level={4} className="text-lg font-semibold text-gray-900 mb-2">
                      Email
                    </Title>
                    <Text className="text-gray-600">contact@techcorp.com</Text>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <Title level={4} className="text-lg font-semibold text-gray-900 mb-2">
                      Phone
                    </Title>
                    <Text className="text-gray-600">+1 (555) 123-4567</Text>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <Title level={4} className="text-lg font-semibold text-gray-900 mb-2">
                      Address
                    </Title>
                    <Text className="text-gray-600">
                      123 Tech Street
                      <br />
                      Silicon Valley, CA 94000
                    </Text>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={24} lg={12}>
              <Card className="shadow-lg">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button type="primary" size="large" className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </form>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
  )
}
