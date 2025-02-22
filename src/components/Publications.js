import React from 'react';

const publicationsData = [
  {
    title: "Development of functional spermatozoa in mammalian spermiogenesis",
    authors: ["Haruhiko Miyata", "Keisuke Shimada", "Yuki Kaneda", "Masahito Ikawa"],
    date: "2024-07-15",
    journal: "Development",
    doi: "10.1242/dev.202838",
    link: "https://doi.org/10.1242/dev.202838"
  },
  {
    title: "FBXO24 deletion causes abnormal accumulation of membraneless electron-dense granules in sperm flagella and male infertility",
    authors: ["Yuki Kaneda", "Haruhiko Miyata", "Zoulan Xu", "Keisuke Shimada", "Maki Kamoshita", "Tatsuya Nakagawa", "Chihiro Emori", "Masahito Ikawa"],
    date: "2024-07-15",
    journal: "eLife",
    doi: "10.7554/eLife.92794.2",
    link: "https://doi.org/10.7554/eLife.92794.2"
  },
  {
    title: "Testis‐specific proteins, TSNAXIP1 and 1700010I14RIK, are important for sperm motility and male fertility in mice",
    authors: ["Yuki Kaneda", "Haruhiko Miyata", "Keisuke Shimada", "Seiya Oura", "Masahito Ikawa"],
    date: "2023-01-16",
    journal: "Andrology",
    doi: "10.1111/andr.13378",
    link: "https://doi.org/10.1111/andr.13378"
  },
  // Add other publications here...
];

const Publications = () => {
  return (
    <div>
      <h1>Publications</h1>
      <ul>
        {publicationsData.map((pub, index) => (
          <li key={index}>
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
