const Reservation = () => {
  return (
    <section className="body-wrapper py-16 bg-gray-100">
      <div className="content-wrapper text-center">
        <h3 className="text-xs font-bold text-primary">Book a Table</h3>
        <h2 className="text-3xl font-bold text-gray-900">Check Availability</h2>
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
          <p className="text-gray-700">Monday - Friday: 12:00 PM - 10:00 PM</p>
          <p className="text-gray-700">
            Saturday - Sunday: 10:00 AM - 11:00 PM
          </p>
          <p className="mt-4 font-semibold">Call Us: (123) 456-7890</p>
          <button className="mt-4 bg-momo_red text-white px-6 py-3 rounded-lg hover:bg-red-700">
            Reserve Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
