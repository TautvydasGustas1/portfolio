import MyMoviesImage from "../images/MyMoviesLogo.png"
import PortfolioImage from "../images/avatar-medium.png"
import ltJobStatistics from "../images/LtjobStatistics.png"
import snake from "../images/snake.png"

const projectsData = [
  {
    id: 1,
    name: "MyMovies",
    image: MyMoviesImage,
    repository: "https://github.com/TautvydasGustas1/MyMoviesNew",
    liveDemo: "https://mymoviesnew.herokuapp.com/",
    techUsed: "React, Redux, Express.js, MongoDB",
    summary:
      "Website where people can review, rate and see other users rated movies",
    borderRadius: "0%",
  },
  {
    id: 2,
    name: "Portfolio",
    image: PortfolioImage,
    repository: "https://github.com/TautvydasGustas1/portfolio",
    liveDemo: "https://tautvydasgustas1.github.io/portfolio",
    techUsed: "React, Material-ui, Gatsby",
    summary: "My portfolio website",
    borderRadius: "0%",
  },
  {
    id: 3,
    name: "LT job statistics",
    image: ltJobStatistics,
    repository: "https://github.com/DomantasMk/LtJobStatistics",
    liveDemo: "https://ltitjobstatistics.herokuapp.com/",
    techUsed: "React, Material-ui, Puppeter, Node.js, MongoDB, Express",
    summary:
      "Website for analyzation of popular trends in Lithuanian IT job market",
    borderRadius: "10%",
  },
  {
    id: 4,
    name: "Snake game made with react",
    image: snake,
    repository: "https://github.com/TautvydasGustas1/React-Simple-Snake",
    liveDemo: "https://tautvydasgustas1.github.io/React-Simple-Snake/",
    techUsed: "React",
    summary: "Simple snake game made with react",
    borderRadius: "50%",
  },
]

export default projectsData
