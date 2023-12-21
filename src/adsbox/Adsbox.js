import Heading from './heading/Heading';
import Body from './body/Body';
import './Adsbox.css';

function Adsbox(prop) {
  return (
    <>
      <div className="ads_style">
        <Heading head={prop.head} />
        <Body details={prop.details} />
      </div>
    </>
  );
}

export default Adsbox;
