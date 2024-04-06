import { useEffect, useState } from "react";

interface FaqData {
  faq: FaqInterface[];
}

interface FaqInterface {
  answer: string;
  id: number;
  question: string;
}

function Faq() {
  const [isVisible, setIsVisible] = useState(Array(8).fill(false));
  const [faqData, setFaqData] = useState<FaqData>({ faq: [] });
  const toggleVisibility = (index: number) => {
    const updatedVisibility = [...isVisible];
    updatedVisibility[index] = !updatedVisibility[index];
    setIsVisible(updatedVisibility);
  };

  useEffect(function () {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setFaqData(data))
      .catch((error) => console.log("Error fetching data", error));
  }, []);

  const faq = faqData?.faq;

  return (
    <>
      <section className="question-bg pt-4 bg-no-repeat" id="faq">
        <h3 className="text-2xl text-center pb-16">
          <span className="line"></span>
          FAQs
        </h3>
        <div className="max-w-4xl my-0 mx-auto">
          {faq?.map((faq: FaqInterface, index: number) => (
            <div className="pb-12" key={faq?.id}>
              <div className="flex justify-between pb-1">
                <span className="text-xl font-semibold">{faq?.question}</span>
                <img
                  className="cursor-pointer"
                  src={
                    isVisible[index]
                      ? "./images/minus.svg"
                      : "./images/plus.svg"
                  }
                  alt="toggle"
                  onClick={() => toggleVisibility(index)}
                />
              </div>
              {isVisible[index] && (
                <p className="pb-4 pt-4 border-b text-sm border-b-navBlack leading-5">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Faq;
