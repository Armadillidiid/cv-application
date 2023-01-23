const saveCv = () => {
  const cvElement = document.getElementById("cvElement");
  html2pdf()
    .set({
      filename: "cv-application.pdf",
      margin: [15, 15],
      html2canvas: { scale: 1 },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
        margins: { left: "auto", right: "auto", top: "auto", bottom: "auto" },
      },
    })
    .from(cvElement)
    .save();
};

export default saveCv;
