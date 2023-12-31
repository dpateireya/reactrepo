import Heading from "./heading/Heading";
import Body from "./body/Body";
import "./Adsbox.css";

function Adsbox(props) {
  return (
    <>
      <div className="ads_style">
        <Heading head={props.head} />
        <Body details={props.details} />
      </div>
    </>
  );
}

export default Adsbox;
