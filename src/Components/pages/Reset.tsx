import { sendPasswordResetEmail } from 'firebase/auth'
import { database } from '../../config/firebase'

function Reset() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const removal = e.target.email.value;
        sendPasswordResetEmail(database,removal).then(data => {
            alert('Check your gmail')
        }).catch(err=> {
            alert(err.code)
        })
    }
  return (
    <div>
        <h2>Forgot Password</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input name="email"/>
            <button>Reset</button>
        </form>
    </div>
  )
}

export default Reset