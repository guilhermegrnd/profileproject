interface Response {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    settings: {
      darkMode:boolean;
    }
  }
};

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 's99au3huih84380s',
        user: {
          id: 1,
          name: 'Guigui',
          email: 'guigui@gui.com',
          settings: {
            darkMode: false
          }
        }
      });
    }, 2000);
  });
}
