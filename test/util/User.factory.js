const today = new Date();

module.exports = {
  full_demographic: {
    bob: {
      agreedToTerms: today,
      email: "robert@bobsburgers.local",
      name: 'Robert "Bob" Belcher Jr.',
      lastLogin: today,
      password: "ilovelinda",
      phone: "(555) 987-6543"
    }
  },
  min_required: {
    bob: {
      email: "bob@bobsburgers.local",
      name: "Bob Belcher",
      password: "ilovelinda"
    },
    linda: {
      email: "linda@bobsburgers.local",
      name: "Linda Belcher",
      password: "ilovebob"
    }
  }
};
