import React from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import { BlogCard, SidebarCard } from "./components/Card";

import card1 from "./assets/card-1.jpeg";
import card2 from "./assets/card-2.jpeg";
import card3 from "./assets/card-3.jpg";
import card4 from "./assets/card-4.jpg";

function HomePage(props) {
  const { pageTitle = "Valoare Default" } = props;

  return (
    <div>
      <NavBar />

      <h1>{pageTitle}</h1>

      {/* Page Content */}
      <div style={{ display: "flex", padding: "0 50px" }}>
        <div style={{ width: "65%" }}>
          <Banner /> {/* props.banner */}
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <BlogCard image={card1} title="Card Title 1" description="" />
            <BlogCard image={card2} title="Card Title 2" description="" />
            <BlogCard image={card3} title="Card Title 3" description="" />
            <BlogCard image={card4} title="Card Title 4" description="" />
          </div>
        </div>

        <div style={{ width: "35%" }}>
          <h2>Featured Articles</h2>

          <SidebarCard
            title="Sidebar Card Title 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
          />

          <SidebarCard
            title="Sidebar Card Title 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
