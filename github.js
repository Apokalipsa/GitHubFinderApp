class Github {
  constructor() {
    this.client_id = 'b41f959e3e091c2cc482';
    this.client_secret = '4e8e1c4e06b5a3ae164e405813016305f3283c21';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}