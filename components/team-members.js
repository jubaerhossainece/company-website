"use client";

import { Card, Avatar, Col, Row, Typography } from "antd";
import Link from "next/link";

const { Title, Paragraph, Text } = Typography;

export default function TeamMembers() {
  const teamMembers = [
    {
      id: "sm-asif-anam",
      name: "SM Asif Anam",
      role: "AI Safety Researcher, Multi-paper Author",
      image: "/images/team-members/anam.jpg?height=300&width=300",
      description:
        "AI Engineer with 6+ years of experience delivering end-to-end machine learning and deep learning solutions. Expertise in natural language processing, computer vision, and deploying scalable AI models into production environments.",
      skills: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "NLP",
        "Computer Vision",
        "Deep Learning",
        "Model Deployment",
        "Scikit-learn",
        "MLOps",
        "Data Engineering",
      ],
    },
    {
      id: "md-jubaer-hossain",
      name: "Md. Jubaer Hossain",
      role: "Software Developer",
      image: "/images/team-members/jubaer-hossain-SE2.jpg?height=300&width=300",
      description:
        "Full-stack developer with 6+ years of experience, expertise in modern web technologies and scalable architectures.",
      skills: ["PHP", "Laravel", "JavaScript", "AWS", "Docker", "Mysql"],
    },
    {
      id: "abu-sufian-manager",
      name: "Abu Sufian",
      role: "Project Manager",
      image: "/images/team-members/sufian.jpeg?height=300&width=300",
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
      name: "Mohin Rahman",
      role: "UI/UX Designer",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Creative designer focused on user-centered design and exceptional user experiences.",
      skills: [
        "Ui-Ux design",
        "Motion Graphic Design",
        "Video editing",
        "Branding",
      ],
    },

    {
      id: "tasfia-rahman",
      name: "Tasfia Rahman",
      role: "UI/UX Designer",
      image: "/images/team-members/tasfia.png?height=300&width=300",
      description:
        "Creative UI/UX designer with experience in crafting user-centric mobile and web interfaces. Skilled in turning ideas into visually appealing and functional designs that enhance user experience.",
      skills: [
        "Figma",
        "Wireframing",
        "Prototyping",
        "User Research",
        "UI Design",
        "UX Design",
        "Design Thinking",
        "Responsive Design",
      ],
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
