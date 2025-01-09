import "../FindandJoinChallenge/FindandJoinChallenge.css";

const FindAndJoinChallenges = () => {
  return (
    <section className="findandjoin__challenges">
      <p className="find_the_best_challenges">
        Find the Best Minds to Solve Your Biggest Challenges!
      </p>
      <p className="join__challenges">
        Join Catalyst today to get expert advice, solve critical projects, and
        collaborate with the brightest minds from around the world.
      </p>

      <div className="buttons_for_apply_hire">
        <button className="apply_as_catalyst">
          <i className="fas fa-user-plus"></i> Apply as a Catalyst
        </button>
        <button className="hire_as_catalyst">
          <i className="fas fa-briefcase"></i> Hire Catalyst
        </button>
      </div>
    </section>
  );
};

export default FindAndJoinChallenges;
