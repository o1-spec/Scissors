import { useEffect } from "react";
import { db } from "../../config/firebase";
import { useParams } from "react-router-dom";
import { collection } from "firebase/firestore";

function Redirect() {
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbCollection = collection(db, "urls");
        const querySnapshot = dbCollection.where("slug", "==", slug).get();
        if (!querySnapshot.empty) {
          const finalData = querySnapshot.docs[0].data();
          window.location.href = finalData.url;
        } else {
          console.log("No matching document found");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchData();
  }, [slug]);
  return <div></div>;
}

export default Redirect;
