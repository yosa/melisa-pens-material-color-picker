/**
 * inspirate by https://material.uplabs.com/posts/material-color-picker
 * source code in https://github.com/yosa/melisa-pens-material-color-picker
 */

Ext.manifest = {
	melisa: {
            server: window.location.href.indexOf('codepen') === -1 ? window.location.href :
            'https://yosa.github.io/melisa-pens-material-color-picker/'
        }
};

Ext.application({
    name: 'Melisa.pens',
    
    paths: {
        'Melisa.pens': Ext.manifest.melisa.server + 'app'
    },
    
    requires: [
        'Melisa.pens.view.mcp.Wrapper'
    ],
    
    mainView: 'Melisa.pens.view.mcp.Wrapper'
    
});
