Ext.define('Melisa.pens.view.mcp.Wrapper', {
    extend: 'Ext.Container',
    
    requires: [
        'Melisa.pens.view.mcp.ColorSelector',
        'Melisa.pens.view.mcp.Colors',
        'Melisa.pens.view.mcp.WrapperModel',
        'Melisa.pens.view.mcp.WrapperController'
    ],
    
    cls: 'wrapper',
    controller: 'wrapper',
    scrollable: true,
    layout: {
        type: 'hbox',
        pack: 'center'
    },
    viewModel: {
        type: 'wrapper'
    },
    items: [
        {
            xtype: 'container',
            cls: 'picker',
            layout: 'hbox',
            plugins: 'responsive',
            responsiveConfig: {
                'width > 412': {
                    userCls: 'normal'
                },
                'width <=412': {
                    userCls: 'small'
                }
            },
            items: [
                {
                    xtype: 'colorselector'
                },
                {
                    xtype: 'container',
                    layout: 'fit',
                    flex: 1,
                    items: [
                        {
                            xtype: 'label',
                            docked: 'top',
                            cls: 'header',
                            bind: {
                                html: '{currentRecord.color}'
                            }
                        },
                        {
                            xtype: 'colors'
                        }
                    ]
                }
            ]
        }
    ]
});
