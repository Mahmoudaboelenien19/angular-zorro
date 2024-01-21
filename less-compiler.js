const less = require( 'less' );
const LessPluginCleanCSS = require( 'less-plugin-clean-css' );
const fs = require( 'fs' );

// ng zorro defined styles
const basicStyles = `@import './node_modules/ng-zorro-antd/ng-zorro-antd.less';`;
const darkStyles = `@import './node_modules/ng-zorro-antd/ng-zorro-antd.dark.less';`;
// ng zorro compact theme variables
// const compactThemeVars = require( './node_modules/ng-zorro-antd/' );
// ng zorro dark theme variables
const darkThemeVars = require( './node_modules/ng-zorro-antd/dark-theme' );

less.render( `${ basicStyles }`, {
    javascriptEnabled: true,
    plugins: [new LessPluginCleanCSS( { advanced: true } )],
    modifyVars: {
        ...{
            // for the compact theme
            // you need to add your color variables here
            // you can find the full variables list here
            // https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/scripts/site/_site/doc/theme.less
            // 'primary-color': '#111521',
            'primary-color': '#f55',

        }
    }
} ).then( data => {
    fs.writeFileSync(
        // output path for the theme style
        './src/assets/themes/light.css',
        data.css
    );
} ).catch( e => {
    // log the render error
    console.error( e );
} );

less.render( `${ darkStyles }`, {
    javascriptEnabled: true,
    plugins: [new LessPluginCleanCSS( { advanced: true } )],
    modifyVars: {
        ...darkThemeVars,
        ...{
            // for the dark theme
            // you need to add your color variables here
            // you can find the full variables list here
            // https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/scripts/site/_site/doc/theme.less
            'primary-color': '#f55',

        }
    }
} ).then( data => {
    fs.writeFileSync(
        // output path for the theme style
        './src/assets/themes/dark.css',
        data.css
    );
} ).catch( e => {
    // log the render error
    console.error( e );
} );