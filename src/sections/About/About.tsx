import { JSX } from 'react';
import './About.css'
import MultiShadeText from '../../components/MultiShadeText/MultiShadeText';
import { stats } from '../../dummyData/dummyData';

const About = (): JSX.Element => {
  return (
    <section id="about" className="about-section-modern">
      <div className='container'>
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            <MultiShadeText text="About Me" className="fw-bold" />
          </h2>
          <p className="section-subtitle">
            Passionate software engineer crafting digital solutions with modern technologies
          </p>
        </div>

        <div className="about-content-grid">
          {/* Main Content */}
          <div className="about-main-content" data-aos="fade-right">
            <div className="about-story">
              <h3 className="content-title">My Journey</h3>
              <div className="story-text">
                <p>
                  My journey in technology began with a fascination for creating digital solutions. Starting with C and C++ fundamentals, I quickly discovered my passion for full-stack development during my Bachelor's in Computer Applications.
                </p>
                <p>
                  I've worked on diverse projects ranging from Bank Management Systems using C# to modern Property Management platforms with React, TypeScript, .NET, and PostgreSQL. Each project taught me the importance of both frontend user experience and robust backend architecture.
                </p>
                <p>
                  Currently pursuing my Master's in Computer Applications with specialization in Full Stack Development at Chandigarh University, I'm deepening my expertise in modern web technologies, microservices, and cloud architecture while working as a Software Engineer.
                </p>
                <p>
                  My approach combines technical excellence with user-centric design, ensuring every application I build is not just functional, but delightful to use. I believe in continuous learning and staying ahead of technology trends.
                </p>
              </div>
            </div>

            <div className="about-strengths">
              <h3 className="content-title">Core Strengths</h3>
              <div className="strengths-grid">
                <div className="strength-item">
                  <div className="strength-icon">🧠</div>
                  <div className="strength-content">
                    <h4>Problem Solving</h4>
                    <p>Strong analytical thinking with logical approach to complex challenges</p>
                  </div>
                </div>
                <div className="strength-item">
                  <div className="strength-icon">⚡</div>
                  <div className="strength-content">
                    <h4>Quick Adaptability</h4>
                    <p>Fast learner with ability to master new technologies and frameworks</p>
                  </div>
                </div>
                <div className="strength-item">
                  <div className="strength-icon">🤝</div>
                  <div className="strength-content">
                    <h4>Team Collaboration</h4>
                    <p>Excellent communication and teamwork skills for project success</p>
                  </div>
                </div>
                <div className="strength-item">
                  <div className="strength-icon">🎯</div>
                  <div className="strength-content">
                    <h4>Attention to Detail</h4>
                    <p>Meticulous approach to coding, debugging, and UI/UX implementation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="about-stats-section" data-aos="fade-left">
            <div className="about-stats-container">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="stat-card-modern"
                  data-aos="fade-up"
                  data-aos-delay={100 + (index * 50)}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-content">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Personal Quote */}
            <div className="personal-quote" data-aos="fade-up" data-aos-delay="600">
              <div className="quote-content">
                <div className="quote-mark">"</div>
                <p className="quote-text">
                  Code is like humor. When you have to explain it, it's bad.
                </p>
                <div className="quote-author">- Cory House</div>
              </div>
            </div>

            {/* Skills Preview */}
            <div className="skills-preview" data-aos="fade-up" data-aos-delay="700">
              <h4 className="skills-title">Full Stack Technologies</h4>
              <div className="skills-tags">
                {['React.js', 'Node.js', 'TypeScript', 'MongoDB', 'Express.js', 'Next.js'].map((skill, index) => (
                  <span 
                    key={index}
                    className="skill-tag"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;