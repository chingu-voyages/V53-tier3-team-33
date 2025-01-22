const fakeData = [
  {
    id: 123,
    name: "Amygdalodon",
    imageSrc: "https://images.dinosaurpictures.org/Amygdalodon_e238.jpg",
    typeOfDinosaur: "sauropod",
    length: 15,
    weight: "N/A",
    diet: "herbivorous",
    whenLived: "Mid Jurassic, 177-169 million years ago",
    foundIn: "Argentina",
    namedBy: "Cabrera (1947)",
    description: "Amygdalodon is known from a single partial skeleton.",
    price: 19.54,
    inStock: 21,
  },
  {
    id: 123453,
    name: "Secernosaurus",
    imageSrc:
      "https://images.dinosaurpictures.org/Secernosaurus_koerneri_by_maniraptora_db3d.jpg",
    typeOfDinosaur: "large ornithopod",
    length: 3,
    weight: "N/A",
    diet: "herbivorous",
    whenLived: "Late Cretaceous, 71-66 million years ago",
    foundIn: "Argentina",
    namedBy: "Brett-Surman (1979)",
    description:
      "Secernosaurus was the first hadrosaurid to be found in South America.",
    price: 81.45,
    inStock: 0,
  },
  {
    id: 125436453,
    name: "Hypacrosaurus",
    imageSrc: "https://images.dinosaurpictures.org/Hypacrosaurus-v2_bc23.jpg",
    typeOfDinosaur: "large ornithopod",
    length: 9,
    weight: "N/A",
    diet: "herbivorous",
    whenLived: "Late Cretaceous, 70 million years ago",
    foundIn: "Canada, USA",
    namedBy: "Brown (1913)",
    description:
      "Complete Hypacrosaurus skeletons have been found, from embryos to adults.",
    price: 49.49,
    inStock: 38,
  },
  {
    id: 12456743,
    name: "Iguanodon",
    imageSrc: "https://images.dinosaurpictures.org/iguanodon-1_e1e9.jpg",
    typeOfDinosaur: "large ornithopod",
    length: 10,
    weight: 4000,
    diet: "herbivorous",
    whenLived: "Early Cretaceous, 140-110 million years ago",
    foundIn: "Belgium, England, United Kingdom",
    namedBy: "Boulenger and van Beneden (1881)",
    description:
      "Iguanodon could probably walk on all fours or on two legs. It had a large thumb spike on the end of its hand, probably to fend-off predators, and the structure of the muscles inside its head suggest it had a very long tongue.",
    price: 22.38,
    inStock: 21,
  },
  {
    id: 346123,
    name: "Minmi",
    imageSrc:
      "https://images.dinosaurpictures.org/minmi-paravertebra-a-prehistoric-era-sergey-krasovskiy_07e1.jpg",
    typeOfDinosaur: "armoured dinosaur",
    length: 3,
    weight: "N/A",
    diet: "herbivorous",
    whenLived: "Early Cretaceous, 121-112 million years ago",
    foundIn: "Australia",
    namedBy: "Molnar (1980)",
    description:
      "This dinosaur is known from an almost complete skeleton with armour in place.",
    price: 43.63,
    inStock: 14,
  },
  {
    id: 346567123,
    name: "Nemegtosaurus",
    imageSrc: "https://images.dinosaurpictures.org/nemegtosaurus1_2846.jpg",
    typeOfDinosaur: "sauropod",
    length: 13,
    weight: "N/A",
    diet: "herbivorous",
    whenLived: "Late Cretaceous, 72-68 million years ago",
    foundIn: "Mongolia",
    namedBy: "Nowinski (1971)",
    description:
      "Nemegtosaurus is only known from a skull and mandible (lower jawbone), so reconstructions are speculative.",
    price: 85.38,
    inStock: 3,
  },
  {
    id: 343246123,
    name: "Cryolophosaurus",
    imageSrc:
      "https://images.dinosaurpictures.org/Cryolophosaurus_by_Ahrkeath_719b.jpg",
    typeOfDinosaur: "large theropod",
    length: 8,
    weight: 500,
    diet: "carnivorous",
    whenLived: "Early Jurassic, 170 million years ago",
    foundIn: "Antarctica",
    namedBy: "Hammer and Hickerson (1994)",
    description:
      "Cryolophosaurus is one of the earliest meat-eating dinosaurs found so far. It lived in what is now Antarctica and had a small curved crest on the top of its head.",
    price: 27.56,
    inStock: 8,
  },
  {
    id: 346156723,
    name: "Dacentrurus",
    imageSrc: "https://images.dinosaurpictures.org/Dacentrurus-bunt_3031.jpg",
    typeOfDinosaur: "armoured dinosaur",
    length: 6,
    weight: "N/A",
    diet: "herbivorous",
    whenLived: "Late Jurassic, 154-150 million years ago",
    foundIn: "England, France, Portugal, United Kingdom",
    namedBy: "Lucas (1902)",
    description: "Dacentrurus was the first stegosaur ever discovered.",
    price: 21.03,
    inStock: 39,
  },
  {
    id: 346780123,
    name: "Barapasaurus",
    imageSrc: "https://images.dinosaurpictures.org/barapasaurus_308a.jpg",
    typeOfDinosaur: "sauropod",
    length: 14,
    weight: "N/A",
    diet: "herbivorous",
    whenLived: "Early Jurassic, 185-170 million years ago",
    foundIn: "India",
    namedBy: "Jain, Kutty, Roy-Chowdhury and Chatterjee (1975)",
    description: "Barapasaurus was a primitive but very large sauropod.",
    price: 82.12,
    inStock: 26,
  },
  {
    id: 3468769,
    name: "Velociraptor",
    imageSrc:
      "https://images.dinosaurpictures.org/Velociraptor-dinosaurs-23564955-817-734_5c51.jpg",
    typeOfDinosaur: "small theropod",
    length: 1.8,
    weight: 7,
    diet: "carnivorous",
    whenLived: "Late Cretaceous, 74-70 million years ago",
    foundIn: "Mongolia",
    namedBy: "Osborn (1924)",
    description:
      "As portrayed in the Jurassic Park movies, Velociraptor was recreated at twice its actual size and closely modelled on Deinonychus. Though this was seen as unscientific at the time, soon after the first film was released, a dinosaur of the same type, Utahraptor, was discovered, even larger than the virtual Velociraptors.Velociraptor is now thought to have had a fine feather-like covering.",
    price: 87.29,
    inStock: 0,
  },
  {
    id: 3468567845769,
    name: "Yingshanosaurus",
    imageSrc: "https://images.dinosaurpictures.org/yingshanosaurus_9528.jpg",
    typeOfDinosaur: "armoured dinosaur",
    length: "N/A",
    weight: "N/A",
    diet: "herbivorous",
    whenLived: "Late Jurassic, 159-142 million years ago",
    foundIn: "China",
    namedBy: "Watanabe (1992)",
    description:
      "This dinosaur was named in a Japanese dinosaur book, but has not been fully described yet (it is a nomen nudum).",
    price: 62.55,
    inStock: 3,
  },
];

import { addToCart } from "../utils/shoppingSlice";
import { useDispatch } from "react-redux";

function Ecommerce() {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    if (item.inStock === 0) {
      console.warn("Item is out of stock!");
      return;
    }

    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        inStock: item.inStock,
        quantity: 1,
      }),
    );
  };

  return (
    <div className="m-10 flex flex-col items-center gap-6">
      <div className="w-full p-4 text-center md:max-w-[50rem]">
        <h1 className="mb-3 text-4xl">Dino online shop</h1>
        <p>
          Buy your favorite dinosaur toys, figures, and merchandise for yourself
          and your children from our wide selection of products.
        </p>
      </div>

      <section className="bg-bgColor flex flex-col items-center gap-6 rounded-lg bg-gray-100 p-4">
        {/* search and filters */}
        <div className="flex w-full items-center justify-between rounded-lg bg-white p-4 shadow-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-1/3 rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex gap-6">
            <select className="rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Filter 1</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
            <select className="rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Filter 2</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
        </div>

        {/* responsive grid */}
        <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {fakeData.map((item) => (
            <div
              key={item.id}
              className="mx-auto flex w-[17rem] flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-md"
            >
              <img
                src={item.imageSrc}
                alt={item.name}
                className="mb-4 h-48 w-full object-contain"
              />

              {/* product info */}
              <h2 className="mb-2 text-lg font-semibold">{item.name}</h2>
              <p className="mb-1 text-gray-600">
                Price:{" "}
                <span className="font-bold text-green-600">${item.price}</span>
              </p>
              <p className="mb-3 text-gray-600">
                In Stock:{" "}
                <span
                  className={`font-bold ${
                    item.inStock === 0
                      ? "font-bold text-red-600"
                      : "text-gray-600"
                  }`}
                >
                  {item.inStock}
                </span>
              </p>

              <button
                onClick={() => handleAddToCart(item)}
                disabled={item.inStock === 0}
                className={`w-full rounded-lg px-4 py-2 text-white transition duration-200 hover:bg-blue-600 ${
                  item.inStock === 0
                    ? "cursor-not-allowed bg-gray-400"
                    : "bg-blue-500"
                }`}
              >
                {item.inStock === 0 ? "Out of Stock" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Ecommerce;
