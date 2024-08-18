import React from "react";
import Bookcard from "../components/Bookcard";
import Dropdown from "../components/Dropdown";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="px-[1em]">
        <div className="h-screen px-[1em] py-[5em] flex">
          <img
            src="img/banner.png"
            alt="banner"
            className="shadow-lg w-[200px] object-contain fixed"
          />
          <div className="flex flex-col gap-[10px] w-full pe-[2em] ps-[13em]">
            <div className="flex gap-[10px] justify-stretch">
              <Searchbar placeholder={"Cari buku"} />
              <Dropdown
                placeholder={"Kategori"}
                data={["Komik", "Horror", "Non-fiksi"]}
              />
            </div>
            <div className="flex flex-wrap gap-[1em] justify-center">
              <Bookcard
                img={"img/cover.jpg"}
                author={"Henry Manampiring"}
                title={"Filosofi Teras"}
              />
              <Bookcard
                img={"img/cover.jpg"}
                author={"Henry Manampiring"}
                title={"Filosofi Teras"}
              />
              <Bookcard
                img={"img/cover.jpg"}
                author={"Henry Manampiring"}
                title={"Filosofi Teras"}
              />
              <Bookcard
                img={"img/cover.jpg"}
                author={"Henry Manampiring"}
                title={"Filosofi Teras"}
              />
              <Bookcard
                img={"img/cover.jpg"}
                author={"Henry Manampiring"}
                title={"Filosofi Teras"}
              />
              <Bookcard
                img={"img/cover.jpg"}
                author={"Henry Manampiring"}
                title={"Filosofi Teras"}
              />
              <Bookcard
                img={"img/cover.jpg"}
                author={"Henry Manampiring"}
                title={"Filosofi Teras"}
              />
              <Bookcard
                img={"img/cover.jpg"}
                author={"Henry Manampiring"}
                title={"Filosofi Teras"}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
