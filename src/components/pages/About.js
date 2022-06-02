import React from 'react';

export default function About() {
  return (
    <div style={{ display: "flex", paddingLeft: 60, paddingTop: 30, flexDirection: 'column', height: '100%' }}>
      <img src={process.env.PUBLIC_URL + '/linkedIn-profile-picture-modified.png'} style={{width: 300, height: 300, filter: 'drop-shadow(4px 4px 5px #354259)'}}/>
      <p style={{paddingTop: 50, paddingRight: 60, paddingBottom: 50, fontSize: 'x-large', textAlign: 'justify', color: '#354259'}}>
      Full-stack web developer leveraging a sociology and finance background to build purposeful web applications. I recently earned a certificate in full stack development from UC Berkeley Extension’s Coding Bootcamp with proficiency in front-end technologies such as HTML, CSS, and JavaScript, as well as the MERN back-end tech stack. I am passionate about building impactful web applications whilst focusing on mobile-first design and development. Establishing a meaningful user-impact is very important to me in every project I set out to complete. My goal is to identify current pitfalls in our society and to create web applications that tactfully address these issues. I also believe in the implementation of the agile methodology and have utilized it in a recent collaborative project. I aim to utilize my technical skills, as well as my abilities to work well in groups, conduct thorough research, and collaboratively problem-solve, while working with a quality-driven team whose mission it is to create a better UX on the web.
      </p>
    </div>
  );
}