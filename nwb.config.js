module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: {
      global: "ReactLastImage",
      externals: {
        react: "React"
      }
    }
  }
};
