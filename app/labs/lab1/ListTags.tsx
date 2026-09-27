export default function ListTags() {
  return (
    <div id="wd-lists">
      <h4>List Tags</h4>
      <h5>Ordered List Tag</h5>
      How to make pancakes:
      <ol id="wd-pancakes">
        <li>Mix dry ingredients.</li>
        <li>Add wet ingredients.</li>
        <li>Stir to combine.</li>
        <li>Heat a skillet or griddle.</li>
        <li>Pour batter onto the skillet.</li>
        <li>Cook until bubbly on top.</li>
        <li>Flip and cook the other side.</li>
        <li>Serve and enjoy!</li>
      </ol>
      My favorite recipe:
      {/* TODO: swap in a recipe you actually make */}
      <ol id="wd-your-favorite-recipe">
        <li>Season a steak with salt and pepper and let it rest.</li>
        <li>Sear it in a very hot cast iron pan, 3 minutes per side.</li>
        <li>Baste with butter, garlic, and thyme, then rest 5 minutes.</li>
        <li>Slice against the grain and serve.</li>
      </ol>
      <h5>Unordered List Tag</h5>
      My favorite books (in no particular order)
      <ul id="wd-my-books">
        <li>Dune</li>
        <li>Lord of the Rings</li>
        <li>Ender&apos;s Game</li>
        <li>Red Mars</li>
        <li>The Forever War</li>
      </ul>
      Your favorite books (in no particular order)
      {/* TODO: replace with titles you actually like */}
      <ul id="wd-your-books">
        <li>Zen and the Art of Motorcycle Maintenance</li>
        <li>Moneyball</li>
        <li>How Not to Be Wrong</li>
      </ul>
      Some HTML tags from this chapter
      <ul id="wd-ai-html-tags">
        <li>h1 to h6: section headings from largest to smallest</li>
        <li>p: a paragraph with vertical spacing</li>
        <li>ol and ul: ordered and unordered lists</li>
        <li>table: rows and columns of data</li>
        <li>img: an image from a local or remote source</li>
        <li>form: a group of input controls</li>
        <li>a: a hyperlink to another page</li>
      </ul>
    </div>
  );
}
