"use client";

import { Card, Avatar, Col, Row, Typography } from "antd";
import Link from "next/link";

const { Title, Paragraph, Text } = Typography;

export default function TeamMembers() {
  const teamMembers = [
    {
      id: "ai-developer",
      name: "SM Asif Anam",
      role: "AI Developer",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Specializes in machine learning and deep learning solutions with 6+ years of experience.",
      skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision"],
    },
    {
      id: "software-developer",
      name: "Michael Rodriguez",
      role: "Software Developer",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Full-stack developer with expertise in modern web technologies and scalable architectures.",
      skills: ["React", "Node.js", "JavaScript", "AWS", "Docker"],
    },
    {
      id: "project-manager",
      name: "Emily Johnson",
      role: "Project Manager",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Experienced project manager ensuring smooth delivery and client satisfaction.",
      skills: [
        "Agile",
        "Scrum",
        "Risk Management",
        "Client Relations",
        "Team Leadership",
      ],
    },
    {
      id: "ui-ux-designer",
      name: "David Kim",
      role: "UI/UX Designer",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Creative designer focused on user-centered design and exceptional user experiences.",
      skills: [
        "Figma",
        "Adobe Creative Suite",
        "Prototyping",
        "User Research",
        "Design Systems",
      ],
    },
    {
      id: "devops-engineer",
      name: "Alex Thompson",
      role: "DevOps Engineer",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Infrastructure specialist ensuring reliable, scalable, and secure deployments.",
      skills: ["AWS", "Kubernetes", "CI/CD", "Terraform", "Monitoring"],
    },
    {
      id: "sm-asif-anam",
      name: "SM Asif Anam",
      role: "AI Safety Researcher, Multi-paper Author",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "AI researcher with a focus on safety systems and BIM integration.",
      skills: ["AI", "BIM", "Python", "TensorFlow", "Research"],
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Title level={2} className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </Title>
          <Paragraph className="intro-paragraph max-w-3xl mx-auto">
            Our diverse team of experts brings together years of experience in
            software development, AI, design, and project management.
          </Paragraph>
        </div>

        <Row gutter={[32, 32]}>
          {teamMembers.map((member) => (
            <Col xs={24} sm={12} lg={6} key={member.id}>
              <Link href={`/team/${member.id}`}>
                <Card
                  hoverable
                  className="text-center h-full"
                  cover={
                    <div className="p-6">
                      <Avatar
                        size={120}
                        src={member.image}
                        className="mx-auto"
                      />
                    </div>
                  }
                >
                  <Title
                    level={4}
                    className="text-lg font-semibold text-gray-900 mb-2"
                  >
                    {member.name}
                  </Title>
                  <Text className="text-blue-600 font-medium">
                    {member.role}
                  </Text>
                  <Paragraph className="text-gray-600 mt-3">
                    {member.description}
                  </Paragraph>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
