import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch('/server/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(loginSuccess(data));
      navigate('/');
    } catch (error) {
      console.log('Ocurrió un error', error);
    }
  };
  return (
    <button
      onClick={handleGoogleClick}
      className="w-full flex justify-center mt-2 py-2 px-3 border-2 border-cyan-600 rounded-md text-sm redhat-regular text-black bg-gray-50 transition-colors hover:bg-cyan-600 hover:text-white"
    >
      Continuar con Google
    </button>
  );
};

export default OAuth;
