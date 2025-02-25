import React from 'react';

const publicationsData = [
  {
    title: "Development of functional spermatozoa in mammalian spermiogenesis",
    authors: ["Haruhiko Miyata", "Keisuke Shimada", "Yuki Kaneda", "Masahito Ikawa"],
    date: "July 15, 2024",
    journal: "Development",
    doi: "10.1242/dev.202838",
    link: "https://doi.org/10.1242/dev.202838",
    isFirstAuthor: false,
  },
  {
    title: "FBXO24 deletion causes abnormal accumulation of membraneless electron-dense granules in sperm flagella and male infertility",
    authors: ["Yuki Kaneda", "Haruhiko Miyata", "Zoulan Xu", "Keisuke Shimada", "Maki Kamoshita", "Tatsuya Nakagawa", "Chihiro Emori", "Masahito Ikawa"],
    date: "July 15, 2024",
    journal: "eLife",
    doi: "10.7554/eLife.92794.2",
    link: "https://doi.org/10.7554/eLife.92794.2",
    isFirstAuthor: true,
  },
  {
    title: "Testis‐specific proteins, TSNAXIP1 and 1700010I14RIK, are important for sperm motility and male fertility in mice",
    authors: ["Yuki Kaneda", "Haruhiko Miyata", "Keisuke Shimada", "Seiya Oura", "Masahito Ikawa"],
    date: "January 16, 2023",
    journal: "Andrology",
    doi: "10.1111/andr.13378",
    link: "https://doi.org/10.1111/andr.13378",
    isFirstAuthor: true,
  },
  {
    title: "Generation of humanized LDHC knock‐in mice as a tool to assess human LDHC‐targeting contraceptive drugs",
    authors: ["Rie Iida‐Norita", "Haruhiko Miyata", "Yuki Kaneda", "Chihiro Emori", "Taichi Noda", "Tatsuya Nakagawa", "Martin M. Matzuk", "Masahito Ikawa"],
    date: "December 19, 2022",
    journal: "Andrology",
    doi: "10.1111/andr.13359",
    link: "https://doi.org/10.1111/andr.13359",
    isFirstAuthor: false,
  },
  {
    title: "IRGC1, a testis-enriched immunity related GTPase, is important for fibrous sheath integrity and sperm motility in mice",
    authors: ["Yuki Kaneda", "Haruhiko Miyata", "Keisuke Shimada", "Yuki Oyama", "Rie Iida-Norita", "Masahito Ikawa"],
    date: "August 2022",
    journal: "Developmental Biology",
    doi: "10.1016/j.ydbio.2022.05.011",
    link: "https://doi.org/10.1016/j.ydbio.2022.05.011",
    isFirstAuthor: true,
  },
  {
    title: "The motor domain of testis-enriched kinesin KIF9 is essential for its localization in the mouse flagellum",
    authors: ["Haruhiko Miyata", "Yuki Oyama", "Yuki Kaneda", "Masahito Ikawa"],
    date: "February 9, 2022",
    journal: "Experimental Animals",
    doi: "10.1538/expanim.21-0082",
    link: "https://doi.org/10.1538/expanim.21-0082",
    isFirstAuthor: false,
  },
  {
    title: "SPATA33 localizes calcineurin to the mitochondria and regulates sperm motility in mice",
    authors: ["Haruhiko Miyata", "Seiya Oura", "Akane Morohoshi", "Keisuke Shimada", "Daisuke Mashiko", "Yuki Oyama", "Yuki Kaneda", "Takafumi Matsumura", "Ferheen Abbasi", "Masahito Ikawa"],
    date: "August 31, 2021",
    journal: "Proceedings of the National Academy of Sciences",
    doi: "10.1073/pnas.2106673118",
    link: "https://doi.org/10.1073/pnas.2106673118",
    isFirstAuthor: false,
  },
  {
    title: "CIB4 is essential for the haploid phase of spermatogenesis in mice",
    authors: ["Zoulan Xu", "Haruhiko Miyata", "Yuki Kaneda", "Julio M Castaneda", "Yonggang Lu", "Akane Morohoshi", "Zhifeng Yu", "Martin M Matzuk", "Masahito Ikawa"],
    date: "August 4, 2020",
    journal: "Biology of Reproduction",
    doi: "10.1093/biolre/ioaa059",
    link: "https://doi.org/10.1093/biolre/ioaa059",
    isFirstAuthor: false,
  }
  // Add other publications here...
];

const Publications = () => {
  return (
    <div className="page-container">
      <h1>Publications</h1>
      <h2>First Author</h2>
      <ul>
        {publicationsData
          .filter(pub => pub.isFirstAuthor)
          .map((pub, index) => (
            <li key={index} style={{ textAlign: "left" }}>
              <h3>{pub.title}</h3>
              <p>Authors: {pub.authors.join(', ')}</p>
              <p>Published on: {pub.date} in {pub.journal}</p>
              <p>
                <a href={pub.link} target="_blank" rel="noopener noreferrer">DOI: {pub.doi}</a>
              </p>
            </li>
          ))}
      </ul>

      <h2>Co-Authors</h2>
      <ul>
        {publicationsData
          .filter(pub => !pub.isFirstAuthor)
          .map((pub, index) => (
            <li key={index} style={{ textAlign: "left" }}>
              <h3>{pub.title}</h3>
              <p>Authors: {pub.authors.join(', ')}</p>
              <p>Published on: {pub.date} in {pub.journal}</p>
              <p>
                <a href={pub.link} target="_blank" rel="noopener noreferrer">DOI: {pub.doi}</a>
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Publications;
