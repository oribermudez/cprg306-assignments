"use client"

import { useUserAuth } from "./_utils/auth-context";
import { useState } from "react";
import { useRouter } from 'next/navigation'

import Image from "next/image";

const Login = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleGitHubSignIn = async () => {
    await gitHubSignIn();
    router.push('/');
  };

  const handleFirebaseSignOut = async () => {
    await firebaseSignOut();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex justify-center items-center bg-[#29DDDE]">
        <Image src="/assets/login.jpg" width={400} height={400} alt={name} />
      </div>
      <div className="md:min-h-screen flex items-center justify-center bg-slate-50 text-gray-900">
        <div className="bg-white p-8 rounded-lg shadow-md w-[400px]">
          {user ? (
            <>
              <h1 className="text-2xl font-semibold mb-4">Log Out</h1>
              <p>
                Welcome, {user.displayName} ({user.email})
              </p>
              <button
                onClick={handleFirebaseSignOut}
                className="mt-4 bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-red-600"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-semibold mb-4">Sign In</h1>
              <p className="text-sm text-gray-300">Please create your account.</p>
              <div className="relative mt-8">
                <label
                  htmlFor="username"
                  className={`absolute left-2 ${
                    name ? 'text-gray-600 text-xs' : 'text-gray-400 text-md'
                  } transition-all pointer-events-none`}
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  onChange={(e) => setName(e.target.value)}
                  required
                  className={`w-full px-2 py-1 border-b-2 text-gray-600 text-sm border-gray-300 focus:border-cyan-500 bg-white focus:outline-none ${name && 'pt-4'}`}
                />
              </div>
              <div className="relative my-6">
                <label
                  htmlFor="password"
                  className={`absolute left-2 ${
                    password ? 'text-gray-600 text-xs' : 'text-gray-400 text-md'
                  } transition-all pointer-events-none`}
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={`w-full px-2 py-1 border-b-2 text-gray-600 text-sm border-gray-300 focus:border-cyan-500 bg-white focus:outline-none ${password && 'pt-4'}`}
                />
              </div>

              <button
                onClick={handleGitHubSignIn}
                className="mt-8 bg-cyan-500 text-white font-semibold px-4 py-2 rounded hover:bg-cyan-400 w-full flex gap-4 justify-center items-center"
              >
                Sign In
              </button>

              <p className="text-sm text-gray-300 my-8 flex justify-center">- or -</p>

              <button
                onClick={handleGitHubSignIn}
                className="mt-4 bg-black text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 w-full flex gap-4 justify-center items-center"
              >
                Sign In with GitHub
                <Image src="/assets/github.png" width={20} height={20} alt={name} />
              </button>
              <button
                onClick={handleGitHubSignIn}
                className="mt-4 bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-500 w-full flex gap-4 justify-center items-center"
              >
                Sign In with Facebook
                <Image src="/assets/facebook.png" width={20} height={20} alt={name} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
    
  );
};

export default Login;
