import classes from "./buttons.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
export default function Form() {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setLogin] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
     await fetch("http://3.211.182.247:3000/users/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        }),
        credentials: 'include'
      })

      const res = await fetch("http://3.211.182.247:3000/users/protected-route", {
        method: 'GET',
        credentials: 'include'
      })
    try {
      if (res.status == 200) {
        setLogin(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isLogin) {
      router.push("/home");
    }
  }, [isLogin]);

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit}>
        <h3 className={classes.username}>Enter username *</h3>
        <input
          className={classes.input}
          type="text"
          value={username}
          placeholder="Enter username..."
          onChange={(e) => setUser(e.target.value)}
          required
        />
        <h3 className={classes.username}>Enter password *</h3>
        <input
          className={classes.input}
          type="password"
          value={password}
          placeholder="Enter Password..."
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button onClick={handleSubmit} className={classes.submit}>
          Log In
        </button>
        {isLogin ? (
          <p className={classes.failure}>Redirecting...</p>
        ) : (
          <p className={classes.failure}>This user does not exist</p>
        )}
      </form>
    </div>
  );
}
