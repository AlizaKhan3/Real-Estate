import { Link } from "react-router-dom";
import image from "../assets/image.jpg";

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c)` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Find Your Dream Home
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Premium real estate listings. Trusted agents. Best locations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition">
              Login
            </Link>
            <Link to="/register" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition">
              Register
            </Link>
            <Link to="/properties" className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
              View Properties
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="px-4 py-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Featured Properties
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-2xl overflow-hidden shadow hover:shadow-xl transition duration-300 bg-white"
            >
              <img
                src={image}
                alt="Property"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  Luxury Family Home
                </h3>
                <p className="text-gray-600 mb-4">4 Beds • 3 Baths • 3200 sqft</p>
                <button className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-4 py-20 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
          Why Choose Us
        </h2>
        <p className="max-w-2xl text-center text-gray-600 mx-auto mb-12">
          Trusted by thousands for our verified listings, professional agents,
          and transparent transactions.
        </p>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              500+ Happy Clients
            </h3>
            <p className="text-gray-600">
              We’ve helped hundreds of families find their dream homes.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              10+ Years of Excellence
            </h3>
            <p className="text-gray-600">
              A decade of trusted service in the real estate market.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Verified Listings
            </h3>
            <p className="text-gray-600">
              Every listing is verified for your safety and satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="px-4 py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Find Your Perfect Home?
        </h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Join thousands of happy customers. Register now and start your journey.
        </p>
        <button className="bg-white text-blue-800 font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition">
          Get Started
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 px-4 py-6 text-center">
        © 2025 DreamHome Real Estate. All rights reserved.
      </footer>
    </div>
  );
}
