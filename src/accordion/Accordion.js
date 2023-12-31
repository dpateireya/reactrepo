import "./Accordion.css";
import Heading from "../adsbox/heading/Heading";
import Accoritem from "./Accoritem";
import "./Apidata";
import Apidata from "./Apidata";
function Accordion() {
  return (
    <>
      <div className="accor_form_style">
        <Heading head="Accordion List " />
        <div className="accor_list_style">
          {Apidata.map((item, index) => {
            return (
              <Accoritem
                id={index}
                key={index}
                question={item.question}
                answer={item.answer}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Accordion;
