/*import { sendPasswordResetEmail } from "firebase/auth";
import { database } from "../../config/firebase";


function Reset() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const removal = e.target.email.value;
    sendPasswordResetEmail(database, removal)
      .then(() => {
        alert("Check your gmail");
      })
      .catch((err) => {
        alert(err.code);
      });
  };*/

function Reset() {
  return (
    <div>
      <h2>Forgot Password</h2>
      <form>
        <input name="email" />
        <button>Reset</button>
      </form>
    </div>
  );
}

export default Reset;
