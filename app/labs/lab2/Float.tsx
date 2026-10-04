/* eslint-disable @next/next/no-img-element */
import "./index.css";

const IMAGE = "/images/reactjs.jpg";
const LOREM =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic reprehenderit doloremque adipisci iste deserunt. Inventore, hic. Esse nihil unde aut, dignissimos eos consequatur veniam distinctio?";

export default function Float() {
  return (
    <div id="wd-float-divs">
      <h2>Float</h2>
      <div>
        <img className="wd-float-right" src={IMAGE} alt="React" />
        {LOREM} {LOREM}
        <img className="wd-float-left" src={IMAGE} alt="React" />
        {LOREM} {LOREM}
        <img className="wd-float-right" src={IMAGE} alt="React" />
        {LOREM} {LOREM}
        <img className="wd-float-left" src={IMAGE} alt="React" />
        {LOREM} {LOREM}
        <div className="wd-float-done" />
      </div>
      <div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
          Yellow
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
          Blue
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
          Red
        </div>
        <img className="wd-float-right" src={IMAGE} alt="React" />
        <div className="wd-float-done" />
      </div>
      {/* On your own: a box floated left, text wraps, then a clear */}
      <div>
        <div className="wd-float-left wd-dimension-square wd-bg-color-green wd-fg-color-white">
          Left box
        </div>
        {LOREM}
        <div className="wd-float-done" />
      </div>
      {/* With AI */}
      <div>
        <div id="wd-ai-float" className="wd-float-right wd-dimension-square wd-bg-color-gray">
          AI box
        </div>
        <p>{LOREM}</p>
        <div className="wd-float-done" />
      </div>
    </div>
  );
}
