import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Monitor,
  Award,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


const Index = () => {

   const handleClick = () => {
    toast.success("Message sent successfully");
  };

  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "education", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const technicalSkills = {
    "Programming Languages": ["Python", "C", "HTML", "CSS"],
    Database: ["DBMS"],
    "Microsoft Office": ["Word", "Excel", "PowerPoint"],
    "Operating Systems": ["Windows XP/8/10"],
  };

  const softSkills = [
    "Communication",
    "Problem Solving",
    "Time Management",
    "Teamwork",
    "Active Listening",
    "Adaptability",
    "Creativity",
    "Decision Making",
    "Soft Skills",
    "Leadership",
    "Planning",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sravani
            </h1>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Education", "Projects", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`transition-colors duration-200 ${
                      activeSection === item.toLowerCase()
                        ? "text-purple-400"
                        : "text-gray-300 hover:text-purple-400"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-white ">
              <img
                src="/sp.jpg"
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              K Sravani
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Machine Learning & Deep Learning Graduate Student
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Seeking opportunities to utilize my technical and functional skills
            with innovative thinking, capability and contribution to
            organizational growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("projects")}
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
            >
              View Projects
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm currently pursuing my Master's degree in Machine Learning
                and Deep Learning at Malla Reddy University. With a strong
                foundation in Computer Science and Engineering from Vijaya
                Institute of Technology, I'm passionate about leveraging AI
                technologies to solve real-world problems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My academic journey has equipped me with comprehensive knowledge
                in programming, database management, and various technical
                tools. I'm particularly interested in applying machine learning
                algorithms to create innovative solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-purple-500/20 p-6 text-center">
                <CardContent className="p-0">
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <p className="text-gray-300 text-sm">
                    sravani.k5000@gmail.com
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-purple-500/20 p-6 text-center">
                <CardContent className="p-0">
                  <Phone className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <p className="text-gray-300 text-sm">+91-7802755333</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-purple-500/20 p-6 text-center col-span-2">
                <CardContent className="p-0">
                  <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <p className="text-gray-300 text-sm">Hyderabad, India</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <Code className="w-6 h-6 text-purple-400 mr-3" />
                Technical Skills
              </h3>
              <div className="space-y-6">
                {Object.entries(technicalSkills).map(([category, skills]) => (
                  <div key={category}>
                    <h4 className="text-lg font-medium text-purple-300 mb-3">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-500/30"

                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <Briefcase className="w-6 h-6 text-purple-400 mr-3" />
                Key Skills
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {softSkills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-slate-700/50 rounded-lg p-3 text-center border border-purple-500/20 hover:border-purple-400/40 transition-colors"
                  >
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <Award className="w-6 h-6 text-purple-400 mr-3" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4 border border-purple-500/30">
                    <p className="text-white font-medium">
                      Code Rider in Python
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4 border border-purple-500/30">
                    <p className="text-white font-medium">Process Mining</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education Background
          </h2>

          <div className="space-y-8">
            {/* Master's Degree */}
            <Card className="bg-gradient-to-r from-slate-800/50 to-purple-800/30 border-purple-500/30 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 rounded-full p-3">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Pursuing Master's Degree
                    </h3>
                    <p className="text-purple-300 font-medium mb-2">
                      Malla Reddy University
                    </p>
                    <p className="text-white mb-3">
                      Masters in Machine Learning and Deep Learning (AI)
                    </p>
                    <Badge className="bg-purple-700 text-purple-300">
                      Current
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bachelor's Degree */}
            <Card className="bg-gradient-to-r from-slate-800/50 to-purple-800/30 border-purple-500/30 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-500 rounded-full p-3">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Bachelor's Degree
                    </h3>
                    <p className="text-pink-300 font-medium mb-2">
                      Vijaya Institute Of Technology (JNTU Kakinada)
                    </p>
                    <p className="text-white mb-3">
                      Bachelor of Engineering in Computer Science and
                      Engineering
                    </p>
                    <div className="flex items-center space-x-4">
                      <Badge className="bg-pink-700 text-pink-300">
                        2018-2022
                      </Badge>
                      <Badge className="bg-green-700 text-green-300">
                        CGPA: 7.0
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Intermediate */}
            <Card className="bg-gradient-to-r from-slate-800/50 to-purple-800/30 border-purple-500/30 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 rounded-full p-3">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Intermediate
                    </h3>
                    <p className="text-blue-300 font-medium mb-2">
                      Bhashyam Junior College (BIEAP)
                    </p>
                    <p className="text-white mb-3">
                      Intermediate in Maths, Physics, and Chemistry (MPC)
                    </p>
                    <div className="flex items-center space-x-4">
                      <Badge className="bg-blue-700 text-blue-300">
                        2016-2018
                      </Badge>
                      <Badge className="bg-green-700 text-green-300">
                        CGPA: 8.03
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-800/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Project
          </h2>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-slate-800/80 to-purple-800/40 border-purple-500/30 overflow-hidden hover:border-purple-400/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-4">
                    <Monitor className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Flight Delay Analysis
                    </h3>
                    <p className="text-purple-300 font-medium mb-4">
                      Bachelor Final Year Project
                    </p>
                    <p className="text-white leading-relaxed mb-6">
                      Developed a comprehensive machine learning solution for
                      predicting flight delays. The project investigates flight
                      delay patterns using advanced ML algorithms, analyzing
                      schedule, arrival, departure and actual time data. The
                      system provides accurate predictions based on various
                      metrics to help improve flight operations and passenger
                      experience.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-purple-700 text-purple-300">
                        Machine Learning
                      </Badge>
                      <Badge className="bg-blue-700 text-blue-300">
                        Data Analysis
                      </Badge>
                      <Badge className="bg-green-700 text-green-300">
                        Python
                      </Badge>
                      <Badge className="bg-orange-700 text-orange-300">
                        Predictive Modeling
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities,
                innovative projects, and potential collaborations in the field
                of machine learning and artificial intelligence.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/20 rounded-full p-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400">sravani.k5000@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/20 rounded-full p-3">
                    <Phone className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-400">+91-7802755333</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/20 rounded-full p-3">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-400">Hyderabad, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-white mb-6">
                Send a Message
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>
                <Button onClick={handleClick} className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                  
                  Send Message
                  
                </Button>
                <ToastContainer  />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 border-t border-purple-500/20 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Sravani. Built with passion for innovation and technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
