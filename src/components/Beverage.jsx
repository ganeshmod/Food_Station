const beverages = [
  {
    id: 1,
    name: "Tea",
    price: 100,
    image:
      "https://plus.unsplash.com/premium_photo-1676746294168-95b49f79f04b?q=80&w=1183&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Coffee",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  },
  {
    id: 3,
    name: "Juice",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e",
  },
  {
    id: 4,
    name: "Cold Drink",
    price: 80,
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e",
  },
  {
    id: 5,
    name: "Cold Drink",
    price: 80,
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e",
  },
  {
    id: 6,
    name: "Cold Drink",
    price: 80,
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e",
  },
];

export default function Beverage() {
  return (
    <div className="mt-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Beverage</h1>
        <p className="text-gray-600">
          Discover our delicious selection of beverages!
        </p>
      </div>

      <div className="overflow-hidden">
        <div className="flex gap-6 animate-scroll w-max">
          {[...beverages, ...beverages].map((item, index) => (
            <div
              key={index}
              className="card bg-base-100 w-72 shadow-lg flex-shrink-0"
            >
              <figure>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-52 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>

                <p>
                  Enjoy a refreshing {item.name.toLowerCase()} anytime of the
                  day.
                </p>

                <div className="card-actions justify-end">
                  <button className="btn btn-primary">
                    ₹ {item.price}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
