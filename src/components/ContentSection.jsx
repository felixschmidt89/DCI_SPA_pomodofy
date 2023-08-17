/** @format */

import React from "react";

function ContentSection({ styles, contentArray }) {
  return (
    <div className={styles.container}>
      {contentArray.map((section) => (
        <div key={section.key}>
          <h2>{section.title}</h2>
          <section>{section.content}</section>
        </div>
      ))}
    </div>
  );
}

export default ContentSection;
