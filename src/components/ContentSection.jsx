/** @format */

import React from "react";

function ContentSection({ styles, contentArray }) {
  return (
    <div className={styles.container}>
      {contentArray.map((section) => (
        <section key={section.key}>
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </section>
      ))}
    </div>
  );
}

export default ContentSection;
