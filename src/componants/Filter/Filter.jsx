import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Filter({ products }) {
  // const category = products.map((product) => (
  //   <div key={product.id}>
  //     <p>{product.category}</p>
  //   </div>
  // ));
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="men's clothing" title="men's clothing">
        Tab content for Profile
      </Tab>

      <Tab eventKey="jewelery" title="jewelery">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="electronics">
        Tab content for Contact
      </Tab>
      <Tab eventKey="contact" title="women's clothing">
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default Filter;
