const Browser = () => {
  type item = {name: string, categories: string[], price: [number|void, number, number|void]}
  const database: item[] = [
    {
      name: "Hardcover Notebook",
      categories: ["notebook"],
      price: [9.99, 14.99, undefined]
    }, {
      name: "Spiral Notebook",
      categories: ["notebook"],
      price: [6.99, 11.99, undefined]
    }, {
      name: "Notebook",
      categories: ["notebook"],
      price: [3.99, 5.99, undefined]
    }, {
      name: "Pastel Artbook",
      categories: ["art book"],
      price: [14.99, 29.99, 49.99]
    }, {
      name: "Water-colour Artbook",
      categories: ["art book"],
      price: [15.99, 32.49, 52.99]
    }, {
      name: "Drawing book",
      categories: ["art book"],
      price: [6.99, 11.99, 14.99]
    }, {
      name: "Pastel Paper",
      categories: ["paper"],
      price: [0.89, 1.89, 3.79]
    }, {
      name: "Watercolour Paper",
      categories: ["paper"],
      price: [0.99, 1.99, 3.99]
    }, {
      name: "Art Printing Paper",
      categories: ["paper"],
      price: [1.49, 2.99, 4.49]
    }
  ]
  const stringify = (string: string) => string.toLowerCase().replaceAll(" ", "-");

  return (
    <div className="container__view">
      <div className="container__view__browser">
        {
          database.map((item) => {
            return (
            <div key={stringify(item.name)} className="container__view__browser__thumbnail">
              <img className="container__view__browser__thumbnail__image" />
              <div className="container__view__browser__thumbnail__body">
                <h4 className="container__view__browser__thumbnail__body__title">
                  {item.name}
                </h4>
                <span className="container__view__browser__thumbnail__body__price">{item.price[1]}</span>
              </div>
            </div>
          )
          })
        }
      </div>
    </div>
  );
}

export default Browser;
