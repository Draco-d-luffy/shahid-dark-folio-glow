
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using React, Express.js, and AWS. Architected microservices infrastructure serving 100k+ users.",
      achievements: [
        "Reduced application load time by 40%",
        "Implemented CI/CD pipeline with Docker",
        "Led team of 5 developers"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations",
      period: "2021 - 2022",
      description: "Developed RESTful APIs with FastAPI and Python. Built responsive frontends with React and TypeScript.",
      achievements: [
        "Built 15+ production applications",
        "Integrated RabbitMQ for async processing",
        "Mentored junior developers"
      ]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2020 - 2021",
      description: "Created modern, responsive web interfaces using React and Tailwind CSS. Collaborated with design teams to implement pixel-perfect UIs.",
      achievements: [
        "Improved user engagement by 60%",
        "Implemented component library",
        "Optimized for mobile performance"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          My professional journey in software development
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 transform md:-translate-x-0.5"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transform -translate-x-2 md:-translate-x-2 z-10"></div>
              
              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-purple-400 font-semibold">{exp.company}</p>
                      <p className="text-gray-400 text-sm">{exp.period}</p>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-400 text-sm">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
