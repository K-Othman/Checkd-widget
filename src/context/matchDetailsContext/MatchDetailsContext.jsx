import { createContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const MatchDetailsContext = createContext({
  matchesDetails: [],
});

const MatchDetailsProvider = ({ children }) => {
  const [matchesDetails, setMatchesDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMatchsDetails = () => {
    fetch("https://frontend-tech-test-ashy.vercel.app/api/match")
      .then((res) => res.json())
      .then((matchesDetails) => setMatchesDetails(matchesDetails));
  };

  useEffect(() => {
    setLoading(true);
    getMatchsDetails();
    setLoading(false);
  }, []);

  if (loading) {
    <p>Loading ...</p>;
  }

  const MatchesContextValue = useMemo(() => {
    return {
      matchesDetails,
      loading,
    };
  }, [matchesDetails, loading]);

  return (
    <MatchDetailsContext.Provider value={MatchesContextValue}>
      {children}
    </MatchDetailsContext.Provider>
  );
};
MatchDetailsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MatchDetailsProvider;
