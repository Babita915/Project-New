import { useLocation } from "react-router-dom";
import { JsonFile } from "./JsonFile";

export default function Products() {
  const { state = {} } = useLocation();
  const cards = JsonFile();

  const {
    brand = "all",
    sort = "none",
    price = 10000,
  } = state;

  const filteredProducts = cards
    .filter((item) => {
      if (brand !== "all" && item.brand !== brand) return false;
      return item.price <= price;
    })
    .sort((a, b) => {
      if (sort === "Name Ascending A - Z")
        return a.cardHeading.localeCompare(b.cardHeading);

      if (sort === "Name Descending Z - A")
        return b.cardHeading.localeCompare(a.cardHeading);

      if (sort === "Price Low - High") return a.price - b.price;
      if (sort === "Price High - Low") return b.price - a.price;

      return 0;
    });

  return (
    <div className="container mt-4">
      <h2>Filtered Products</h2>

      <div className="mb-3">
        <p><strong>Brand:</strong> {brand}</p>
        <p><strong>Sort:</strong> {sort}</p>
        <p><strong>Price up to:</strong> ₹{price}</p>
      </div>

      <div className="row">

        {filteredProducts.map((item) => (
          <div className="col-sm-3" key={item.id}>
            <div className="card mb-3">
              <div className="card-body">
              <img
                src={item.cardImage} 
                alt={item.cardHeading}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
                <h5>{item.cardHeading}</h5>
                <p>Brand: {item.brand}</p>
                <p>₹{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
