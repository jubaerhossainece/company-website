"use client";

import { Button, Card, Col, Row, Typography } from "antd";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const { Title, Paragraph, Text } = Typography;

export default function AnamDetailPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/#team">
          <Button
            type="text"
            icon={<ArrowLeft className="h-4 w-4" />}
            className="mb-8"
          >
            Back to Team
          </Button>
        </Link>
        <div className="text-center mb-12">
          <Title level={2} className="text-4xl font-bold text-gray-900 mb-2">
            SM Asif Anam
          </Title>
          <Text className="text-xl text-blue-600 font-medium">
            AI Safety Researcher, Multi-paper Author
          </Text>
        </div>

        <div className="space-y-12">
          <Card>
            <Title level={3} className="text-2xl font-semibold mb-4">
              Project: Tryotel – Travel Booking & Tour Management Platform
            </Title>
            <Paragraph>
              A complete travel booking solution offering domestic and
              international flight tickets, curated tour packages, and a
              mobile-first experience for users across Bangladesh. Integrated
              with real-time data, secure payment, and a rewards system.
            </Paragraph>
            <a href="https://tryotel.com/" target="_blank" rel="noopener noreferrer">
              <Button type="primary">View Project</Button>
            </a>
          </Card>

          <Card>
            <Title level={3} className="text-2xl font-semibold mb-4">
              Project: AI-Integrated BIM-Based Real-Time Fire Alert System
            </Title>
            <Paragraph>
              This research aimed to develop an automated, real-time fire alert
              system using Building Information Modeling (BIM) integrated with
              AI capabilities. The goal was to create a solution suitable for
              the urban infrastructure challenges of Bangladesh.
            </Paragraph>
            <a href="https://www.researchgate.net/profile/Mizanoor-Rahman-3/publication/352933727_Development_of_Building_Information_Modeling_BIM-based_Real-time_Fire_Alert_System_to_Reduce_Fire_Impact_in_Bangladesh/links/60e01d7d299bf1ea9edb342b/Development-of-Building-Information-Modeling-BIM-based-Real-time-Fire-Alert-System-to-Reduce-Fire-Impact-in-Bangladesh.pdf" target="_blank" rel="noopener noreferrer">
              <Button type="primary">View Publication</Button>
            </a>
          </Card>

          <Card>
            <Title level={3} className="text-2xl font-semibold mb-4">
              Project: Unified AI + BIM Safety Ecosystem for Smart Cities
            </Title>
            <Paragraph>
              Combining the strengths of both published works, we’re building a
              smart city safety framework—where AI and BIM work together in a
              unified, real-time platform to monitor fire, structural safety,
              and site behavior.
            </Paragraph>
          </Card>

          <Card>
            <Title level={3} className="text-2xl font-semibold mb-4">
              Project: Women’s Product eCommerce Website
            </Title>
            <Paragraph>
              Development of a fully functional eCommerce website tailored for
              selling women’s products across Bangladesh. The platform offers a
              user-friendly interface for browsing, ordering, and managing
              fashion and lifestyle items targeted at women.
            </Paragraph>
            <a href="http://www.pride-limited.com" target="_blank" rel="noopener noreferrer">
              <Button type="primary">View Project</Button>
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
}
