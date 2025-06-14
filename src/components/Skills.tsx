
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Shadcn/ui", level: 85 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Express.js", level: 90 },
        { name: "FastAPI", level: 85 },
        { name: "Python", level: 88 },
        { name: "RabbitMQ", level: 80 },
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 80 },
        { name: "CI/CD", level: 75 },
        { name: "Microservices", level: 82 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Skills & Expertise
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <Card key={index} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tech Stack Icons */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-white mb-8">Technologies I Work With</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="text-4xl">⚛️</div>
          <div className="text-4xl">🟢</div>
          <div className="text-4xl">🐍</div>
          <div className="text-4xl">☁️</div>
          <div className="text-4xl">🐳</div>
          <div className="text-4xl">🔧</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
