const testimonials = [
  {
    name: "James Smith",
    review: "Amazing food and excellent service. Highly recommend!",
  },
  {
    name: "Sophia Carter",
    review: "The best momos in town! Will definitely come back.",
  },
];

const Testimonials = () => {
  return (
    <section className="body-wrapper py-16">
      <div className="content-wrapper text-center">
        <h3 className="text-xs font-bold text-primary">Happy Customers</h3>
        <h2 className="text-3xl font-bold text-gray-900">Our Guestbook</h2>
        <div className="mt-8 space-y-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic">"{testimonial.review}"</p>
              <h4 className="text-lg font-semibold mt-2">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
