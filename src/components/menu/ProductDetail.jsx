import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import menu1 from "../../assets/menu/menu1.jpeg";
import menu2 from "../../assets/menu/menu2.png";
import menu3 from "../../assets/menu/menu3.jpeg";
import menu4 from "../../assets/menu/menu4.jpeg";
import { Link, useLocation, useParams } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { useCart } from "../../context/CartContext";

const relatedProducts = [
  {
    id: 1,
    name: "Macchiato",
    description: "Top Mexican Coffee",
    price: "$8.50",
    image: menu1,
  },
  {
    id: 2,
    name: "Macchiato",
    description: "Top Mexican Coffee",
    price: "$8.50",
    image: menu2,
  },
  {
    id: 3,
    name: "Macchiato",
    description: "Top Mexican Coffee",
    price: "$8.50",
    image: menu3,
  },
  {
    id: 4,
    name: "Macchiato",
    description: "Top Mexican Coffee",
    price: "$8.50",
    image: menu4,
  },
];

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(0);

  const productImages = [menu1, menu2, menu3, menu4];
  const params = useParams();
  const location = useLocation();
  const product = location.state?.product;
  const { addToCart } = useCart();

  return (
    <section className=" mt-[4rem]">
      <Navbar />
      <section className="bg-white py-16 ">
        <div className="mx-auto max-w-7xl px-4">
          {/* Product Details */}
          <div className="grid gap-8 lg:grid-cols-2 ">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative flex gap-4"
            >
              {/* Thumbnails */}
              <div className="flex flex-col gap-4">
                {productImages.map((image, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedImage(index)}
                    className={`overflow-hidden rounded-lg ${
                      selectedImage === index ? "ring-2 ring-[#7D6251]" : ""
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Product view ${index + 1}`}
                      className="h-20 w-20 object-cover"
                    />
                  </motion.button>
                ))}
              </div>

              {/* Main Image */}
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex-1 overflow-hidden rounded-2xl h-[590px]"
              >
                <img
                  src={productImages[selectedImage] || "/placeholder.svg"}
                  alt="Mericano Cold Coffee"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <h1 className="text-4xl font-bold text-[#7D6251]">
                {product.name}
              </h1>
              <p className="mt-4 text-3xl font-bold text-[#7D6251]">
                {product.price}{" "}
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium text-[#7D6251]">
                    Coffee Type:
                  </span>
                  <span className="text-[#7D6251]/80">Cold Coffee</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium text-[#7D6251]">Location:</span>
                  <span className="text-[#7D6251]/80">
                    Mood Cafe, Tuscaloosa, Alabama
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-bold text-[#7D6251]">
                  About This Coffee
                </h2>
                <p className="mt-2 text-[#7D6251]/80">
                  Lorem ipsum dolor sit amet consectetur. Pharetra odio duis
                  tincidunt posuere enim. Netus ut elit enim. Ac eleifend ipsum
                  et porttitor suspisse aliquam amet mauris augue. Faucibus vel
                  urna nisi turpis suspendisse aliquot egestas lobortis
                  maecenas. Amet sed amet sed amet sed amet sed amet sed amet
                  sed lorem sapien. Mi quis amet nam et.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <Link to={"/payment"}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full bg-[#7D6251] px-8 py-3 text-white transition-colors hover:bg-[#8B6E5C]"
                  >
                    Order Now
                  </motion.button>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full bg-[#7D6251]/10 px-8 py-3 text-[#7D6251] transition-colors hover:bg-[#7D6251]/20"
                >
                  Add To Cart
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Related Items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-24 border-t border-[#E8DCD0] py-[2rem]"
          >
            <h2 className="text-3xl font-bold text-[#603809] text-center ">
              Related Items
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
                  className="w-[300px] h-[370px] mx-auto rounded-lg bg-[#FCF3EA] border border-[#7D6356]  shadow-lg "
                >
                  <div className="aspect-square overflow-hidden h-[222px] w-full ">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-semibold text-[#7D6251]">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-[#7D6251]/80">
                      {product.description}
                    </p>
                    <p className="mt-2 text-xl font-bold text-[#7D6251]">
                      {product.price}
                    </p>
                    <div className="mt-6 flex justify-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-full bg-[#7D6356] text-white px-4 py-3 text-sm transition-colors hover:bg-[#E8DCD0] hover:text-[#7D6356]"
                        onClick={() => addToCart(product)}
                      >
                        Add To Cart
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-full bg-[#E8DCD0] px-4 py-3 text-sm text-[#7D6251] transition-colors hover:bg-[#7D6356] hover:text-white"
                      >
                        Buy Now
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </section>
  );
}
