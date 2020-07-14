module.exports = {
  siteTitle: 'Hi! I\'m Steve!',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Steven Kumarsingh',
  twitterUsername: 'Nevets172',
  githubUsername: 'stevenks17',
  authorAvatar: '',
  authorDescription: `Full-Stack Developer, passionate about what I do. Always interested in how the sites were made, I started to study HTML by hobby. <br />
     <br />
    I currently work as a Full-Stack developer and mainly work with <strong>Javascript, React, PostgreSQL, Ruby on Rails.</strong>`,
  skills: [
    {
      name: 'HTML',
      level: 70
    },
    {
      name: 'CSS',
      level: 60
    },
    {
      name: 'Javascript',
      level: 50
    },
    {
      name: 'Rails',
      level: 80
    },
    {
      name: 'React',
      level: 60
    },
    {
      name: 'Git',
      level: 70
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "Datum Corportation",
      begin: {
        month: 'aug',
        year: '2018'
      },
      duration: '1yr',
      occupation: "Technical Support Engineer",
      description: "I am part of the Support team, responsible for the development and maintenance of the employee management platform, giving more and more autonomy to partner companies."
  
    },  {
      company: "Forward Thinking Systems",
      begin: {
        month: 'jul',
        year: '2016'
      },
      duration: '2yrs.',
      occupation: "Technical Support Specialist Tier 2",
      description: "I integrate the Frontend team responsible for developing and maintaining the online support platform."
  
    }, {
      company: "",
      begin: {
        month: 'dec',
        year: '2016'
      },
      duration: '1 yr e 5 mos',
      occupation: "Fullstack developer",
      description: "Development and maintenance, corrective and preventive, of web applications for the real estate market."
    }, {
      company: "Anapro",
      begin: {
        month: 'set',
        year: '2012'
      },
      duration: '4 yrs e 3 mos',
      occupation: "Support Technician",
      description: "Responsible for the implementation and parameterization of the system, training and customer support. Acting also in person in real estate launches guaranteeing the success and good use of the tool."
  
    },
  ],
  portifolio: [
    {
      image: "/images/WGN.png",
      description: "Which Game Next?",
      url: "https://github.com/stevenks17/wgn-app"
    },
    {
      image: "/images/Parser Dashboard.png",
      description: "Parser Dashboard",
      url: "https://github.com/stevenks17/parser"
    },
    {
      image: "/images/Bingeworthy-Books.png",
      description: "Bingeworthy-Books",
      url: "http://bingeworthy-books.herokuapp.com/"
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: "https://twitter.com/Nevets172",
    linkedin: "https://www.linkedin.com/in/stevenks17",
    github: "https://github.com/stevenks17",
    email: "stevenks17@gmail.com"
  },
  siteUrl: 'https://santosSteve.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    }
  ]
}