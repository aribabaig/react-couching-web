import { FaComputer } from "react-icons/fa6";
import { FaStethoscope } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import '../App.css'

const Program = () => {
  return(
    <>
        <div className="programs">
          <div className="program">
            <img src="https://i.pinimg.com/736x/d9/18/2b/d9182beca7726bb3f98aa6389dd47057.jpg"/>
            <div className="caption">
              <span><FaStethoscope /></span>
              <p>Pre-Medical<br/>MDCAT</p>
            </div>
          </div>
          <div className="program">
            {/* <img src="https://i.pinimg.com/564x/38/54/a8/3854a8e825bc816e7d7c2caa2c255460.jpg"/> */}
            <img src="https://i.pinimg.com/564x/2c/25/8e/2c258e9814e99ee5e7c4b7e8def14a17.jpg" alt=""/>
            <div className="caption">
              <span><MdEngineering /></span>
              <p>Pre-Enginnering<br/>ECAT</p>
            </div>
          </div>
          <div className="program">
            {/* <img src="https://i.pinimg.com/736x/7a/df/68/7adf68082c63dab03321434793ea2f3f.jpg"/> */}
            <img src="https://i.pinimg.com/564x/8c/18/d6/8c18d616f6b3f010345654854c2d8650.jpg" alt=""/>
            <div className="caption">
              <span><FaComputer /></span>
              <p>Computer<br/>Science</p>
            </div>
          </div>

        </div>


    </>
  )
}
export default Program