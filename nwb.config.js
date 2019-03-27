module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'LastImage',
      externals: {
        react: 'React'
      }
    }
  }
}
