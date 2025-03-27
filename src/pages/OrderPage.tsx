
import React, { useEffect } from "react";
import MovieSection from "@/components/MovieSection";

const OrderPage = () => {
  useEffect(() => {
    document.title = "Cinephile | TV Shows";
  }, []);

  return (
    <div>
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
            TV Shows
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover addictive series, compelling dramas, and binge-worthy shows for every taste.
          </p>
        </div>
      </div>
       
    </div>
  );
};

export default OrderPage;
