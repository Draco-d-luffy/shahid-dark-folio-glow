
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a passionate full-stack developer with expertise in modern web technologies. 
            I love creating efficient, scalable applications that solve real-world problems.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            With a strong foundation in both frontend and backend development, I specialize in 
            React ecosystems, Python APIs, cloud infrastructure, and microservices architecture.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-purple-400 mb-2">3+</h3>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-400 mb-2">50+</h3>
              <p className="text-gray-400">Projects Completed</p>
            </div>
          </div>
        </div>

        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6">What I Do</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-3"></div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Frontend Development</h4>
                  <p className="text-gray-400">Building responsive, interactive UIs with React and modern CSS</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3"></div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Backend Development</h4>
                  <p className="text-gray-400">Creating robust APIs with Express.js and FastAPI</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-3"></div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Cloud & DevOps</h4>
                  <p className="text-gray-400">Deploying scalable applications on AWS with Docker</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
