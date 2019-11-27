module.exports = (isDev)=>{
return {
    preserveWhitepace: true,
    extractCSS: !isDev,
    cssModules: {
        localIdentName: isDev ?'[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
        camelCase: true,
    },
   //hotReload: flase, // 根据环境变量生成
   loadres:{
    //    'docs': docsLoader,  文件开头: const docsLoader =require.resolve('./doc-loader')
    //    自定义使用loader解析
   },
   preLoader:{//loader之前先选择另一个解析器解析
   },
   postLoader:{},//loader之后再选择另一个解析器解析
 }
}