import React from 'react';

export default function Skills() {
  const skillList = [
    {
      title: 'FrontEnd',
      skills: ['HTML', 'CSS', 'Javascript', 'Typescript', 'React']
    },
    {
      title: null,
      skills: [
        'Redux',
        'Redux-Saga',
        'SCSS',
        'Styled Components',
        'Tailwind CSS'
      ]
    },
    {
      title: 'BackEnd',
      skills: ['Express', 'MySQL', 'Sequelize']
    },
    {
      title: 'Version Control',
      skills: ['Git', 'Github', 'Bitbucket']
    },
    {
      title: 'Deployment',
      skills: ['AWS S3', 'AWS CloudFront', 'Firebase']
    },
    {
      title: 'Communication',
      skills: ['Jira', 'Confluence', 'Slack']
    }
  ];
  return (
    <div className="pt-5 border-t border-slate-300">
      <div className="mb-4 text-[20px] font-bold over480px:text-[32px]">
        ⚔️ 기술 스택
      </div>
      <div className="grid grid-cols-1 over480px:grid-cols-2 over800px:grid-cols-3 over1200px:flex over1200px:justify-between">
        {skillList.map((value, idx) => (
          <div key={idx}>
            {value.title ? (
              <h3 className="my-2 font-bold text-orange-900 text-[18px]">
                {value.title}
              </h3>
            ) : (
              <div className="over480px:mb-10" />
            )}

            <ul>
              {value.skills.map(skill => (
                <li key={skill} className="font-medium">
                  <span className="text-[24px]">•</span> {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
