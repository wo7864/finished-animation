// path 사용 설정
const path = require('path')

module.exports = {
  mode: 'production',
  // 프로젝트의 최상위 모듈 파일을 시작점으로 설정
  entry: {
    // "dopyo"의 경우 빌드한 파일의 파일명으로 "app"과 같이 원하는 파일로 설정이 가능합니다.
    // 프로젝트 최상위 파일 경로를 작성합니다. "dopyo": './src/js/chart.js'와 같이 직접 경로를 넣을 수도 있습니다.
    "finished-animation": path.resolve(__dirname, './lib/index.js')
  },

  // 빌드한 파일이 저장되는 곳
  output: {
    // 프로젝트 최상위 dist폴더로 경로 설정
    path: path.resolve(__dirname, 'dist'),
    // 번들 결과물의 파일 이름 설정
    // [name]은 위에 entry에서 설정한 파일의 이름(dopyo)입니다.
    filename: '[name].js',
    // assets이 있는 경우 해당 경로 설정해주는 옵션
    publicPath: '/',
    //
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        // .js 확장자를 가진 파일에 대해 적용
        test: /\.js$/,
        // node_modules 폴더 제외
        exclude: /(node_modules)/,
        use: {
          // babel-loader 사용
          loader: 'babel-loader',
        }
      },
    ]
  },

}