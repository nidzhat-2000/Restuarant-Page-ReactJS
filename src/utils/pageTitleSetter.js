const { useEffect } = require('react');

const useTitleSetter = page => {
  useEffect(() => {
    document.title = page;
  }, [page]);
};

export default useTitleSetter;
