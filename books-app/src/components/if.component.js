

const If = ({ condition, children }) => {

    if (condition)
        return children;
    else
        return null;

}

export default If;