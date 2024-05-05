// import { AuthHeader } from "../helper/AuthHeader";
import { Auth } from "./firebase/config";
// import axios from "axios";
// import { APIurl } from "../helper/API";
import { ClearSession, SetSession } from "./AuthService";

export function SignInUser(email, password) {
  // Sign in with email and password
  Auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      userCredential.user.getIdToken().then((token) => {
        console.log("t", token);
        SetSession(token);
      });
    })
    .catch((error) => console.log(error));
}

export function CreateAuthUser(email, password) {
  // Sign in with email and password
  Auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      userCredential.user.getIdToken().then((token) => {
        SetSession(token);
        console.log("new User create");
      });
    })
    .catch((error) => {
      console.log("fbs u:", error);
    });
}

export function SignUp(email, password) {
  // Sign in with email and password
  Auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      userCredential.user.getIdToken().then((token) => {
        console.log("token", token);
      });
    })
    .catch((error) => {
      console.log("SignUp err: ", error);
    });
}

export function SignOut() {
  // Sign in with email and password
  Auth.signOut()
    .then(() => {
      ClearSession();
    })
    .catch((error) => console.log(error));
}

// export const CreateUser = async (user) =>
//   await axios.post(APIurl + "/user", user, AuthHeader());

// export const UpdateUser = async (user, id) =>
//   await axios.put(APIurl + "/user/" + id, user, AuthHeader());

// export const GetUserByID = async (id) =>
//   await axios.get(APIurl + "/user/" + id, AuthHeader());

// export const DeleteUserByID = async (id) =>
//   await axios.delete(APIurl + "/user/" + id, AuthHeader());
