import React from "react";

// Simple Book Now page embedding Setmore booking button
export default function BookNowPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="bg-white/90 rounded-2xl shadow-lg p-8 text-center max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-4">Book now</h1>
        <p className="text-gray-600 mb-6">Schedule your appointment easily.</p>

        {/* Setmore Script and Button */}
        <script
          id="setmore_script"
          type="text/javascript"
          src="https://assets.setmore.com/integration/static/setmoreIframeLive.js"
        ></script>
        <a
          style={{ float: "none" }}
          className="w-full mx-auto"
          id="Setmore_button_iframe"
          href="https://nickjwsz.setmore.com"
        >
          <img
          className=" mx-auto"
            src="https://assets.setmore.com/integration/images/newdesign/others/book-now-button.svg"
            alt="Book an appointment with Visual Prints using Setmore"
          />
        </a>
      </div>
    </main>
  );
}