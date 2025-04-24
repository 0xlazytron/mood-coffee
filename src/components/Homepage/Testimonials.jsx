import React from 'react';
import { Star, StarHalf } from "lucide-react";
import {motion} from "framer-motion";
import avator from "../../assets/home/avator.png";


const Testimonials = () => {

    const testimonials = [
        {
          id: 1,
          name: "Nadir Aftab",
          title: "CEO, Design Arena",
          image: avator ,
          review:
            "Lorem ipsum dolor sit amet consectetur. Amet in ut nisi sed. Ornare amet sed nam ut non nisi faucibus. Neque leo ipsum duis elementum vitae turpis.",
          date: "12/01/2024",
          rating: 4.5,
        },
        {
          id: 2,
          name: "Nadir Aftab",
          title: "CEO, Design Arena",
          image: avator,
          review:
            "Lorem ipsum dolor sit amet consectetur. Amet in ut nisi sed. Ornare amet sed nam ut non nisi faucibus. Neque leo ipsum duis elementum vitae turpis.",
          date: "12/01/2024",
          rating: 4,
        },
        {
          id: 3,
          name: "Nadir Aftab",
          title: "CEO, Design Arena",
          image: avator,
          review:
            "Lorem ipsum dolor sit amet consectetur. Amet in ut nisi sed. Ornare amet sed nam ut non nisi faucibus. Neque leo ipsum duis elementum vitae turpis.",
          date: "12/01/2024",
          rating: 4,
        },
      ];

    const StarRating = ({ rating }) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
    
        return (
          <div className="flex">
            {[...Array(fullStars)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-[#FFB800] text-[#FFB800]" />
            ))}
            {hasHalfStar && (
              <StarHalf className="h-5 w-5 fill-[#FFB800] text-[#FFB800]" />
            )}
            {[...Array(5 - Math.ceil(rating))].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-gray-300" />
            ))}
          </div>
        );
      };
    
  return (
    <div>  <div className=" max-w-7xl mx-auto min-h-[70vh] flex flex-col  justify-center items-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="mt-24 text-center"
    >
      <h2 className="text-3xl font-bold text-[#7D6251]">
        What Our Customers Say
      </h2>
      <p className="mt-4 text-[#7D6251]/80">
        Step into our world through vibrant snapshots of our cozy
        interiors and inviting atmosphere. Experience the charm of our
        shop.
      </p>

      <div className=" grid gap-8 md:grid-cols-3 mt-[5rem]">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
            className="rounded-lg bg-white h-[264px] p-6 text-center shadow-xl border border-[#E8DCD0]"
          >
            <div className="mx-auto h-20 w-20 overflow-hidden mt-[-4rem] rounded-full">
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[#7D6251]">
              {testimonial.name}
            </h3>
            <p className="text-sm text-[#7D6251]/80">
              {testimonial.title}
            </p>
            <p className="mt-4 text-[#7D6251]/80">{testimonial.review}</p>
            <div className="mt-4 flex items-center justify-center space-x-4">
              <StarRating rating={testimonial.rating} />
              <span className="text-sm text-[#7D6251]/60">
                {testimonial.date}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div></div>
  )
}

export default Testimonials