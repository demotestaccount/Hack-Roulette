const GitHubStrategy = require('passport-github2').Strategy;

const secrets = require('../keys.js');

const passport = require('passport');
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});
passport.use(new GitHubStrategy({
  clientID: secrets.GITHUB_CLIENT_ID,
  clientSecret: secrets.GITHUB_CLIENT_SECRET,
}, (accessToken, refreshToken, profile, done) => {
  process.nextTick(() =>
    done(null, profile)
  );
}));

module.exports = passport;
