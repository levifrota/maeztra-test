import CollectionBanner from "../assets/1vLCv01.png.png";
import "../styles/NewCollection.css";

function NewCollection() {
  return (
    <div className="collection">
      <div className="collection-description">
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum.
          Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer.
          Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet
          luctus ut vulputate scelerisque placerat consequat. Neque arcu mi
          iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu
          mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat
          aliquet. Sed sed pellentesque porttitor phasellus donec condimentum
          sit sapien.
        </p>
      </div>
      <div className="collection-img">
        <img
          src={CollectionBanner}
          alt="Collection"
          className="collection-banner"
        ></img>
      </div>
    </div>
  );
}

export default NewCollection;
