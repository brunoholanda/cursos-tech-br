const { AuthContext } = require("contexts/auth");
const { useContext } = require("react");

const useAuth = () => {
    const context = useContext(AuthContext);

    return context;
};

export default useAuth;