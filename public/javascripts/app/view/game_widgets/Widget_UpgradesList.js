
//------------------------------------------------------------------------------
Ext.define('MC.view.game_widgets.Widget_UpgradesList', {
    extend: 'Ext.container.Container',
    alias: 'widget.upgrades_list',

    requires: [
    	'MC.view.game_widgets.Widget_UpgradeItem'
    ],
    
	width: 200,
	height: 28,
	layout: {
		type: 'hbox',
		pack: 'center'
	},
    
    //--------------------------------------------------------------------------
    initComponent: function() {
        var me = this;

        // NO items until some are added...just a convenience container for layout
        //	and controlling access to the upgrade items.
        
        me.callParent(arguments);
    }
	
});
