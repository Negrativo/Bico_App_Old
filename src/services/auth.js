import storage from './storage';

export async function onSignIn(token) { storage.setItem("TOKEN_KEY", JSON.stringify(token)) };

export async function onSignOut() { storage.removeItem("TOKEN_KEY") };

export async function isSignedIn() {
  const token = await storage.getItem("TOKEN_KEY");
  return !!token ? true : false;
};