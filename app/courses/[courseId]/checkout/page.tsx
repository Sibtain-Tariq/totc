import React from "react";
import Footer from "@/components/landingpage/Footer";
import CheckoutForm from "@/components/courses/course-detail/checkout/CheckoutForm";
import OrderSummary from "@/components/courses/course-detail/checkout/OrderSummary";
import EducationOffers from "@/components/courses/course-detail/checkout/EducationOffers";

export default function CheckoutPage() {
  return (
    <div className="w-full bg-white min-h-screen flex flex-col">
      <main className="flex-grow w-full">

        {/* Two-column Checkout Area */}
        <section className="w-full py-12 md:py-20">
          <div className="max-w-[1350px] mx-auto px-4 md:px-[50px]">
            <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start">

              {/* LEFT: Checkout Form */}
              <div className="w-full lg:flex-grow">
                <CheckoutForm />
              </div>

              {/* RIGHT: Order Summary */}
              <div className="w-full lg:w-[380px] xl:w-[420px] shrink-0">
                <OrderSummary />
              </div>

            </div>
          </div>
        </section>

        {/* Bottom: Education Offers */}
        <EducationOffers />

      </main>
      <Footer />
    </div>
  );
}
