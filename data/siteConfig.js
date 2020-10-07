module.exports = {
  siteTitle: 'Hi! I\'m Steve!',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Steven Kumarsingh',
  twitterUsername: 'Nevets172',
  githubUsername: 'stevenks17',
  authorAvatar: 'public/images/Stevek.jpeg',
  authorDescription: `Full-Stack Developer, passionate about what I do. Always interested in how any application was made, I started to study programming as a hobby because I enjoyed modding games. I decided to take my hobby and passion and make it my career. <br />
     <br />
     As a Full-Stack developer I mainly work with <strong>React, PostgreSQL, Ruby on Rails.</strong>`,
  skills: [
    {
      name: 'Ruby',
      level: 70
    },
    {
      name: 'Javascript',
      level: 70
    },
    {
      name: 'Python',
      level: 60
    },
    {
      name: 'Django',
      level: 50
    },
    {
      name: 'React',
      level: 70
    },
    {
      name: 'Ruby on Rails',
      level: 90
    },
    {
      name: 'HTML',
      level: 80
    },
    {
      name: 'CSS',
      level: 80
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
      description: "I worked with the Support and Quality Assurance teams and was responsible for developing and maintaining the mobile application."
  
    },

  ],
  portifolio: [
    {
      image: "/images/WGN.png",
      description: "Which Game Next?",
      url: "https://wgn-app.netlify.app/",
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
    linkedin: "https://www.linkedin.com/in/steven-kumarsingh-97b610180/",
    github: "https://github.com/stevenks17",
    email: "stevenks17@gmail.com"
  },
  siteUrl: 'https://steveks17.github.io/gatsbystarter-cv',
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
      label: 'Portfolio',
      url: '/portifolio',
    }
  ]
}