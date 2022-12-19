// Content
export const uiParams = {
    header: 'UI',
    message: 'I am experienced in writing UI applications in JavaScript, ' +
    'TypeScript, JQuery, React, Angular, Vue, and Python Jinja2 templating. ' + 
    'I frequently use component libraries in React and Angular such as Material UI and Next.js.',
}
  
export const apiParams = {
    header: 'API',
    message: 'I am experienced in writing API applications in GoLang, Java Spring Framework, ' +
    'Java DBMS, Python Django Server, Python Flask Server, and Express.js. My APIs have interfaced ' +
    'with both my own databases as well as third party APIs and datasources.'
}
  
export const dbParams = {
    header: 'Database',
    message: 'I am experienced in writing databases in MongoDB, MySQL, SQL Lite, and SQL Plus. ' +
    'I have also built PostgreSQL databases hosted on Amazon AWS.'
}

export const aboutMeParams = {
    header: 'About me',
    message: 'I am a software developer and engineer from Kalamazoo, Michigan. ' +
    'I spent two years at Kalamazoo Valley Community College pursuing an Associates in Applied Mathematics, before ' +
    'transferring to the University of Michigan in Ann Arbor to complete a Bachelors in Computer Science. I am ' +
    'currently a Full Stack Software Engineer and Application Technical Lead for PNC Financial Services.',
    position: 'right',
    photo: 'professionalpic.jpg'
}

// Posts
export const aboutMePost = {
    title: 'About Me',
    type: 'pic-desc',
    content: [aboutMeParams]
}

export const programmingLanguagesPost = {
    title: 'Programming Languages',
    type: 'tri-desc',
    content: [uiParams, apiParams, dbParams]
}