import Day from "../components/day.jsx"
import reactImg1 from "../../src/assets/image_no_background.png"

const Home = () => {
  return (
    <div>
    <div>
      <Day day="PONEDELJEK" time="7:30 – 19:00"/>
      <Day day="TOREK" time="7:30 – 19:00"/>
      <Day day="SREDA" time="7:30 – 19:00"/>
      <Day day="ČETRTEK" time="7:30 – 19:00"/>
      <Day day="PETEK" time="7:30 – 19:00"/>
      <Day day="SOBOTA" time="8:00 – 13:00"/>
      <Day day="NEDELJA" time="ZAPRTO"/>
    </div>
    <div>
    <p className="welcome">DOBRODOŠLI</p>
    <img src={reactImg1} />
    </div>
    </div>
  )
}

export default Home