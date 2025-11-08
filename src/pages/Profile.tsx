import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { EditProfileModal } from "@/components/EditProfileModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Link as LinkIcon, Calendar, Award, Star, Trophy, Zap } from "lucide-react";
import { toast } from "sonner";
import myAvatar from "@/assets/prachilinkedin.jpeg";

import {
  Link2,
  Mail,
  Phone,
  Github,
  Linkedin,
  Briefcase,
  GraduationCap,
  Code2,
  Sparkles,
  FileText,
  Users,
  BookOpen,
  Palette
} from "lucide-react";

const Profile = () => {
  const [profileData] = useState({
    name: "Prachi Shende",
    title: "AI/ML Developer | Flutter & Web Developer | Mentor",
    bio: "Passionate Computer Engineering student at VJTI with a strong interest in Artificial Intelligence, Machine Learning, and full-stack app development. I love building real-world solutions through code, mentoring others, and exploring creative ideas that blend technology and design.",
    location: "Mumbai, India",
    website: "linkedin.com/in/prachi-shende-8911b6298",
    email: "prachipshende97@gmail.com",
    phone: "+91 9321030326",
    github: "github.com/Prachi-Shende",
    avatar: myAvatar,
    skills: [
      "Python", "C++", "Flutter", "Android Studio",
      "React", "Node.js", "MySQL", "Firebase",
      "TensorFlow", "OpenCV", "Git", "UI/UX"
    ]
  });

  const handleDownloadResume = () => {
    const resume = `
${profileData.name}
${profileData.title}
${profileData.location} | ${profileData.email} | ${profileData.phone}

ABOUT
${profileData.bio}

EDUCATION
${education.map(edu => `
${edu.degree}
${edu.institution}, ${edu.location}
CGPA: ${edu.cgpa} | ${edu.year}
`).join("\n")}

EXPERIENCE
${experiences.map(exp => `
${exp.role} - ${exp.organization}
${exp.duration}
${exp.achievements.map(a => `• ${a}`).join("\n")}
`).join("\n")}

SKILLS
${profileData.skills.join(", ")}

HACKATHON ACHIEVEMENTS
${hackathons.map(h => `• ${h.name} - ${h.achievement}`).join("\n")}

PROJECTS
${pinnedProjects.map(p => `
${p.title} (${p.category})
${p.description}
Tech: ${p.tech.join(", ")}
`).join("\n")}

${allProjects.map(p => `• ${p.title} (${p.category})`).join("\n")}

CERTIFICATIONS
${certifications.map(c => `• ${c.name} - ${c.issuer}`).join("\n")}

ACHIEVEMENTS
${creativeAchievements.map(a => `• ${a}`).join("\n")}
    `.trim();

    const blob = new Blob([resume], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${profileData.name.replace(/\s+/g, '_')}_Resume.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900">
      {/* Navbar */}
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="backdrop-blur-md bg-white/70 dark:bg-gray-800/70 rounded-3xl p-8 mb-8 shadow-xl border border-white/20">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Avatar */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur-xl opacity-50" />
              <img
                src={profileData.avatar}
                alt="Profile"
                className="relative h-32 w-32 rounded-full object-cover ring-4 ring-white dark:ring-gray-800"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-1">{profileData.name}</h1>
                  <p className="text-lg text-gray-600 dark:text-gray-400">{profileData.title}</p>
                </div>
                <Button
                  className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90"
                  onClick={handleDownloadResume}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl">
                {profileData.bio}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-6">
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">1245</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Followers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">320</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Following</div>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">58</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {profileData.skills.map((skill) => (
                  <Badge
                    key={skill}
                    className="rounded-xl px-3 py-1 text-sm font-medium text-white 
  bg-gradient-to-r from-purple-600/60 to-pink-600/60 
  backdrop-blur-lg border-0 opacity-80 hover:opacity-95 
  hover:scale-105 transition-transform cursor-pointer shadow-sm"
                  >
                    {skill}
                  </Badge>

                ))}
              </div>

              {/* Contact & Meta Info */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {profileData.location}
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  {profileData.email}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  {profileData.phone}
                </span>
                <span className="flex items-center gap-1">
                  <Linkedin className="h-4 w-4" />
                  <a href={`https://${profileData.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                </span>
                <span className="flex items-center gap-1">
                  <Github className="h-4 w-4" />
                  <a href={`https://${profileData.github}`} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" />
            Education
          </h2>
          <div className="grid gap-4">
            {education.map((edu, idx) => (
              <a
                key={idx}
                href={edu.link}
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-md bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6 hover:scale-[1.02] transition-transform cursor-pointer shadow-lg border border-white/20 block"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                  </div>
                  <Badge className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">{edu.year}</Badge>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    CGPA: {edu.cgpa}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{edu.location}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Briefcase className="h-6 w-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent" />
            Experience & Leadership
          </h2>
          <div className="grid gap-4">
            {experiences.map((exp, idx) => (
              <a
                key={idx}
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-md bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6 hover:scale-[1.02] transition-transform cursor-pointer shadow-lg border border-white/20 block"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{exp.organization}</p>
                  </div>
                  <Badge className="rounded-xl backdrop-blur-md bg-white/50 dark:bg-gray-700/50">{exp.duration}</Badge>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex gap-2">
                      <span className="text-purple-500">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </div>

        {/* Earned Badges */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Award className="h-6 w-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent" />
            Earned Badges
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {badges.map((badge, idx) => (
              <div
                key={idx}
                className="backdrop-blur-md bg-white/70 dark:bg-gray-800/70 rounded-2xl px-4 py-3 flex items-center gap-3 hover:scale-[1.02] transition-transform cursor-pointer shadow-lg border border-white/20"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${badge.color}`}>
                  <badge.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">{badge.name}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{badge.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hackathon Achievements */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Trophy className="h-6 w-6 text-yellow-500" />
            Hackathon Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {hackathons.map((hack, idx) => (
              <a
                key={idx}
                href={hack.link}
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-md bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6 hover:scale-[1.02] transition-transform cursor-pointer shadow-lg border border-white/20 block"
              >
                <h3 className="text-lg font-bold mb-2">{hack.name}</h3>
                <Badge className="rounded-xl mb-3 bg-yellow-500 text-white border-0">{hack.achievement}</Badge>
                <p className="text-sm text-gray-600 dark:text-gray-400">{hack.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Pinned Projects */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Sparkles className="h-6 w-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" />
            Pinned Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {pinnedProjects.map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-md bg-white/70 dark:bg-gray-800/70 rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer shadow-lg border border-white/20 block"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <Badge className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="outline" className="rounded-lg text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code2 className="h-6 w-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent" />
            All Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {allProjects.map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-md bg-white/70 dark:bg-gray-800/70 rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer shadow-lg border border-white/20 block"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-semibold">{project.title}</h3>
                    <Badge variant="outline" className="rounded-lg text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-blue-500" />
            Certifications
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="backdrop-blur-md bg-white/70 dark:bg-gray-800/70 rounded-2xl p-4 hover:scale-[1.02] transition-transform cursor-pointer shadow-lg border border-white/20">
                <h3 className="font-semibold mb-1">{cert.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Creative Achievements */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Palette className="h-6 w-6 text-pink-500" />
            Creative & Academic Achievements
          </h2>
          <div className="backdrop-blur-md bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6 shadow-lg border border-white/20">
            <ul className="grid md:grid-cols-2 gap-3">
              {creativeAchievements.map((achievement, idx) => (
                <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex gap-2">
                  <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="backdrop-blur-md bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6 text-center shadow-lg border border-white/20">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Let's build something amazing together!
          </p>
          <div className="flex justify-center gap-4">
            <Button
              className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90"
              onClick={() => window.open('mailto:prachipshende97@gmail.com', '_blank')}
            >
              <Mail className="h-4 w-4 mr-2" />
              Email Me
            </Button>
            <Button
              variant="outline"
              className="rounded-xl"
              onClick={() => window.open('https://linkedin.com/in/prachi-shende-8911b6298', '_blank')}
            >
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              className="rounded-xl"
              onClick={() => window.open('https://github.com/Prachi-Shende', '_blank')}
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

const education = [
  {
    degree: "BS in Data Science",
    institution: "Indian Institute of Technology, Madras",
    location: "Chennai, India",
    cgpa: "9.1",
    year: "2028 (Exp.)",
    link: "https://study.iitm.ac.in/ds/"
  },
  {
    degree: "B.Tech in Computer Engineering",
    institution: "Veermata Jijabai Technological Institute (VJTI)",
    location: "Mumbai, India",
    cgpa: "9.26",
    year: "2027 (Exp.)",
    link: "http://vjti.ac.in/"
  },
  {
    degree: "HSC (Science)",
    institution: "BK Birla College",
    location: "Kalyan",
    cgpa: "98.69 percentile",
    year: "2023",
    link: "https://www.google.com/search?q=birla+college+of+arts+science+and+commerce&tbm=isch"
  }
];

const experiences = [
  {
    role: "AI Intern",
    organization: "Infosys Springboard",
    duration: "Aug 2025 – Present",
    achievements: [
      "Developed an AI model for dog breed classification using MobileNetV2, achieving efficient inference performance",
      "Integrated Firebase Authentication and Firestore for secure user management and data storage",
      "Used Cloudinary to handle user-uploaded image storage and optimized retrieval workflows"
    ],
    link: "https://www.linkedin.com/company/infosys-springboard/posts/"
  },
  {
    role: "Mentor (App Development & AI/ML)",
    organization: "COC, VJTI",
    duration: "Oct 2025 – Present",
    achievements: [
      "Mentoring two teams (4 students each) on Flutter app development and AI/ML integration for project-based learning",
      "Guiding students on architecture design, Firebase integration, and real-world deployment practices"
    ],
    link: "https://www.linkedin.com/company/community-of-coders-vjti/posts/"
  },
  {
    role: "App Developer",
    organization: "VJTI Central",
    duration: "Sep 2025 – Present",
    achievements: [
      "Contributing to the official 'VJTI Central' student app by developing new pages and implementing core functionalities",
      "Collaborating with the dev team to enhance UI/UX and optimize app performance"
    ],
    link: "http://vjti.ac.in/"
  },
  {
    role: "Execution Sector Executive",
    organization: "Pratibimb VJTI",
    duration: "Sep 2024 – Present",
    achievements: [
      "Managed end-to-end event logistics, stage operations, and crowd coordination for major college festivals",
      "Ensured seamless execution and safety compliance across multiple large-scale events"
    ],
    link: "https://www.linkedin.com/company/pratibimbvjti/posts/"
  }
];

const badges = [
  {
    name: "Hackathon Finalist",
    icon: Trophy,
    color: "bg-gradient-to-br from-purple-600 to-pink-600",
    description: "Finalist at Morgan Stanley Code to Give Hackathon 2025"
  },
  {
    name: "AI Innovator",
    icon: Zap,
    color: "bg-gradient-to-br from-blue-600 to-cyan-600",
    description: "Developed multiple AI/ML-based solutions and tools"
  },
  {
    name: "Mentor",
    icon: Award,
    color: "bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600",
    description: "Guided juniors in GitHub workflows and web development"
  },
  {
    name: "Academic Topper",
    icon: Star,
    color: "bg-gradient-to-br from-yellow-400 to-orange-500",
    description: "Consistent academic excellence with CGPA above 9.0"
  }
];

const hackathons = [
  {
    name: "Morgan Stanley Code to Give Hackathon",
    achievement: "Finalist",
    description: "Contributed to an AI evaluation tool 'Code Mitra' by implementing handwriting recognition and video data extraction for student performance analysis with Pi Jam Foundation",
    link: "https://github.com/MSP20086/Team16-PiJam"
  },
  {
    name: "HackHazards Hackathon - MathsSolver",
    achievement: "Participant",
    description: "Developed the interactive frontend and created math-based mini-games for the platform's educational module",
    link: "https://github.com/dikshat25/MathSolver-HackHazards"
  }
];

const pinnedProjects = [
  {
    title: "Face Recognition Attendance System",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=600&h=300&fit=crop",
    category: "AI & Computer Vision",
    description: "Webcam-based real-time attendance system using OpenCV, Firebase, and Cloudinary for image management and student record automation.",
    tech: ["Python", "OpenCV", "Firebase", "Cloudinary"],
    link: "https://github.com/Prachi-Shende/Face-Recognition-Attendance-System"
  },
  {
    title: "Meal-Match (Recipe Recommender)",
    image: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=600&h=300&fit=crop",
    category: "App Development",
    description: "Flutter-based recipe recommender app using Firebase and APIs for personalized meal suggestions and planning.",
    tech: ["Flutter", "Firebase", "REST API"],
    link: "https://github.com/dikshat25/THE-HEIRS-INHERITANCE"
  }
];

const allProjects = [
  {
    title: "BooKaro: Second-Hand Book Marketplace",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=400&h=300&fit=crop",
    category: "Web Development",
    description: "Full-stack platform for buying/selling used books with dynamic UI, chat support, and smooth navigation flow.",
    link: "https://github.com/Prachi-Shende/BooKaro"
  },
  {
    title: "AI Evaluation Tool – Code Mitra",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop",
    category: "AI/ML",
    description: "Contributed to handwriting recognition and video data extraction for student submission evaluation.",
    link: "https://github.com/MSP20086/Team16-PiJam"
  },
  {
    title: "Gesture-Controlled Robot Car",
    image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=400&h=300&fit=crop",
    category: "Robotics",
    description: "Built a gesture and Bluetooth-controlled robot using Arduino and ultrasonic sensors for obstacle avoidance.",
    link: "https://github.com/Prachi-Shende"
  },
  {
    title: "Obstacle Avoidance Robot",
    image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=400&h=300&fit=crop",
    category: "Robotics",
    description: "Team project using ultrasonic sensors for autonomous navigation and obstacle detection.",
    link: "https://github.com/Prachi-Shende"
  }
];

const certifications = [
  {
    name: "UI Design Essentials",
    issuer: "Professional Certification"
  },
  {
    name: "Artificial Intelligence",
    issuer: "Infosys Springboard"
  },
  {
    name: "Deep Learning",
    issuer: "Infosys Springboard"
  }
];

const creativeAchievements = [
  "SSC School Topper and Subject Topper in five subjects",
  "Multiple interschool and intracollege awards in Rangoli competitions",
  "Won awards in Art and Poster Making competitions",
  "Consistent academic excellence throughout educational journey"
];

export default Profile;