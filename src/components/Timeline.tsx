import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2025 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Modus Chora Studio</h3>
            <h4 className="vertical-timeline-element-subtitle">Nafasi Connections || Westlands || Nairobi</h4>
            <p>
              Developed and maintained web applications, collaborated on UI/UX design, and implemented backend functionalities to enhance user experience and application performance.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2025 - Sept 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Zynamis Company LTD</h3>
            <h4 className="vertical-timeline-element-subtitle">Nairobi, Kenya</h4>
            <p>
              Leading full-stack web development projects, integrating Generative AI and LLM solutions, and contributing to project management and business development initiatives.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2025 - May 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Science, AI and ML Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Ministry of Trade, Kiep || Skies</h4>
            <p>
              Applied machine learning models and data science techniques to support research and policy analysis, while gaining practical experience in AI solutions for trade and development.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2023 - Sept 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Nyeri, The Jitu Company</h4>
            <p>
              Built and maintained full-stack applications, contributed to process automation, and conducted data governance and statistical analysis to improve business workflows.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>

      </div>
    </div>
  );
}

export default Timeline;