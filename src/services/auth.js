import storage from './storage';

export async function onSignIn(token, user) {
  storage.setItem("TOKEN_KEY", token);
  storage.setItem("USER", JSON.stringify(user)) 
};

export async function onSignOut() { 
  storage.removeItem("TOKEN_KEY");
  //storage.removeItem("USER");
};

export async function isSignedIn() {
  const token = await storage.getItem("TOKEN_KEY");
  return !!token ? true : false;
};

export async function UserSignedIn() {
  const token = await storage.getItem("TOKEN_KEY");
  const user = await storage.getItem("USER");
  const dadosSalvos = { token: token, user: JSON.parse(user) };
  return dadosSalvos;
};