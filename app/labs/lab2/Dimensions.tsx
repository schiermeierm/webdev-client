export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        {/* On your own */}
        <div className="wd-dimension-banner wd-bg-color-green wd-fg-color-white">Banner</div>
        {/* With AI */}
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This is a long sample sentence that has to fit inside a fixed 120 by 60 box no matter how much text there is
        </div>
      </div>
    </div>
  );
}
